import { useState, useEffect } from 'react';
import { Page } from './types';
import Navigation from './components/Navigation';
import TechStackGlobe from './components/TechStackGlobe';
import BentoGrid from './components/BentoGrid';
import PortfolioShowcase from './components/PortfolioShowcase';
import ServicesDetail from './components/ServicesDetail';
import AboutUs from './components/AboutUs';
import ProjectPlanner from './components/ProjectPlanner';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Smooth scroll back to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const partners = ['Google Workspace', 'Amazon Web Services', 'Microsoft Azure', 'Stripe Payments', 'Vercel Edge', 'Figma Lab'];

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans flex flex-col justify-between selection:bg-brand-accent-cyan/30 selection:text-white">
      {/* Dynamic Background Noise/Glow spots */}
      <div className="absolute top-20 left-[20%] w-[500px] h-[500px] bg-brand-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[450px] h-[450px] bg-brand-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Global Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="space-y-16">
            {/* HERO SECTION */}
            <section className="pt-28 md:pt-40 pb-12 max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Headline & CTA */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent-cyan animate-pulse" />
                    <span className="font-mono text-[10px] text-brand-text font-bold uppercase tracking-widest">
                      Redesign V2 Concept
                    </span>
                  </div>

                  <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-[1.05] max-w-2xl">
                    We Build Digital Products That <span className="text-gradient">Define Categories.</span>
                  </h1>

                  <p className="font-sans text-brand-muted text-base sm:text-lg max-w-xl leading-relaxed">
                    A full-stack technology and design collective specialized in high-performance Web and Mobile ecosystems. We engineer products with uncompromising speed and visual craft.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      id="hero-btn-planner"
                      onClick={() => setCurrentPage('planner')}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-accent-cyan to-brand-accent-purple text-white font-sans font-bold text-sm hover:opacity-95 shadow-lg shadow-brand-accent-cyan/15 hover:shadow-brand-accent-cyan/25 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      id="hero-btn-services"
                      onClick={() => setCurrentPage('service-detail')}
                      className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Our Method
                    </button>
                  </div>
                </div>

                {/* Right: Floating 3D Interactive Card */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent-cyan/10 to-brand-accent-purple/10 rounded-3xl filter blur-xl opacity-50 animate-pulse-slow" />
                  <TechStackGlobe />
                </div>
              </div>
            </section>

            {/* TRUST BAR / MONOCHROMATIC SCROLLING MARQUEE */}
            <section className="border-y border-white/5 bg-[#030507] py-8 overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />
              
              <div className="flex items-center gap-8 md:gap-14 animate-[marquee_25s_linear_infinite] whitespace-nowrap scroll-smooth max-w-7xl mx-auto px-4">
                <div className="flex shrink-0 items-center gap-12 md:gap-20">
                  {partners.map((partner, index) => (
                    <span
                      key={index}
                      className="font-display font-bold text-sm tracking-wider uppercase text-slate-500 hover:text-slate-300 transition-colors cursor-default"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
                {/* Duplicate for infinite loop styling scroll */}
                <div className="flex shrink-0 items-center gap-12 md:gap-20">
                  {partners.map((partner, index) => (
                    <span
                      key={`dup-${index}`}
                      className="font-display font-bold text-sm tracking-wider uppercase text-slate-500 hover:text-slate-300 transition-colors cursor-default"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* SERVICE BENTO GRID */}
            <section className="py-12 relative">
              <div className="max-w-2xl mx-auto text-center px-4">
                <span className="font-mono text-xs text-brand-accent-cyan font-bold tracking-widest uppercase mb-2 block">
                  Capabilities
                </span>
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
                  Engineering Bento Suite
                </h2>
                <p className="font-sans text-brand-muted text-sm mt-3 max-w-md mx-auto">
                  Modular frameworks specialized in high-performance rendering, custom interactive states, and cloud delivery pipelines.
                </p>
              </div>
              <BentoGrid setCurrentPage={setCurrentPage} />
            </section>

            {/* PORTFOLIO MASONRY SHOWCASE */}
            <PortfolioShowcase />
          </div>
        )}

        {currentPage === 'service-detail' && <ServicesDetail />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'planner' && <ProjectPlanner />}
      </main>

      {/* MINIMALIST FOOTER */}
      <footer className="border-t border-white/5 bg-[#030507] py-12 px-4 md:px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xs text-white">
              RΩ
            </div>
            <span className="font-display font-extrabold text-sm tracking-tight text-white">
              RIOLABZ REDESIGN
            </span>
          </div>

          <p className="font-mono text-[10px] text-brand-muted uppercase tracking-widest text-center md:text-right">
            © 2026 Riolabz. Built with extreme craft.
          </p>

          <div className="flex items-center gap-5">
            <button
              id="footer-link-home"
              onClick={() => setCurrentPage('home')}
              className="font-sans text-xs text-brand-muted hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              Home
            </button>
            <button
              id="footer-link-services"
              onClick={() => setCurrentPage('service-detail')}
              className="font-sans text-xs text-brand-muted hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              Services
            </button>
            <button
              id="footer-link-about"
              onClick={() => setCurrentPage('about')}
              className="font-sans text-xs text-brand-muted hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              About
            </button>
            <button
              id="footer-link-planner"
              onClick={() => setCurrentPage('planner')}
              className="font-sans text-xs text-brand-muted hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              Planner
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
