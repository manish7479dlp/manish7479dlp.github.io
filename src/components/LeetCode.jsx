import './LeetCode.css';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { ExternalLink, Code2, Github } from 'lucide-react';

const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

// ── Cache helpers (safe — handles tracking prevention / blocked storage) ──
function cacheGet(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const { ts, data } = JSON.parse(raw);
        if (Date.now() - ts < CACHE_TTL_MS) return data;
        localStorage.removeItem(key);
    } catch { /* storage blocked or corrupt — ignore */ }
    return null;
}

function cacheSet(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
    } catch { /* storage blocked — ignore */ }
}

// ── Calendar heatmap helpers ─────────────────────────────
const CAL_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toISODate(d) {
    return d.toISOString().slice(0, 10);
}

function formatCalDate(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function buildCalWeeks(map) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = toISODate(today);

    // Align start to the Sunday 52 weeks before today
    const start = new Date(today);
    start.setDate(start.getDate() - 52 * 7);
    start.setDate(start.getDate() - start.getDay()); // rewind to Sunday

    const weeks = [];
    const cur = new Date(start);

    while (toISODate(cur) <= todayStr) {
        const week = [];
        for (let d = 0; d < 7; d++) {
            const dateStr = toISODate(cur);
            const valid = dateStr <= todayStr;
            week.push({ date: dateStr, count: (valid && map[dateStr]) ? map[dateStr] : 0, valid, level: 0 });
            cur.setDate(cur.getDate() + 1);
        }
        weeks.push(week);
    }
    return weeks;
}

function calMonthLabels(weeks) {
    const labels = [];
    let lastM = -1;
    weeks.forEach((week, i) => {
        if (week[0]?.valid && week[0]?.date) {
            const m = parseInt(week[0].date.slice(5, 7)) - 1;
            if (m !== lastM) {
                labels.push({ weekIndex: i, month: CAL_MONTHS[m] });
                lastM = m;
            }
        }
    });
    return labels;
}

function lcLevel(count) {
    if (count <= 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 9) return 3;
    return 4;
}

// ── Compute active days + max streak from flat day list ──
function computeCalStats(weeks) {
    const allDays = weeks.flat().filter(d => d.valid);
    const activeDays = allDays.filter(d => d.count > 0).length;
    let maxStreak = 0, cur = 0;
    for (const day of allDays) {
        if (day.count > 0) { cur++; maxStreak = Math.max(maxStreak, cur); }
        else cur = 0;
    }
    return { activeDays, maxStreak };
}

// ── Unified tabbed contribution calendar ──
const PLATFORMS = {
    github: {
        key: 'github',
        label: 'GitHub',
        icon: null, // set below via prop
        colors: ['rgba(255,255,255,0.06)', '#0e4429', '#006d32', '#26a641', '#39d353'],
        accent: '#39d353',
        accentDim: 'rgba(57,211,83,0.15)',
        unit: 'contribution',
    },
    leetcode: {
        key: 'leetcode',
        label: 'LeetCode',
        icon: null,
        colors: ['rgba(255,255,255,0.05)', '#1a2e1a', '#1f6b3d', '#2cbb5d', '#39d353'],
        accent: '#ffa116',
        accentDim: 'rgba(255,161,22,0.15)',
        unit: 'submission',
    },
};

function CalendarGrid({ weeks, monthLabels, colors, label, loading }) {
    const [hovered, setHovered] = useState(null);
    const [cellSize, setCellSize] = useState(13);
    const wrapRef = useRef(null);

    const GAP = 3;
    const DAY_W = 28;
    const WEEK_W = cellSize + GAP;

    // Dynamically compute cell size to fill the container width
    useEffect(() => {
        if (!wrapRef.current || weeks.length === 0) return;
        const ro = new ResizeObserver(([entry]) => {
            const available = entry.contentRect.width - DAY_W - GAP;
            const computed = Math.floor((available - (weeks.length - 1) * GAP) / weeks.length);
            setCellSize(Math.max(10, Math.min(16, computed)));
        });
        ro.observe(wrapRef.current);
        return () => ro.disconnect();
    }, [weeks.length]);

    if (loading) {
        return (
            <div className="ctab-skel">
                {Array.from({ length: 53 }).map((_, wi) => (
                    <div key={wi} className="ctab-skel-col">
                        {Array.from({ length: 7 }).map((_, di) => (
                            <div key={di} className="ctab-skel-cell" style={{ animationDelay: `${(wi * 7 + di) * 0.003}s` }} />
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="ctab-grid-wrap" onMouseLeave={() => setHovered(null)} ref={wrapRef}>
            {/* Scrollable on mobile, fills width on desktop */}
            <div className="ctab-scroll">
                <div className="ctab-scroll-inner">
                    {/* Month row */}
                    <div className="ctab-months" style={{ paddingLeft: DAY_W }}>
                        {monthLabels.map(({ weekIndex, month }, i) => {
                            const nxt = monthLabels[i + 1]?.weekIndex ?? weeks.length;
                            const w = (nxt - weekIndex) * WEEK_W;
                            return (
                                <div key={`${month}-${weekIndex}`} className="ctab-month-lbl" style={{ width: w, minWidth: w }}>
                                    {month}
                                </div>
                            );
                        })}
                    </div>

                    {/* Day labels + cells */}
                    <div className="ctab-row">
                        <div className="ctab-day-labels" style={{ width: DAY_W }}>
                            {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
                                <div key={i} className="ctab-day-lbl" style={{ height: cellSize, marginBottom: i < 6 ? GAP : 0 }}>{d}</div>
                            ))}
                        </div>
                        <div
                            className="ctab-grid"
                            style={{ gridTemplateRows: `repeat(7, ${cellSize}px)`, gridAutoColumns: cellSize, gap: GAP }}
                        >
                            {weeks.flatMap((week, wi) =>
                                week.map((day, di) => (
                                    <div
                                        key={`${wi}-${di}`}
                                        className="ctab-cell"
                                        style={{
                                            width: cellSize,
                                            height: cellSize,
                                            background: day.valid ? colors[day.level] : 'transparent',
                                            outline: (day.valid && day.level === 0) ? '1px solid rgba(255,255,255,0.07)' : 'none',
                                        }}
                                        onMouseEnter={() => day.valid && setHovered(day)}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover tooltip bar */}
            <div className="ctab-hover-bar">
                {hovered ? (
                    <span>
                        <strong style={{ color: colors[hovered.level] || colors[1] }}>
                            {hovered.count || 'No'} {hovered.count === 1 ? label : `${label}s`}
                        </strong>
                        {' '}on {formatCalDate(hovered.date)}
                    </span>
                ) : '\u00A0'}
            </div>

            {/* Legend */}
            <div className="ctab-legend">
                <span className="ctab-legend-txt">Less</span>
                {colors.map((c, i) => (
                    <div key={i} className="ctab-legend-cell" style={{
                        width: cellSize,
                        height: cellSize,
                        background: c,
                        outline: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    }} />
                ))}
                <span className="ctab-legend-txt">More</span>
            </div>
        </div>
    );
}

function CalendarTabs({ ghCal, lcCal, username }) {
    const [active, setActive] = useState('github');
    const platform = PLATFORMS[active];
    const calData = active === 'github' ? ghCal : lcCal;

    const { activeDays, maxStreak } = useMemo(
        () => computeCalStats(calData.weeks),
        [calData.weeks]
    );

    const profileUrl = active === 'github'
        ? `https://github.com/${username}`
        : `https://leetcode.com/u/${username}/`;

    return (
        <div className="ctab-card card">
            {/* ── Top bar: tabs + stats ── */}
            <div className="ctab-topbar">
                {/* Tab pills */}
                <div className="ctab-tabs">
                    {Object.values(PLATFORMS).map(p => (
                        <button
                            key={p.key}
                            className={`ctab-tab${active === p.key ? ' ctab-tab--active' : ''}`}
                            style={active === p.key ? { '--tab-accent': p.accent, '--tab-accent-dim': p.accentDim } : {}}
                            onClick={() => setActive(p.key)}
                        >
                            {p.key === 'github' ? <Github size={13} /> : <Code2 size={13} />}
                            {p.label}
                        </button>
                    ))}
                </div>

                {/* Stats chips */}
                {!calData.loading && (
                    <div className="ctab-stats">
                        <span className="ctab-chip" style={{ '--chip-accent': platform.accent, '--chip-dim': platform.accentDim }}>
                            <span className="ctab-chip-num">{calData.total.toLocaleString()}</span>
                            <span className="ctab-chip-lbl">{platform.unit}s</span>
                        </span>
                        <span className="ctab-chip ctab-chip--muted">
                            <span className="ctab-chip-num">{activeDays}</span>
                            <span className="ctab-chip-lbl">active days</span>
                        </span>
                        <span className="ctab-chip ctab-chip--muted">
                            <span className="ctab-chip-num">{maxStreak}</span>
                            <span className="ctab-chip-lbl">max streak</span>
                        </span>
                        <a
                            href={profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ctab-profile-link"
                            style={{ '--link-accent': platform.accent }}
                        >
                            View profile <ExternalLink size={11} />
                        </a>
                    </div>
                )}
            </div>

            {/* ── Calendar grid ── */}
            <CalendarGrid
                weeks={calData.weeks}
                monthLabels={calData.monthLabels}
                colors={platform.colors}
                label={platform.unit}
                loading={calData.loading}
            />
        </div>
    );
}

export default function LeetCode() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const { leetcode, sections: { leetcode: leetcodeConfig } } = useData();

    // ── calendar state ──
    const [ghCal, setGhCal] = useState({ weeks: [], monthLabels: [], total: 0, loading: true });
    const [lcCal, setLcCal] = useState({ weeks: [], monthLabels: [], total: 0, loading: true });

    // ── Single consolidated effect with caching ──
    useEffect(() => {
        const username = leetcode.username;
        let cancelled = false;

        async function safeFetch(url) {
            const res = await fetch(url);
            if (res.status === 429) throw new Error('rate-limited');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        }

        // ── 1. GitHub contributions ──
        async function loadGitHub() {
            const cacheKey = `gh_cal_${username}`;
            const cached = cacheGet(cacheKey);
            if (cached) {
                if (!cancelled) setGhCal({ ...cached, loading: false });
                return;
            }
            try {
                const data = await safeFetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
                const map = {};
                const levelMap = {};
                let total = 0;
                data.contributions.forEach(({ date, count, level }) => {
                    map[date] = count;
                    levelMap[date] = level;
                    total += count;
                });
                const weeks = buildCalWeeks(map);
                weeks.forEach(week => week.forEach(day => {
                    day.level = day.valid ? (levelMap[day.date] ?? 0) : 0;
                }));
                const result = { weeks, monthLabels: calMonthLabels(weeks), total };
                cacheSet(cacheKey, result);
                if (!cancelled) setGhCal({ ...result, loading: false });
            } catch {
                if (!cancelled) setGhCal(p => ({ ...p, loading: false }));
            }
        }

        // ── 2. LeetCode submission calendar ──
        async function loadLCCalendar() {
            const cacheKey = `lc_cal_${username}`;
            const cached = cacheGet(cacheKey);
            if (cached) {
                if (!cancelled) setLcCal({ ...cached, loading: false });
                return;
            }
            try {
                const data = await safeFetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
                const raw = JSON.parse(data.submissionCalendar || '{}');
                const map = {};
                let total = 0;
                Object.entries(raw).forEach(([ts, count]) => {
                    const dateStr = toISODate(new Date(parseInt(ts) * 1000));
                    map[dateStr] = count;
                    total += count;
                });
                const weeks = buildCalWeeks(map);
                weeks.forEach(week => week.forEach(day => {
                    day.level = day.valid ? lcLevel(day.count) : 0;
                }));
                const result = { weeks, monthLabels: calMonthLabels(weeks), total };
                cacheSet(cacheKey, result);
                if (!cancelled) setLcCal({ ...result, loading: false });
            } catch {
                if (!cancelled) setLcCal(p => ({ ...p, loading: false }));
            }
        }

        // Stagger fetches so we don't blast the API simultaneously
        loadGitHub();
        setTimeout(() => { if (!cancelled) loadLCCalendar(); }, 400);

        return () => { cancelled = true; };
    }, [leetcode.username]);

    return (
        <section id="leetcode" className="section leetcode-section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-tag">{leetcodeConfig.tag}</div>
                    <h2 className="section-title">{leetcodeConfig.title}</h2>
                    <p className="section-subtitle">{leetcodeConfig.subtitle}</p>
                </motion.div>

                <motion.div
                    className="lc-embed-wrap"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="lc-embed-card card">
                        <a
                            href={`https://leetcode.com/u/${leetcode.username}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lc-img-link"
                        >
                            <img
                                src={`https://leetcard.jacoblin.cool/${leetcode.username}?theme=dark&font=Fira%20Code&ext=activity&border=0&radius=12`}
                                alt={`${leetcode.username} LeetCode stats`}
                                className="lc-stats-img"
                                loading="lazy"
                            />
                        </a>
                        <div className="lc-embed-footer">
                            <a
                                href={`https://leetcode.com/u/${leetcode.username}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary lc-cta-btn"
                            >
                                <Code2 size={16} />
                                View LeetCode Profile
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* ── Contribution Calendars ── */}
                <motion.div
                    className="cal-section-divider"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="cal-section-label">
                        <span className="cal-section-tag">Activity</span>
                        <h3 className="cal-section-heading">Contribution Calendars</h3>
                        <p className="cal-section-sub">Daily coding activity across GitHub &amp; LeetCode — last 52 weeks</p>
                    </div>

                    <CalendarTabs
                        ghCal={ghCal}
                        lcCal={lcCal}
                        username={leetcode.username}
                    />
                </motion.div>
            </div>
        </section>
    );
}
