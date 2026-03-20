import { useState } from 'react';
import { data as initialData } from '../data';
import './AdminLayout.css';
import { Settings, Save, Layout, Image as ImageIcon, FileText, Briefcase, Share2, CornerUpLeft, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminLayout() {
    const [formData, setFormData] = useState(initialData);
    const [activeTab, setActiveTab] = useState('Hero Section');
    const [highlightedId, setHighlightedId] = useState(null);
    const navigate = useNavigate();

    const highlightTemp = (id) => {
        setHighlightedId(id);
        setTimeout(() => setHighlightedId(null), 1200);
    };

    const handleSave = () => {
        const fileContent = `export const data = ${JSON.stringify(formData, null, 2)};\n`;
        const blob = new Blob([fileContent], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const tabs = [
        { name: 'Personal & SEO', icon: Settings },
        { name: 'Hero Section', icon: Layout },
        { name: 'About Section', icon: FileText },
        { name: 'Skills Section', icon: Briefcase },
        { name: 'Projects Section', icon: ImageIcon },
        { name: 'Experience', icon: Briefcase },
        { name: 'Contact & Social', icon: Share2 },
    ];

    // Robust nested state updater using JSON clone
    const updateData = (updaterFn) => {
        setFormData((prev) => {
            const clone = JSON.parse(JSON.stringify(prev));
            updaterFn(clone);
            return clone;
        });
    };

    const updateField = (path, value) => {
        updateData((data) => {
            const keys = path.split('.');
            let current = data;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
        });
    };

    const moveItem = (arr, index, direction) => {
        const target = index + direction;
        if (target < 0 || target >= arr.length) return;
        const temp = arr[index];
        arr[index] = arr[target];
        arr[target] = temp;
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'Hero Section':
                return (
                    <div className="admin-form-group">
                        <h3 className="admin-form-title">Hero / Slider Content</h3>
                        <div className="admin-form-row">
                            <label>Greeting Text</label>
                            <input type="text" value={formData.sections.hero.greeting} onChange={(e) => updateField('sections.hero.greeting', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row">
                            <label>Scroll Hint Text</label>
                            <input type="text" value={formData.sections.hero.scrollHint} onChange={(e) => updateField('sections.hero.scrollHint', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row admin-checkbox-row">
                            <input type="checkbox" checked={formData.sections.hero.badge.show} onChange={(e) => updateField('sections.hero.badge.show', e.target.checked)} id="showBadge" />
                            <label htmlFor="showBadge">Show Availability Badge</label>
                        </div>
                        {formData.sections.hero.badge.show && (
                            <div className="admin-form-row">
                                <label>Badge Text</label>
                                <input type="text" value={formData.sections.hero.badge.text} onChange={(e) => updateField('sections.hero.badge.text', e.target.value)} className="admin-input" />
                            </div>
                        )}
                        <div className="admin-form-row">
                            <label>Primary CTA Button Text</label>
                            <input type="text" value={formData.sections.hero.cta.primary} onChange={(e) => updateField('sections.hero.cta.primary', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row">
                            <label>Secondary CTA Button Text</label>
                            <input type="text" value={formData.sections.hero.cta.secondary} onChange={(e) => updateField('sections.hero.cta.secondary', e.target.value)} className="admin-input" />
                        </div>
                    </div>
                );
            case 'Personal & SEO':
                return (
                    <div className="admin-form-group">
                        <h3 className="admin-form-title">Personal Details & SEO</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 320px) 1fr', gap: '2rem', marginTop: '1rem' }}>
                            {/* Left Side: Avatar */}
                            <div>
                                <ImageCardUploader label="Profile Avatar (.png/jpg)" value={formData.personal.avatar} onChange={val => updateField('personal.avatar', val)} aspectRatio="1/1" />
                            </div>

                            {/* Right Side: Form Inputs */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="admin-form-row">
                                        <label>Full Name</label>
                                        <input type="text" value={formData.personal.name} onChange={e => updateField('personal.name', e.target.value)} className="admin-input" />
                                    </div>
                                    <div className="admin-form-row">
                                        <label>Logo Text (Navbar)</label>
                                        <input type="text" value={formData.personal.logo} onChange={e => updateField('personal.logo', e.target.value)} className="admin-input" />
                                    </div>
                                </div>

                                <div className="admin-form-row">
                                    <label>Professional Title / Role</label>
                                    <input type="text" value={formData.personal.title} onChange={e => updateField('personal.title', e.target.value)} className="admin-input" />
                                </div>

                                <div className="admin-form-row">
                                    <label>SEO / Profile Bio Description</label>
                                    <textarea value={formData.personal.description} onChange={e => updateField('personal.description', e.target.value)} className="admin-textarea" rows={5} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'About Section':
                return (
                    <div className="admin-form-group">
                        <h3 className="admin-form-title">About content</h3>
                        <div className="admin-form-row">
                            <label>Section Tag</label>
                            <input type="text" value={formData.sections.about.tag} onChange={e => updateField('sections.about.tag', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row">
                            <label>Section Title</label>
                            <input type="text" value={formData.about.title} onChange={e => updateField('about.title', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row">
                            <label>Paragraphs</label>
                            <textarea value={formData.about.content} onChange={e => updateField('about.content', e.target.value)} className="admin-textarea" rows={8} />
                        </div>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 className="admin-form-title">Stats Cards</h3>
                            <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => {
                                updateData(d => { d.about.statsCard.unshift({ title: "New Stat", value: "0" }); });
                                highlightTemp('stat-0');
                            }}>
                                <Plus size={14} /> Add Stat
                            </button>
                        </div>
                        {formData.about.statsCard.map((stat, i) => (
                            <div key={i} className={highlightedId === `stat-${i}` ? 'admin-highlight-anim' : ''} style={{ backgroundColor: '#21262d', padding: '1.25rem', borderRadius: '8px', border: '1px solid #30363d', marginBottom: '1rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.about.statsCard, i, -1)); highlightTemp(`stat-${i - 1}`); }} disabled={i === 0}><ChevronUp size={14} /></button>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.about.statsCard, i, 1)); highlightTemp(`stat-${i + 1}`); }} disabled={i === formData.about.statsCard.length - 1}><ChevronDown size={14} /></button>
                                    <button className="btn btn-primary" style={{ padding: '0.3rem', backgroundColor: '#da3633', borderColor: '#da3633' }} onClick={() => updateData(d => d.about.statsCard.splice(i, 1))}><Trash2 size={14} /></button>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                                    <div className="admin-form-row">
                                        <label>Stat Title (e.g. Experience)</label>
                                        <input type="text" value={stat.title} onChange={e => updateData(d => d.about.statsCard[i].title = e.target.value)} className="admin-input" />
                                    </div>
                                    <div className="admin-form-row">
                                        <label>Stat Value (e.g. 1.5+ Years)</label>
                                        <input type="text" value={stat.value} onChange={e => updateData(d => d.about.statsCard[i].value = e.target.value)} className="admin-input" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Projects Section':
                return (
                    <div className="admin-form-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 className="admin-form-title">Featured Projects</h3>
                            <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => {
                                updateData(d => { d.projects.unshift({ id: Date.now(), title: "New Project", description: "", image: "", technologies: [], github: "", demo: "", featured: false }); });
                                highlightTemp('proj-0');
                            }}>
                                <Plus size={14} /> Add Project
                            </button>
                        </div>

                        {formData.projects.map((proj, i) => (
                            <div key={proj.id} className={highlightedId === `proj-${i}` ? 'admin-highlight-anim' : ''} style={{ backgroundColor: '#21262d', padding: '1.5rem', borderRadius: '8px', border: '1px solid #30363d', marginBottom: '1rem', position: 'relative' }}>

                                <div style={{ position: 'absolute', top: '1.25rem', right: '1rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.projects, i, -1)); highlightTemp(`proj-${i - 1}`); }} disabled={i === 0}>
                                        <ChevronUp size={14} />
                                    </button>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.projects, i, 1)); highlightTemp(`proj-${i + 1}`); }} disabled={i === formData.projects.length - 1}>
                                        <ChevronDown size={14} />
                                    </button>
                                    <button className="btn btn-primary" style={{ padding: '0.3rem', backgroundColor: '#da3633', borderColor: '#da3633' }} onClick={() => updateData(d => d.projects.splice(i, 1))}>
                                        <Trash2 size={14} />
                                    </button>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid #30363d' }}>
                                    <span style={{ backgroundColor: '#238636', color: '#ffffff', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>#{i + 1}</span>
                                    <strong style={{ fontSize: '1.05rem', color: '#e6edf3' }}>{proj.title || 'New Project'}</strong>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 320px) 1fr', gap: '2rem' }}>
                                    {/* Left Side: Large Image Card view */}
                                    <div>
                                        <ImageCardUploader value={proj.image} onChange={val => updateData(d => d.projects[i].image = val)} aspectRatio="16/10" />
                                    </div>

                                    {/* Right Side: Details */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div className="admin-form-row">
                                            <label>Title</label>
                                            <input type="text" value={proj.title} onChange={e => updateData(d => d.projects[i].title = e.target.value)} className="admin-input" />
                                        </div>
                                        <div className="admin-form-row">
                                            <label>Description</label>
                                            <textarea value={proj.description} onChange={e => updateData(d => d.projects[i].description = e.target.value)} className="admin-textarea" rows={4} />
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <div className="admin-form-row">
                                                <label>GitHub Link</label>
                                                <input type="text" value={proj.github} onChange={e => updateData(d => d.projects[i].github = e.target.value)} className="admin-input" />
                                            </div>
                                            <div className="admin-form-row">
                                                <label>Live Demo Link</label>
                                                <input type="text" value={proj.demo} onChange={e => updateData(d => d.projects[i].demo = e.target.value)} className="admin-input" />
                                            </div>
                                        </div>

                                        <div className="admin-form-row">
                                            <label>Technologies (comma separated)</label>
                                            <input type="text" value={proj.technologies.join(', ')} onChange={e => updateData(d => d.projects[i].technologies = e.target.value.split(',').map(t => t.trim()).filter(Boolean))} className="admin-input" />
                                        </div>
                                        <div className="admin-form-row admin-checkbox-row" style={{ marginTop: '0.25rem' }}>
                                            <input type="checkbox" checked={proj.featured} onChange={e => updateData(d => d.projects[i].featured = e.target.checked)} id={`feat-${i}`} />
                                            <label htmlFor={`feat-${i}`}>Featured Project</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                );
            case 'Experience':
                return (
                    <div className="admin-form-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 className="admin-form-title">Work Experience</h3>
                            <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => {
                                updateData(d => { d.experience.unshift({ company: "New Company", position: "Role", duration: "Year", description: "" }); });
                                highlightTemp('exp-0');
                            }}>
                                <Plus size={14} /> Add Experience
                            </button>
                        </div>

                        {formData.experience.map((exp, i) => (
                            <div key={i} className={highlightedId === `exp-${i}` ? 'admin-highlight-anim' : ''} style={{ backgroundColor: '#21262d', padding: '1.5rem', borderRadius: '8px', border: '1px solid #30363d', marginBottom: '1rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '1.25rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.experience, i, -1)); highlightTemp(`exp-${i - 1}`); }} disabled={i === 0}><ChevronUp size={14} /></button>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.experience, i, 1)); highlightTemp(`exp-${i + 1}`); }} disabled={i === formData.experience.length - 1}><ChevronDown size={14} /></button>
                                    <button className="btn btn-primary" style={{ padding: '0.3rem', backgroundColor: '#da3633', borderColor: '#da3633' }} onClick={() => updateData(d => d.experience.splice(i, 1))}><Trash2 size={14} /></button>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #30363d' }}>
                                    <span style={{ backgroundColor: '#238636', color: '#ffffff', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>#{i + 1}</span>
                                    <strong style={{ fontSize: '1.05rem', color: '#e6edf3' }}>{exp.company || 'New Experience'}</strong>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="admin-form-row">
                                        <label>Company</label>
                                        <input type="text" value={exp.company} onChange={e => updateData(d => d.experience[i].company = e.target.value)} className="admin-input" />
                                    </div>
                                    <div className="admin-form-row">
                                        <label>Position</label>
                                        <input type="text" value={exp.position} onChange={e => updateData(d => d.experience[i].position = e.target.value)} className="admin-input" />
                                    </div>
                                </div>
                                <div className="admin-form-row" style={{ marginTop: '0.75rem' }}>
                                    <label>Duration (e.g. 2024 - Present)</label>
                                    <input type="text" value={exp.duration} onChange={e => updateData(d => d.experience[i].duration = e.target.value)} className="admin-input" />
                                </div>
                                <div className="admin-form-row" style={{ marginTop: '0.75rem' }}>
                                    <label>Description</label>
                                    <textarea value={exp.description} onChange={e => updateData(d => d.experience[i].description = e.target.value)} className="admin-textarea" rows={3} />
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Skills Section':
                return (
                    <div className="admin-form-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 className="admin-form-title">Skill Categories</h3>
                            <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => {
                                updateData(d => { d.skills.categories.unshift({ name: "New Category", technologies: [] }); });
                                highlightTemp('skill-0');
                            }}>
                                <Plus size={14} /> Add Category
                            </button>
                        </div>

                        {formData.skills.categories.map((cat, i) => (
                            <div key={i} className={highlightedId === `skill-${i}` ? 'admin-highlight-anim' : ''} style={{ backgroundColor: '#21262d', padding: '1.5rem', borderRadius: '8px', border: '1px solid #30363d', marginBottom: '1rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '1.25rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.skills.categories, i, -1)); highlightTemp(`skill-${i - 1}`); }} disabled={i === 0}><ChevronUp size={14} /></button>
                                    <button className="btn btn-outline" style={{ padding: '0.3rem' }} onClick={() => { updateData(d => moveItem(d.skills.categories, i, 1)); highlightTemp(`skill-${i + 1}`); }} disabled={i === formData.skills.categories.length - 1}><ChevronDown size={14} /></button>
                                    <button className="btn btn-primary" style={{ padding: '0.3rem', backgroundColor: '#da3633', borderColor: '#da3633' }} onClick={() => updateData(d => d.skills.categories.splice(i, 1))}><Trash2 size={14} /></button>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #30363d' }}>
                                    <span style={{ backgroundColor: '#238636', color: '#ffffff', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>#{i + 1}</span>
                                    <strong style={{ fontSize: '1.05rem', color: '#e6edf3' }}>{cat.name || 'New Category'}</strong>
                                </div>

                                <div className="admin-form-row">
                                    <label>Category Name</label>
                                    <input type="text" value={cat.name} onChange={e => updateData(d => d.skills.categories[i].name = e.target.value)} className="admin-input" />
                                </div>
                                <div className="admin-form-row" style={{ marginTop: '0.75rem' }}>
                                    <label>Technologies (comma separated)</label>
                                    <textarea key={cat.technologies.join(',')} defaultValue={cat.technologies.join(', ')} onBlur={e => updateData(d => d.skills.categories[i].technologies = e.target.value.split(',').map(t => t.trim()).filter(Boolean))} className="admin-textarea" rows={3} />
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Contact & Social':
                return (
                    <div className="admin-form-group">
                        <h3 className="admin-form-title">Contact Config</h3>
                        <div className="admin-form-row">
                            <label>Section Tag</label>
                            <input type="text" value={formData.sections.contact.tag} onChange={e => updateField('sections.contact.tag', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row">
                            <label>Contact Email</label>
                            <input type="text" value={formData.personal.email} onChange={e => updateField('personal.email', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row">
                            <label>Contact Phone</label>
                            <input type="text" value={formData.personal.phone} onChange={e => updateField('personal.phone', e.target.value)} className="admin-input" />
                        </div>
                        <br />
                        <h3 className="admin-form-title">CTA Display Box</h3>
                        <div className="admin-form-row">
                            <label>Heading</label>
                            <input type="text" value={formData.sections.contact.ctaBox.heading} onChange={e => updateField('sections.contact.ctaBox.heading', e.target.value)} className="admin-input" />
                        </div>
                        <div className="admin-form-row">
                            <label>Text</label>
                            <textarea value={formData.sections.contact.ctaBox.text} onChange={e => updateField('sections.contact.ctaBox.text', e.target.value)} className="admin-textarea" rows={2} />
                        </div>
                    </div>
                );
            default:
                return <div>Select a sub-menu to edit components.</div>;
        }
    };

    return (
        <div className="admin-dashboard">
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <h2 className="admin-brand">Data Editor - Dashboard</h2>
                    <span className="admin-subtitle">Content Management System</span>
                </div>

                <div className="admin-nav">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.name}
                                className={`admin-nav-item ${activeTab === tab.name ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                <Icon size={18} />
                                {tab.name}
                            </button>
                        );
                    })}
                </div>

                <div className="admin-sidebar-footer">
                    <button className="admin-nav-item" onClick={() => navigate('/')}>
                        <CornerUpLeft size={18} /> Back to Portfolio
                    </button>
                </div>
            </aside>

            <main className="admin-main">
                <header className="admin-topbar">
                    <button className="btn btn-primary" onClick={handleSave}>
                        <Save size={16} />
                        Save JSON
                    </button>
                </header>
                <div className="admin-content-area">
                    <div className="admin-card">
                        <div className="admin-card-header">
                            <IconForTab tabName={activeTab} />
                            <h2 className="admin-card-title">{activeTab}</h2>
                        </div>
                        <div className="admin-card-body">
                            {renderActiveTab()}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function IconForTab({ tabName }) {
    switch (tabName) {
        case 'Personal & SEO': return <Settings size={20} className="admin-card-icon" />;
        case 'Hero Section': return <Layout size={20} className="admin-card-icon" />;
        case 'About Section': return <FileText size={20} className="admin-card-icon" />;
        case 'Skills Section': return <Briefcase size={20} className="admin-card-icon" />;
        case 'Projects Section': return <ImageIcon size={20} className="admin-card-icon" />;
        case 'Experience': return <Briefcase size={20} className="admin-card-icon" />;
        case 'Contact & Social': return <Share2 size={20} className="admin-card-icon" />;
        default: return <Settings size={20} className="admin-card-icon" />;
    }
}

function ImageCardUploader({ label, value, onChange, aspectRatio = '16/10' }) {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadError, setUploadError] = useState('');
    const [showUrlInput, setShowUrlInput] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setUploadProgress(0);
        setUploadError('');

        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'ddyo9iiz9';
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'portfolio';
        const folder = import.meta.env.VITE_CLOUDINARY_FOLDER || 'portfolio';

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        formData.append('folder', folder);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, true);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                setUploadProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                onChange(data.secure_url);
            } else {
                try {
                    const errData = JSON.parse(xhr.responseText);
                    setUploadError('Upload failed: ' + (errData.error?.message || 'Unknown error'));
                } catch (e) {
                    setUploadError('Upload failed with status ' + xhr.status);
                }
            }
            setIsUploading(false);
        };

        xhr.onerror = () => {
            setUploadError('Network error during upload');
            setIsUploading(false);
        };

        xhr.send(formData);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}>
            {label && <label className="admin-form-title" style={{ margin: 0 }}>{label}</label>}
            {/* Large Image Card */}
            <div
                style={{
                    width: '100%',
                    aspectRatio: aspectRatio,
                    backgroundColor: '#0d1117',
                    borderRadius: '8px',
                    border: '1px solid #30363d',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}
            >
                {value ? (
                    <>
                        <img src={value} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                        <button
                            className="btn btn-primary"
                            style={{ position: 'absolute', bottom: '12px', right: '12px', padding: '0.4rem 0.8rem', fontSize: '0.8rem', opacity: 0.9, backgroundColor: 'rgba(35, 134, 54, 0.85)' }}
                            onClick={() => window.open(value, '_blank')}
                        >
                            <Layout size={14} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
                            <span style={{ verticalAlign: 'middle' }}>View Full Screen</span>
                        </button>
                    </>
                ) : (
                    <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>No Image Included</span>
                )}
            </div>

            {/* Upload Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                    <label className="btn btn-outline" style={{ cursor: 'pointer', padding: '0.5rem 1rem', fontSize: '0.85rem', margin: 0, flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                        <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                        {isUploading ? 'Uploading...' : 'Upload Cloudinary Cover'}
                    </label>
                    <button
                        className="btn btn-outline"
                        style={{ padding: '0.5rem', flexShrink: 0, margin: 0 }}
                        onClick={() => setShowUrlInput(!showUrlInput)}
                        title="Edit internal URL manually"
                    >
                        {showUrlInput ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>

                {showUrlInput && (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="admin-input"
                        placeholder="Raw Image URL (https://...)"
                        style={{ fontSize: '0.8rem', padding: '0.4rem 0.6rem' }}
                    />
                )}

                {isUploading && (
                    <div style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#58a6ff', fontWeight: 'bold' }}>
                        Uploading: {uploadProgress}%
                    </div>
                )}
                {uploadError && <div style={{ marginTop: '0.25rem', fontSize: '0.85rem', color: '#da3633' }}>{uploadError}</div>}
            </div>
        </div>
    );
}
