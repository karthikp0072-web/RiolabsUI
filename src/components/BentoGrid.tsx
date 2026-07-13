import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Smartphone, Layers, Cloud, Code, Sparkles, Sliders, Play, Server, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface BentoGridProps {
  setCurrentPage: (page: Page) => void;
}

export default function BentoGrid({ setCurrentPage }: BentoGridProps) {
  // 1. Web Dev Auto-Typing Animation
  const [typedCode, setTypedCode] = useState('');
  const fullCode = `const RiolabzApp = {\n  speed: '100vw',\n  seoReady: true,\n  architecture: 'Serverless',\n  uxLevel: 'WorldClass'\n};`;
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length) {
        setTimeout(() => { index = 0; }, 3000); // Wait 3s and restart
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // 2. Mobile App Mockup Carousel State
  const [mobileScreen, setMobileScreen] = useState(0);
  const mobileScreens = [
    { title: 'Fintech Wallet', bg: 'from-cyan-500 to-blue-600', balance: '$24,850.00', action: 'Send Assets' },
    { title: 'SaaS Analytics', bg: 'from-purple-500 to-indigo-600', balance: 'Active Users: 12.4k', action: 'View Metrics' },
    { title: 'E-commerce Space', bg: 'from-pink-500 to-rose-600', balance: 'Orders: +340 today', action: 'Ship Now' }
  ];

  // 3. UI/UX Color Palette Interactive Customization
  const [accentHue, setAccentHue] = useState(260); // Hue slider for interactive color palette

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 md:px-8 mt-12">
      {/* 1. Web Dev Bento Tile - Takes 60% (7 cols) */}
      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-7 rounded-3xl glass p-6 relative overflow-hidden flex flex-col justify-between border-white/10 shadow-xl group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-cyan rounded-full opacity-5 blur-3xl pointer-events-none" />
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-brand-accent-cyan/10 border border-brand-accent-cyan/20">
              <Code className="w-5 h-5 text-brand-accent-cyan" />
            </div>
            <span className="font-mono text-xs text-brand-accent-cyan font-bold tracking-widest uppercase">
              Web Architecture
            </span>
          </div>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-2">
            Scalable Enterprise Web Services
          </h3>
          <p className="font-sans text-brand-muted text-sm max-w-md leading-relaxed mb-6">
            We engineer lightning-fast React, NextJS, and custom serverless Web systems optimized for peak performance and global SEO indexing.
          </p>
        </div>

        {/* Live Typing Code Box Visual */}
        <div className="bg-[#020406] rounded-2xl border border-white/10 p-4 font-mono text-[11px] text-brand-accent-cyan min-h-[140px] shadow-inner relative flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-[10px] text-brand-muted">app.ts — TypeScript</span>
          </div>
          <div className="flex-1 whitespace-pre-wrap leading-relaxed text-slate-300">
            {typedCode}
            <span className="animate-pulse font-bold text-brand-accent-purple">|</span>
          </div>
        </div>

        <button 
          id="btn-bento-web"
          onClick={() => setCurrentPage('service-detail')}
          className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-white hover:text-brand-accent-cyan transition-colors group/btn cursor-pointer self-start"
        >
          Explore Web Engineering
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </motion.div>

      {/* 2. UI/UX Bento Tile - Takes 40% (5 cols) */}
      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-5 rounded-3xl glass p-6 relative overflow-hidden flex flex-col justify-between border-white/10 shadow-xl"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent-purple rounded-full opacity-5 blur-3xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-brand-accent-purple/10 border border-brand-accent-purple/20">
              <Sliders className="w-5 h-5 text-brand-accent-purple" />
            </div>
            <span className="font-mono text-xs text-brand-accent-purple font-bold tracking-widest uppercase">
              UI/UX Laboratory
            </span>
          </div>
          <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mb-2">
            Dynamic Brand Systems
          </h3>
          <p className="font-sans text-brand-muted text-sm leading-relaxed mb-6">
            Crafting responsive digital brand guidelines. Customize the interactive token system below to preview our theme core.
          </p>
        </div>

        {/* Interactive Accent Slider Tool */}
        <div className="glass bg-slate-950/40 p-4 rounded-2xl border-white/5 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-brand-muted">Design Token Hue:</span>
            <span className="font-mono font-bold text-white">{accentHue}° hsl</span>
          </div>
          
          <input 
            id="accent-hue-slider"
            type="range" 
            min="0" 
            max="360" 
            value={accentHue}
            onChange={(e) => setAccentHue(Number(e.target.value))}
            className="w-full accent-brand-accent-purple cursor-pointer bg-slate-800 rounded-lg h-1.5"
          />

          <div className="flex items-center justify-between gap-2.5 pt-2">
            <div className="flex-1 h-9 rounded-xl flex items-center justify-center font-mono text-[10px] font-bold text-white transition-colors"
                 style={{ backgroundColor: `hsl(${accentHue}, 85%, 45%)` }}>
              Brand Core
            </div>
            <div className="flex-1 h-9 rounded-xl flex items-center justify-center font-mono text-[10px] font-bold text-white transition-colors"
                 style={{ backgroundColor: `hsl(${accentHue}, 60%, 25%)` }}>
              Surface
            </div>
            <div className="flex-1 h-9 rounded-xl flex items-center justify-center font-mono text-[10px] font-bold text-white transition-colors"
                 style={{ backgroundColor: `hsl(${accentHue}, 90%, 65%)` }}>
              Accent
            </div>
          </div>
        </div>

        <button 
          id="btn-bento-ui"
          onClick={() => setCurrentPage('service-detail')}
          className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-white hover:text-brand-accent-purple transition-colors group/btn cursor-pointer self-start"
        >
          Interactive Design Method
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </motion.div>

      {/* 3. Mobile Bento Tile - Takes 40% (5 cols) */}
      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-5 rounded-3xl glass p-6 relative overflow-hidden flex flex-col justify-between border-white/10 shadow-xl"
      >
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-accent-cyan rounded-full opacity-5 blur-3xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <Smartphone className="w-5 h-5 text-sky-400" />
            </div>
            <span className="font-mono text-xs text-sky-400 font-bold tracking-widest uppercase">
              Native Experience
            </span>
          </div>
          <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mb-2">
            iOS & Android Products
          </h3>
          <p className="font-sans text-brand-muted text-sm leading-relaxed mb-6">
            Multi-platform native app architectures driven by highly immersive user interfaces. Tap screens to toggle dynamic mockups.
          </p>
        </div>

        {/* Interactive iPhone Frame Mockup */}
        <div className="flex justify-center my-2">
          <div className="w-[180px] h-[210px] bg-slate-900 rounded-2xl border-4 border-slate-800 relative shadow-2xl p-2.5 overflow-hidden flex flex-col justify-between">
            {/* Top Speaker Notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3 rounded-full bg-slate-800 z-10" />
            
            {/* Dynamic Screen Content */}
            <div className="flex-1 rounded-lg bg-slate-950 p-2.5 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr opacity-25" />
              
              <div className="relative z-10">
                <span className="text-[8px] font-mono text-slate-400">Riolabz App V2</span>
                <h4 className="text-[11px] font-display font-extrabold text-white mt-1">
                  {mobileScreens[mobileScreen].title}
                </h4>
              </div>

              <div className={`relative z-10 py-1.5 px-2 rounded-lg bg-gradient-to-r ${mobileScreens[mobileScreen].bg} shadow-md`}>
                <p className="text-[8px] font-sans text-white/80">Account Overview</p>
                <p className="text-[12px] font-mono font-bold text-white">{mobileScreens[mobileScreen].balance}</p>
              </div>

              <button
                id={`btn-mobile-carousel-${mobileScreen}`}
                onClick={() => setMobileScreen(prev => (prev + 1) % mobileScreens.length)}
                className="relative z-10 py-1 rounded bg-white/10 hover:bg-white/15 active:scale-95 transition-all text-[8px] text-white font-sans font-semibold border border-white/5 cursor-pointer text-center"
              >
                {mobileScreens[mobileScreen].action}
              </button>
            </div>
          </div>
        </div>

        <button 
          id="btn-bento-mobile"
          onClick={() => setCurrentPage('service-detail')}
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-white hover:text-sky-400 transition-colors group/btn cursor-pointer self-start"
        >
          View Native Work
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </motion.div>

      {/* 4. Cloud & Infrastructure Tile - Takes 60% (7 cols) */}
      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-7 rounded-3xl glass p-6 relative overflow-hidden flex flex-col justify-between border-white/10 shadow-xl group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full opacity-5 blur-3xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <Server className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
              Cloud & DevOps
            </span>
          </div>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-2">
            Secure, Serverless Infrastructures
          </h3>
          <p className="font-sans text-brand-muted text-sm max-w-md leading-relaxed mb-6">
            Engineered with strict zero-trust parameters, autoscaling pipelines, and automated cloud deployments that protect high-load platforms.
          </p>
        </div>

        {/* Dynamic Pulsing Server Network Node flow */}
        <div className="bg-[#020406] rounded-2xl border border-white/10 p-4 min-h-[140px] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(0,0,0,0))]" />
          
          <div className="flex items-center gap-10 md:gap-14 relative z-10">
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center shadow-lg">
                <Server className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-mono text-[9px] text-brand-muted uppercase">Gateway</span>
            </div>

            <div className="flex items-center gap-1 justify-center relative w-16 h-2">
              <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-emerald-500/20 -translate-y-1/2" />
              <motion.div 
                animate={{ left: ['0%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] -translate-y-1/2 top-1/2"
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-brand-accent-purple/30 flex items-center justify-center shadow-lg relative">
                <Cpu className="w-5 h-5 text-brand-accent-purple animate-pulse" />
                <span className="absolute -top-1.5 -right-1.5 px-1 py-0.5 rounded bg-emerald-500 text-[7px] font-mono font-bold text-black uppercase">
                  Auto
                </span>
              </div>
              <span className="font-mono text-[9px] text-brand-muted uppercase">VM Engine</span>
            </div>

            <div className="flex items-center gap-1 justify-center relative w-16 h-2">
              <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-emerald-500/20 -translate-y-1/2" />
              <motion.div 
                animate={{ left: ['0%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1.1 }}
                className="absolute w-2 h-2 rounded-full bg-brand-accent-purple shadow-[0_0_8px_rgba(168,85,247,0.8)] -translate-y-1/2 top-1/2"
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-brand-accent-cyan/30 flex items-center justify-center shadow-lg">
                <Cloud className="w-5 h-5 text-brand-accent-cyan" />
              </div>
              <span className="font-mono text-[9px] text-brand-muted uppercase">Global Edge</span>
            </div>
          </div>
        </div>

        <button 
          id="btn-bento-cloud"
          onClick={() => setCurrentPage('service-detail')}
          className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors group/btn cursor-pointer self-start"
        >
          Check Cloud Infrastructure
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
