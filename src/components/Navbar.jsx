import './Navbar.css';
import { useData } from '../DataContext';
import { Github, Linkedin, Twitter, Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Twitter: Twitter, Website: Globe };

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { nav, personal, social } = useData();

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-inner">
                <a className="navbar-logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
                    <span className="logo-bracket">&lt;</span>
                    {personal.logo || 'Portfolio'}
                    <span className="logo-bracket">/&gt;</span>
                </a>

                <ul className="navbar-links">
                    {nav.map(({ name, id }) => (
                        <li key={id}>
                            <button
                                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                                onClick={() => scrollTo(id)}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="navbar-social">
                    {social.map(({ label, url }) => {
                        const Icon = socialIcons[label];
                        return (
                            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
                                {Icon && <Icon size={17} />}
                            </a>
                        );
                    })}
                </div>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    {nav.map(({ name, id }) => (
                        <button key={id} className="mobile-link" onClick={() => scrollTo(id)}>
                            {name}
                        </button>
                    ))}
                    <div className="mobile-social">
                        {social.map(({ label, url }) => {
                            const Icon = socialIcons[label];
                            return (
                                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
                                    {Icon && <Icon size={18} />}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
