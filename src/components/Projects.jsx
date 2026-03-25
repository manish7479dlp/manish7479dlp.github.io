import './Projects.css';
import { useData } from '../DataContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import FallbackImg from './FallbackImg';

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [filter, setFilter] = useState('All');
    const { projects, sections: { projects: projectsConfig } } = useData();

    const filtered = filter === projectsConfig.labels.featured
        ? projects.filter((p) => p.featured)
        : filter === projectsConfig.labels.all
            ? projects
            : projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-tag">{projectsConfig.tag}</div>
                    <h2 className="section-title">{projectsConfig.title}</h2>
                    <p className="section-subtitle">{projectsConfig.subtitle}</p>
                </motion.div>

                <motion.div
                    className="projects-filter"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    {[projectsConfig.labels.all, projectsConfig.labels.featured, projectsConfig.labels.others].map((f) => (
                        <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                            {f}
                        </button>
                    ))}
                </motion.div>

                <div className="projects-grid">
                    {filtered.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            inView={inView}
                            projectsConfig={projectsConfig}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, inView, projectsConfig }) {
    const [showFullDesc, setShowFullDesc] = useState(false);
    const [showFullTechs, setShowFullTechs] = useState(false);
    const MAX_DESC_LENGTH = 150

    const description = project.description || '';
    const shouldTruncateDesc = description.length > MAX_DESC_LENGTH;
    const displayedDesc = showFullDesc ? description : (shouldTruncateDesc ? description.slice(0, MAX_DESC_LENGTH) + '...' : description);

    const technologies = project.technologies || [];
    const shouldTruncateTechs = technologies.length > 5;
    const displayedTechs = showFullTechs ? technologies : technologies.slice(0, 5);

    return (
        <motion.div
            className="project-card card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
        >
            <div className="project-image-wrapper">
                <FallbackImg src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                    <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Demo">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>
                {project.featured && (
                    <div className="project-featured-badge">
                        <Star size={11} fill="currentColor" />
                        {projectsConfig.labels.featured}
                    </div>
                )}
            </div>

            <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                    {displayedDesc}
                    {shouldTruncateDesc && (
                        <button
                            className="expand-btn"
                            onClick={() => setShowFullDesc(!showFullDesc)}
                        >
                            {showFullDesc ? ' Read Less' : ' Read More'}
                        </button>
                    )}
                </p>
                <div className="project-techs">
                    {displayedTechs.map((tech) => (
                        <span key={tech} className="project-tech-badge">{tech}</span>
                    ))}
                    {shouldTruncateTechs && (
                        <button
                            className="tech-expand-btn"
                            onClick={() => setShowFullTechs(!showFullTechs)}
                        >
                            {showFullTechs ? 'Show Less' : `+${technologies.length - 5} more`}
                        </button>
                    )}
                </div>
                <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-action-btn">
                        <Github size={15} /> {projectsConfig.labels.code}
                    </a>
                    {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-action-btn">
                            <ExternalLink size={15} /> {projectsConfig.labels.demo}
                        </a>
                    ) : (
                        <span className="project-no-demo">{projectsConfig.labels.private}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
