import './Footer.css';
import { useData } from '../DataContext';
import { Github, Linkedin, Twitter, Globe, Heart, Code2 } from 'lucide-react';

// const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Twitter: Twitter, Website: Globe };
const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Twitter: Twitter, LeetCode: Code2, Website: Globe };


export default function Footer() {
    const { personal, social, sections: { footer: footerConfig } } = useData();
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <span className="footer-logo">
                        <span className="logo-bracket">&lt;</span>Manish<span className="logo-bracket">/&gt;</span>
                    </span>
                    <p className="footer-tagline">{personal.tagline}</p>
                </div>

                <div className="footer-socials">
                    {social.map(({ label, url }) => {
                        const Icon = socialIcons[label];
                        return (
                            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label={label}>
                                {Icon && <Icon size={18} />}
                            </a>
                        );
                    })}
                </div>

                <div className="footer-bottom">
                    <p>
                        © {year} {personal.name}. {footerConfig.builtWith}
                    </p>
                </div>
            </div>
        </footer>
    );
}
