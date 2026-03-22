import './Experience.css';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const { experience, sections: { experience: expConfig } } = useData();

    return (
        <section id="experience" className="section experience-section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-tag">{expConfig.tag}</div>
                    <h2 className="section-title">{expConfig.title}</h2>
                    <p className="section-subtitle">{expConfig.subtitle}</p>
                </motion.div>

                <div className="timeline">
                    {[...experience].reverse().map((exp, i) => (
                        <motion.div
                            key={i}
                            className="timeline-item"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                        >
                            <div className="timeline-dot">
                                <Briefcase size={14} />
                            </div>
                            <div className="timeline-card card">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-position">{exp.position}</h3>
                                        <div className="timeline-company">{exp.company}</div>
                                    </div>
                                    <div className="timeline-duration">
                                        <Calendar size={13} />
                                        {exp.duration}
                                    </div>
                                </div>
                                <p className="timeline-desc">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
