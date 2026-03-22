import './Hero.css';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin, Download } from 'lucide-react';
import FallbackImg from './FallbackImg';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
    const { personal, about, sections: { hero } } = useData();

    return (
        <section id="home" className="hero">
            <div className="hero-grid-bg" aria-hidden="true" />

            {/* Ambient blobs */}
            <div className="hero-blob hero-blob-1" aria-hidden="true" />
            <div className="hero-blob hero-blob-2" aria-hidden="true" />

            <div className="container hero-content">
                {/* ── Left: Text ── */}
                <div className="hero-text">
                    {hero.badge.show && (
                        <motion.div {...fadeUp(0)} className="hero-badge">
                            <span className="hero-badge-dot" />
                            {hero.badge.text}
                        </motion.div>
                    )}

                    <motion.h1 {...fadeUp(0.1)} className="hero-name">
                        {hero.greeting}{' '}
                        <span className="gradient-text">{personal.name}</span>
                    </motion.h1>

                    <motion.div {...fadeUp(0.2)} className="hero-title-line">
                        <span className="hero-title-text">{personal.title}</span>
                    </motion.div>

                    <motion.p {...fadeUp(0.3)} className="hero-description">
                        {personal.description}
                    </motion.p>

                    <motion.div {...fadeUp(0.35)} className="hero-location">
                        <MapPin size={14} />
                        {personal.location}
                    </motion.div>

                    <motion.div {...fadeUp(0.45)} className="hero-actions">
                        <a
                            href={`mailto:${personal.email}`}
                            className="btn btn-primary"
                            id="hero-contact-btn"
                        >
                            <Mail size={17} />
                            {hero.cta.primary}
                        </a>
                        <button
                            className="btn btn-outline"
                            id="hero-scroll-btn"
                            onClick={() =>
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            {hero.cta.secondary}
                            <ArrowDown size={15} />
                        </button>
                    </motion.div>

                    {/* Stats row inline under buttons */}
                    <motion.div {...fadeUp(0.55)} className="hero-stats">
                        {about.statsCard.map((stat) => (
                            <div key={stat.title} className="hero-stat">
                                <span className="hero-stat-value gradient-text">{stat.value}</span>
                                <span className="hero-stat-label">{stat.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Right: Avatar ── */}
                <motion.div
                    className="hero-avatar-col"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="hero-avatar-frame">
                        {/* Decorative rotating rings */}
                        <div className="avatar-ring avatar-ring-outer" />
                        <div className="avatar-ring avatar-ring-inner" />

                        {/* Photo */}
                        <div className="avatar-img-wrap">
                            <FallbackImg
                                src={personal.avatar}
                                alt={personal.name}
                                className="hero-avatar-img"
                            />
                        </div>
                    </div>


                </motion.div>
            </div>

            <motion.div
                className="hero-scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
            >
                <div className="scroll-line" />
                <span>{hero.scrollHint}</span>
            </motion.div>
        </section>
    );
}
