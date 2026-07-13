import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Fintech' | 'SaaS' | 'E-commerce' | 'AI'>('All');

  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      name: 'Chronos DeFi Protocol',
      category: 'Fintech',
      tech: ['React', 'Next.js', 'Web3.js', 'Solidity'],
      imageDescription: 'Premium slate dark user interface with fluorescent cyan and purple charts representing real-time token swaps and liquidity pools.',
      gradient: 'from-cyan-500/10 via-blue-500/10 to-brand-accent-purple/10 border-cyan-500/20'
    },
    {
      id: 'proj-2',
      name: 'OmniAI Workflow Suite',
      category: 'AI',
      tech: ['NextJS', 'Python', 'PyTorch', 'TailwindCSS'],
      imageDescription: 'Clean bento grid visualization showcasing machine learning token streams, document indexing steps, and auto-generated summaries.',
      gradient: 'from-brand-accent-purple/10 via-pink-500/10 to-rose-500/10 border-brand-accent-purple/20'
    },
    {
      id: 'proj-3',
      name: 'Nexa Merchant Store',
      category: 'E-commerce',
      tech: ['React Native', 'NodeJS', 'Stripe', 'MongoDB'],
      imageDescription: 'Sleek dark theme store experience focusing on interactive full-bleed product cards, animated drawer checkouts, and clean metrics.',
      gradient: 'from-emerald-500/10 via-cyan-500/10 to-teal-500/10 border-emerald-500/20'
    },
    {
      id: 'proj-4',
      name: 'Apex SaaS Analytics',
      category: 'SaaS',
      tech: ['React', 'D3.js', 'PostgreSQL', 'TailwindCSS'],
      imageDescription: 'Minimalist dashboard layout presenting interactive user action counts, heatmaps, and funnel conversion stats.',
      gradient: 'from-amber-500/10 via-rose-500/10 to-brand-accent-purple/10 border-amber-500/20'
    },
    {
      id: 'proj-5',
      name: 'Nova Wallet Pro',
      category: 'Fintech',
      tech: ['Flutter', 'Rust', 'GraphQL', 'AWS'],
      imageDescription: 'Biometric authorization screen with high-contrast asset cards, live currency exchange values, and dynamic balance summaries.',
      gradient: 'from-pink-500/10 via-brand-accent-purple/10 to-blue-500/10 border-pink-500/20'
    },
    {
      id: 'proj-6',
      name: 'Vertex Neural Engine',
      category: 'AI',
      tech: ['Next.js', 'Gemini SDK', 'Node.js', 'Vercel'],
      imageDescription: 'Futuristic chat interface featuring smart context auto-completion, rich markdown styling, and voice synthesis loops.',
      gradient: 'from-sky-500/10 via-indigo-500/10 to-emerald-500/10 border-sky-500/20'
    }
  ];

  const categories: ('All' | 'Fintech' | 'SaaS' | 'E-commerce' | 'AI')[] = ['All', 'Fintech', 'SaaS', 'E-commerce', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative">
      {/* Grid subtle header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="font-mono text-xs text-brand-accent-cyan font-bold tracking-widest uppercase mb-2 block">
            Case Studies
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Featured Redesign Portfolio
          </h2>
        </div>

        {/* Minimalist pill filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 rounded-full border border-white/5 self-start">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                id={`filter-${cat}`}
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors cursor-pointer focus:outline-none ${
                  isActive ? 'text-black' : 'text-brand-muted hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-filter-bg"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry Zig-Zag Portfolio Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              id={`portfolio-card-${proj.id}`}
              key={proj.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl border bg-slate-950/20 p-5 flex flex-col justify-between relative overflow-hidden group shadow-lg ${proj.gradient}`}
            >
              {/* Background ambient radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(255,255,255,0.03),rgba(0,0,0,0))]" />

              <div className="relative z-10">
                {/* Header tag and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-slate-300 font-semibold">
                    {proj.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Styled Project Image Mockup Visual */}
                <div className="aspect-[4/3] rounded-2xl bg-[#020406] border border-white/5 p-4 mb-5 flex flex-col justify-between relative overflow-hidden shadow-inner group-hover:border-white/10 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent-purple/10 to-brand-accent-cyan/10 opacity-30 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Fake UI dots */}
                  <div className="flex items-center gap-1 pb-2 border-b border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>

                  {/* High fidelity descriptions represented as minimalist lines & illustrations */}
                  <div className="flex-1 flex flex-col justify-center gap-2.5 my-3 px-2">
                    <div className="w-2/3 h-2 rounded bg-white/15" />
                    <div className="w-11/12 h-1.5 rounded bg-white/10" />
                    <div className="w-4/5 h-1.5 rounded bg-white/10" />
                    
                    {/* Tiny representation of chart / flow */}
                    <div className="flex items-end gap-1.5 h-12 mt-2 pt-2 border-t border-white/5">
                      <div className="w-full bg-brand-accent-cyan/40 h-[20%] rounded-sm group-hover:h-[40%] transition-all duration-500" />
                      <div className="w-full bg-brand-accent-purple/40 h-[50%] rounded-sm group-hover:h-[80%] transition-all duration-500 delay-75" />
                      <div className="w-full bg-brand-accent-cyan/40 h-[30%] rounded-sm group-hover:h-[60%] transition-all duration-500 delay-100" />
                      <div className="w-full bg-brand-accent-purple/40 h-[70%] rounded-sm group-hover:h-[90%] transition-all duration-500 delay-150" />
                    </div>
                  </div>

                  <span className="text-[9px] font-mono text-brand-muted text-center tracking-tight leading-normal block">
                    {proj.imageDescription}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white tracking-tight group-hover:text-brand-accent-cyan transition-colors">
                  {proj.name}
                </h3>
              </div>

              {/* Pills of tech */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5 relative z-10">
                {proj.tech.map((t, index) => (
                  <span key={index} className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-brand-muted border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
