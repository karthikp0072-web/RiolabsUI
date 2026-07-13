import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, DollarSign, Clock, HelpCircle, CheckCircle2, RefreshCw, User, Mail, MessageSquare } from 'lucide-react';

export default function ProjectPlanner() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>('Enterprise SaaS');
  const [budget, setBudget] = useState<number>(45000);
  const [timeline, setTimeline] = useState<string>('Rocket Speed (2-3 months)');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goals = [
    { name: 'Enterprise SaaS', desc: 'B2B subscription platforms & management tools.' },
    { name: 'Mobile App', desc: 'Custom iOS & Android compilation.' },
    { name: 'E-commerce Space', desc: 'High conversion transactional carts.' },
    { name: 'Corporate Brand', desc: 'High-end aesthetic layouts & marketing systems.' }
  ];

  const timelines = [
    { name: 'Rocket Speed (2-3 months)', desc: 'High velocity sprints for fast market launch.' },
    { name: 'Standard Sprints (4-6 months)', desc: 'Comprehensive discovery, staging, and tests.' },
    { name: 'Long-term Partnership', desc: 'Retainer collaboration for multi-year product scaling.' }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill in your Name and Email to proceed.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setGoal('Enterprise SaaS');
    setBudget(45000);
    setTimeline('Rocket Speed (2-3 months)');
    setName('');
    setEmail('');
    setMsg('');
    setIsSubmitted(false);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Header section */}
      <div className="max-w-2xl mb-12">
        <span className="font-mono text-xs text-brand-accent-cyan font-bold tracking-widest uppercase mb-2 block">
          Interactive Lead Builder
        </span>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight mb-4">
          The Project Planner
        </h1>
        <p className="font-sans text-brand-muted text-base">
          Customize your engineering scope below to build a real-time project blueprint.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Form Steps Wizard */}
            <div className="lg:col-span-8 glass p-6 md:p-8 rounded-3xl border-white/10 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              {/* Top progress line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900">
                <div 
                  className="bg-brand-accent-cyan h-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              {/* STEP 1: SELECT GOAL */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brand-accent-cyan font-bold">STEP 01/04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span className="font-sans text-xs text-brand-muted">Scope Definition</span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    What are we engineering?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {goals.map((g) => (
                      <button
                        id={`planner-goal-${g.name.replace(/\s+/g, '-')}`}
                        key={g.name}
                        onClick={() => setGoal(g.name)}
                        className={`text-left p-5 rounded-2xl border transition-all cursor-pointer focus:outline-none flex flex-col justify-between h-[120px] ${
                          goal === g.name
                            ? 'bg-white/5 border-brand-accent-cyan/40 text-white shadow-md'
                            : 'bg-transparent border-white/5 text-brand-muted hover:border-white/15 hover:text-white'
                        }`}
                      >
                        <span className="font-display font-extrabold text-sm">{g.name}</span>
                        <span className="font-sans text-[11px] text-brand-muted leading-relaxed">{g.desc}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: BUDGET SLIDER */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brand-accent-cyan font-bold">STEP 02/04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span className="font-sans text-xs text-brand-muted">Budget Estimates</span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    Define the funding threshold
                  </h2>
                  <div className="space-y-6 pt-4">
                    <div className="flex justify-between items-end">
                      <span className="font-mono text-xs text-brand-muted">Project Investment:</span>
                      <span className="font-display font-extrabold text-3xl text-brand-accent-cyan">
                        ${budget.toLocaleString()}
                      </span>
                    </div>

                    <input
                      id="planner-budget-slider"
                      type="range"
                      min="10000"
                      max="150000"
                      step="5000"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full accent-brand-accent-cyan cursor-pointer bg-slate-900 rounded-lg h-2"
                    />

                    <div className="flex justify-between font-mono text-[10px] text-brand-muted">
                      <span>$10,000 (MVP Scale)</span>
                      <span>$75,000 (Enterprise)</span>
                      <span>$150,000+ (Custom Ecosystem)</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: TIMELINE */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brand-accent-cyan font-bold">STEP 03/04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span className="font-sans text-xs text-brand-muted">Delivery Speed</span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    What is the target deployment sprint?
                  </h2>
                  <div className="grid grid-cols-1 gap-3.5 pt-2">
                    {timelines.map((t) => (
                      <button
                        id={`planner-timeline-${t.name.replace(/\s+/g, '-')}`}
                        key={t.name}
                        onClick={() => setTimeline(t.name)}
                        className={`text-left p-4 rounded-xl border transition-all cursor-pointer focus:outline-none flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${
                          timeline === t.name
                            ? 'bg-white/5 border-brand-accent-cyan/40 text-white shadow-md'
                            : 'bg-transparent border-white/5 text-brand-muted hover:border-white/15'
                        }`}
                      >
                        <div>
                          <p className="font-display font-bold text-sm text-white">{t.name.split(' (')[0]}</p>
                          <p className="font-sans text-[11px] text-brand-muted mt-0.5">{t.desc}</p>
                        </div>
                        <span className="font-mono text-[10px] text-brand-accent-cyan bg-brand-accent-cyan/10 border border-brand-accent-cyan/20 px-2 py-0.5 rounded self-start sm:self-auto">
                          {t.name.includes('(') ? t.name.split('(')[1].replace(')', '') : 'Flexible'}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CONTACT INFORMATION */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brand-accent-cyan font-bold">STEP 04/04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span className="font-sans text-xs text-brand-muted">Contact details</span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    Let's sync up
                  </h2>
                  
                  <div className="space-y-4 pt-2">
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-brand-muted" />
                      <input
                        id="planner-input-name"
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/40 border border-white/5 rounded-xl font-sans text-sm text-white placeholder-brand-muted focus:border-brand-accent-cyan/40 focus:outline-none focus:bg-slate-900 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-4 h-4 text-brand-muted" />
                      <input
                        id="planner-input-email"
                        type="email"
                        placeholder="Work Email *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/40 border border-white/5 rounded-xl font-sans text-sm text-white placeholder-brand-muted focus:border-brand-accent-cyan/40 focus:outline-none focus:bg-slate-900 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-brand-muted" />
                      <textarea
                        id="planner-input-msg"
                        placeholder="Tell us about the product goals (Optional)"
                        rows={3}
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/40 border border-white/5 rounded-xl font-sans text-sm text-white placeholder-brand-muted focus:border-brand-accent-cyan/40 focus:outline-none focus:bg-slate-900 transition-all resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Form Navigation Controls */}
              <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-8">
                <button
                  id="planner-btn-back"
                  disabled={step === 1}
                  onClick={() => setStep(prev => prev - 1)}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold border border-white/10 transition-colors focus:outline-none ${
                    step === 1 ? 'opacity-40 cursor-not-allowed text-brand-muted' : 'text-white hover:bg-white/5 cursor-pointer'
                  }`}
                >
                  Back
                </button>

                {step < 4 ? (
                  <button
                    id="planner-btn-next"
                    onClick={() => setStep(prev => prev + 1)}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-white/95 text-black text-xs font-semibold shadow flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none"
                  >
                    Continue
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    id="planner-btn-submit"
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent-cyan to-brand-accent-purple hover:opacity-95 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transition-all cursor-pointer focus:outline-none active:scale-95"
                  >
                    Generate Blueprint
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right side: Blueprint Realtime Preview Sidebar */}
            <div className="lg:col-span-4 rounded-3xl bg-slate-950/40 border border-white/5 p-6 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-cyan rounded-full opacity-[0.03] blur-2xl pointer-events-none" />
              
              <h3 className="font-display font-extrabold text-sm text-white tracking-tight uppercase border-b border-white/5 pb-3">
                Live Project Blueprint
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[9px] text-brand-muted uppercase tracking-wider block">Scope Target</span>
                  <span className="font-display font-extrabold text-base text-white">{goal}</span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-brand-muted uppercase tracking-wider block">Est. Funding Limit</span>
                  <span className="font-mono text-sm text-brand-accent-cyan font-bold">${budget.toLocaleString()}</span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-brand-muted uppercase tracking-wider block">Deployment Target</span>
                  <span className="font-sans text-xs text-brand-muted leading-relaxed block">{timeline}</span>
                </div>
              </div>

              {/* Structural Mock Blueprint Layout Line visualization */}
              <div className="border-t border-white/5 pt-5 space-y-2.5">
                <span className="font-mono text-[8px] text-brand-muted uppercase tracking-widest block">Structural Stack preview</span>
                <div className="flex gap-1.5 h-1 bg-slate-900 rounded-full overflow-hidden">
                  <div className="w-[40%] bg-brand-accent-cyan" />
                  <div className="w-[30%] bg-brand-accent-purple" />
                  <div className="w-[15%] bg-emerald-500" />
                  <div className="w-[15%] bg-amber-400" />
                </div>
                <div className="flex justify-between font-mono text-[8px] text-brand-muted">
                  <span>UX Core (40%)</span>
                  <span>Cloud Edge (15%)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* SUCCESS STATE */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto glass p-8 rounded-3xl border-brand-accent-cyan/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent-cyan/5 to-brand-accent-purple/5 opacity-40" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                  Blueprint Generated!
                </h2>
                <p className="font-sans text-brand-muted text-sm mt-2 leading-relaxed">
                  Thanks <span className="text-white font-semibold">{name}</span>. We have registered your custom configuration for <span className="text-white font-semibold">{goal}</span> at budget <span className="text-brand-accent-cyan font-mono font-bold">${budget.toLocaleString()}</span>. Our lead architect will follow up at <span className="text-white font-mono text-xs">{email}</span> within 2 hours.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-2xl border border-white/5 text-left font-mono text-[10px] text-brand-accent-cyan space-y-1.5">
                <p className="text-white font-bold mb-1">=== BLUEPRINT RECEIPT ===</p>
                <p>Client: {name}</p>
                <p>Scope: {goal}</p>
                <p>Budget Allocation: ${budget.toLocaleString()}</p>
                <p>Urgency Target: {timeline}</p>
                <p>Core Status: PENDING ARCHITECT ASSIGNMENT</p>
              </div>

              <button
                id="planner-btn-reset"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs text-white font-semibold flex items-center gap-1.5 mx-auto transition-colors cursor-pointer focus:outline-none"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Planner
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
