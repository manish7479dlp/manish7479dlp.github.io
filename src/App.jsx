import { Routes, Route } from 'react-router-dom';
import './App.css';
import { DataProvider } from './DataContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLayout from './admin/AdminLayout';

function PreviewBanner() {
  const isPreview = new URLSearchParams(window.location.search).get('preview') === '1';
  if (!isPreview) return null;
  return (
    <>
      <button
        onClick={() => window.close()}
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 99999,
          background: 'linear-gradient(135deg, #238636, #1f6feb)',
          border: 'none', color: '#fff', borderRadius: '50px',
          padding: '0.65rem 1.25rem', cursor: 'pointer',
          fontSize: '0.875rem', fontWeight: 600,
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.55)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'; }}
      >
        ✕ Close Preview
      </button>
    </>
  );
}

function Portfolio() {
  return (
    <>
      <PreviewBanner />
      <div className="bg-mesh" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DataProvider><Portfolio /></DataProvider>} />
      <Route path="/admin/*" element={<AdminLayout />} />
    </Routes>
  );
}

export default App;
