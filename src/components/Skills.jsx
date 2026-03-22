import './Skills.css';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Monitor, Server, Wrench } from 'lucide-react';

const categoryIcons = { Frontend: Monitor, Backend: Server, 'Tools & Platforms': Wrench };
const categoryColors = {
    Frontend: { bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.25)', text: '#60a5fa' },
    Backend: { bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)', text: '#a78bfa' },
    'Tools & Platforms': { bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)', text: '#34d399' },
};

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [active, setActive] = useState('All');
    const { skills, sections: { skills: skillsConfig } } = useData();
    const tabs = ['All', ...skills.categories.map((c) => c.name)];
    const filtered = active === 'All' ? skills.categories : skills.categories.filter((c) => c.name === active);

    return (
        <section id="skills" className="section skills-section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-tag">{skillsConfig.tag}</div>
                    <h2 className="section-title">{skills.title}</h2>
                    <p className="section-subtitle">{skillsConfig.subtitle}</p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    className="skills-tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`skills-tab ${active === tab ? 'active' : ''}`}
                            onClick={() => setActive(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                <div className="skills-grid">
                    {filtered.map((category, i) => {
                        const Icon = categoryIcons[category.name] || Wrench;
                        const colors = categoryColors[category.name] || categoryColors.Frontend;
                        return (
                            <motion.div
                                key={category.name}
                                className="skills-card card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                            >
                                <div className="skills-card-header" style={{ '--cat-color': colors.text }}>
                                    <div className="skills-cat-icon" style={{ background: colors.bg, borderColor: colors.border }}>
                                        <Icon size={20} style={{ color: colors.text }} />
                                    </div>
                                    <h3 className="skills-cat-name">{category.name}</h3>
                                </div>
                                <div className="skills-badges">
                                    {category.technologies.map((tech, j) => (
                                        <motion.span
                                            key={tech}
                                            className="tech-badge"
                                            style={{ '--cat-color': colors.text, '--cat-bg': colors.bg, '--cat-border': colors.border }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: 0.05 * j + 0.2 * i }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
