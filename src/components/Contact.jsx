import './Contact.css';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, Send } from 'lucide-react';

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Twitter: Twitter, Website: Globe };

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const { contact, personal, social, sections: { contact: contactConfig } } = useData();

    return (
        <section id="contact" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-tag">{contactConfig.tag}</div>
                    <h2 className="section-title">{contact.title}</h2>
                    <p className="section-subtitle">{contact.subtitle}</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h3 className="contact-info-title">{contactConfig.infoTitle}</h3>
                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-icon-wrap">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <div className="contact-detail-label">{contactConfig.labels.email}</div>
                                    <a href={`mailto:${personal.email}`} className="contact-detail-value">{personal.email}</a>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-icon-wrap">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <div className="contact-detail-label">{contactConfig.labels.phone}</div>
                                    <a href={`tel:${personal.phone}`} className="contact-detail-value">{personal.phone}</a>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-icon-wrap">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <div className="contact-detail-label">{contactConfig.labels.location}</div>
                                    <div className="contact-detail-value">{personal.location}</div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <div className="contact-socials-label">{contactConfig.findMeLabel}</div>
                            <div className="contact-socials-row">
                                {social.map(({ label, url }) => {
                                    const Icon = socialIcons[label];
                                    return (
                                        <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                                            {Icon && <Icon size={17} />}
                                            <span>{label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-cta card"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="cta-emoji">{contactConfig.ctaBox.emoji}</div>
                        <h3 className="cta-heading">{contactConfig.ctaBox.heading}</h3>
                        <p className="cta-text">{contactConfig.ctaBox.text}</p>
                        <a href={`mailto:${personal.email}`} className="btn btn-primary cta-email-btn" id="contact-email-btn">
                            <Send size={17} />
                            {contactConfig.ctaBox.buttonText}
                        </a>
                        <p className="cta-response">{contactConfig.ctaBox.responseText}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
