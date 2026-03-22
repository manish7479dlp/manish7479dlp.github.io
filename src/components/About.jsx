import './About.css';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Target } from 'lucide-react';

const icons = [Code2, Lightbulb, Target];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const { about, sections: { about: aboutConfig } } = useData();

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-tag">{aboutConfig.tag}</div>
                    <h2 className="section-title">{about.title}</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text-col"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {about.content.split('\n\n').map((para, i) => (
                            <p key={i} className="about-para">{para}</p>
                        ))}

                        <div className="about-highlights">
                            {aboutConfig.highlights.map((text, i) => {
                                const Icon = icons[i] || Code2;
                                return (
                                    <div key={i} className="highlight-item">
                                        <Icon size={18} className="highlight-icon" />
                                        <span>{text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-cards-col"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        {about.statsCard.map((stat, i) => {
                            const Icon = icons[i];
                            return (
                                <div key={stat.title} className="stat-card card">
                                    <div className="stat-card-icon">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <div className="stat-card-value gradient-text">{stat.value}</div>
                                        <div className="stat-card-label">{stat.title}</div>
                                    </div>
                                </div>
                            );
                        })}

                        {about.codeSnippet && (
                            <div className="about-code-snippet card">
                                <div className="code-dots">
                                    <span /><span /><span />
                                </div>
                                <pre className="code-block">
                                    <code>{about.codeSnippet}</code>
                                </pre>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
