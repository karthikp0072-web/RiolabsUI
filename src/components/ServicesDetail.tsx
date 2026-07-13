import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, CheckCircle2, ChevronRight, HelpCircle, ArrowRight, Figma, Sparkles, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesDetail() {
  const [activeTab, setActiveTab] = useState<'uiux' | 'web' | 'mobile'>('uiux');
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: '01 / Discover & Research', desc: 'Deep dive into market positioning, audience analytics, and benchmark strategies to define technical product goals.' },
    { title: '02 / High-Fidelity Wireframes', desc: 'Crafting spatial layouts and user Journeys. Establishing core informational and typographic hierarchies.' },
    { title: '03 / Neo-Digital Styling', desc: 'Injecting custom themes, glassmorphism layers, neon accents, and responsive bento grid structures.' },
    { title: '04 / Code Prototype & Test', desc: 'Converting visual layouts into highly optimized TypeScript modules, React hooks, and fluid framer-animations.' }
  ];

  const servicesInfo = {
    uiux: {
      title: 'UI/UX Brand Systems',
      desc: 'We map out detailed digital identities. We avoid standard cookie-cutter layouts to forge premium interfaces that immediately command attention.',
      bullets: ['Custom Interactive Design Systems', 'Glassmorphism & Depth layers', 'OLED Dark-First responsive grids', 'Micro-Interactions & Cursor flows'],
      tech: ['Figma', 'Adobe CC', 'Framer', 'Spline 3D', 'Lottie Files']
    },
    web: {
      title: 'Scalable Web Engineering',
      desc: 'High performance web systems designed using React and NextJS. Serverless scaling paths ensure speed and consistent 99.99% core uptime.',
      bullets: ['React / Next.js server actions', 'Global Cloudflare edge caching', 'SEO semantic structure validation', 'Responsive CSS viewport fluidity'],
      tech: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Vercel']
    },
    mobile: {
      title: 'Immersive Native Applications',
      desc: 'Native iOS & Android compilation supporting unified backend controllers. Built to react instantly to user touch gestures.',
      bullets: ['Cross-platform Flutter compiles', 'Offline-first database rooms', 'Strict native system integrations', 'Native Haptics & Widget support'],
      tech: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'GraphQL']
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-brand-accent-cyan font-bold tracking-widest uppercase mb-2.5 block">
          Services detail
        </span>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight mb-4">
          Neo-Digital Capabilities
        </h1>
        <p className="font-sans text-brand-muted text-base md:text-lg leading-relaxed">
          From full-stack code pipelines to bespoke visual styles, we forge technology solutions that position your brand as a market category definer.
        </p>
      </div>

      {/* Services Grid (Interactive Tabs on the Left, Details on the Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        {/* Tab Buttons */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {(['uiux', 'web', 'mobile'] as const).map((tab) => (
            <button
              id={`service-tab-${tab}`}
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveStep(0);
              }}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none flex items-center justify-between group ${
                activeTab === tab
                  ? 'bg-white/5 border-brand-accent-cyan/40 text-white shadow-md'
                  : 'bg-transparent border-white/5 text-brand-muted hover:border-white/15 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${activeTab === tab ? 'bg-brand-accent-cyan/10' : 'bg-white/5'}`}>
                  {tab === 'uiux' && <Figma className="w-4 h-4 text-brand-accent-purple" />}
                  {tab === 'web' && <Cpu className="w-4 h-4 text-brand-accent-cyan" />}
                  {tab === 'mobile' && <Zap className="w-4 h-4 text-amber-400" />}
                </div>
                <span className="font-display font-bold text-sm tracking-tight capitalize">
                  {tab === 'uiux' ? 'UI/UX Design' : tab === 'web' ? 'Web Engineering' : 'Mobile Apps'}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab ? 'translate-x-1 text-white' : 'text-slate-600 group-hover:text-white'}`} />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl glass p-6 md:p-8 relative overflow-hidden border-white/10 flex flex-col justify-between min-h-[360px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-cyan rounded-full opacity-[0.03] blur-3xl pointer-events-none" />

              <div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-brand-accent-cyan font-bold mb-5 inline-block">
                  {activeTab === 'uiux' ? 'Brand System' : activeTab === 'web' ? 'NextJS Stack' : 'Native App'}
                </span>
                
                <h2 className="font-display font-extrabold text-2xl md:text-3.5xl text-white tracking-tight mb-4">
                  {servicesInfo[activeTab].title}
                </h2>
                
                <p className="font-sans text-brand-muted text-sm md:text-base leading-relaxed mb-6">
                  {servicesInfo[activeTab].desc}
                </p>

                {/* Bullets with Checkmarks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {servicesInfo[activeTab].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="font-sans text-slate-300 text-xs md:text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies list */}
              <div className="border-t border-white/5 pt-5 mt-auto">
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block mb-3">
                  Core Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {servicesInfo[activeTab].tech.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Vertical Interactive Scroll Timeline ("The Method") */}
      <div className="bg-slate-950/20 rounded-3xl border border-white/5 p-6 md:p-10 relative overflow-hidden">
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-brand-accent-purple rounded-full opacity-[0.03] blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs text-brand-accent-purple font-bold tracking-widest uppercase mb-2 block">
            Our Strategy
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight">
            The Design-to-Code Method
          </h2>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Steps List on the left */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((step, idx) => (
              <button
                id={`step-button-${idx}`}
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer focus:outline-none ${
                  activeStep === idx
                    ? 'bg-white/5 border-brand-accent-purple/30 text-white'
                    : 'bg-transparent border-transparent text-brand-muted hover:text-white'
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-wider block mb-1">
                  Step {idx + 1}
                </span>
                <span className="font-display font-bold text-sm">
                  {step.title.split(' / ')[1]}
                </span>
              </button>
            ))}
          </div>

          {/* Interactive visualizer card on the right */}
          <div className="lg:col-span-7">
            <div className="glass p-6 md:p-8 rounded-2xl border-white/5 relative overflow-hidden min-h-[180px] flex flex-col justify-between">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-brand-accent-purple rounded-full opacity-10 blur-2xl pointer-events-none" />
              
              <div>
                <h4 className="font-display font-extrabold text-lg text-white mb-2.5">
                  {steps[activeStep].title}
                </h4>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Progress Bar Indicator inside visualizer */}
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden mt-6">
                <div 
                  className="bg-brand-accent-purple h-full transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
