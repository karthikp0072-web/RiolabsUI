import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Code, Trophy, ShieldAlert, ArrowRight, Github, Linkedin, Cpu } from 'lucide-react';
import { TeamMember } from '../types';

export default function AboutUs() {
  // Stats auto counter state
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    let startProj = 0;
    let startClient = 0;
    const endProj = 150;
    const endClient = 45;
    
    const projTimer = setInterval(() => {
      startProj += 3;
      if (startProj >= endProj) {
        setProjectsCount(endProj);
        clearInterval(projTimer);
      } else {
        setProjectsCount(startProj);
      }
    }, 20);

    const clientTimer = setInterval(() => {
      startClient += 1;
      if (startClient >= endClient) {
        setClientsCount(endClient);
        clearInterval(clientTimer);
      } else {
        setClientsCount(startClient);
      }
    }, 30);

    return () => {
      clearInterval(projTimer);
      clearInterval(clientTimer);
    };
  }, []);

  const team: TeamMember[] = [
    { name: 'Karthik Prabhu', role: 'Founder & Principal Architect', specialty: 'Full-Stack Systems & Product UX Strategy', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Ananya Rao', role: 'Head of UI Design', specialty: 'Bespoke Brand Identities & Typography', gradient: 'from-brand-accent-purple to-pink-500' },
    { name: 'Vikram Seth', role: 'Senior Cloud Engineer', specialty: 'Distributed VM Networks & Edge Security', gradient: 'from-emerald-500 to-teal-500' },
    { name: 'Mira Nair', role: 'Mobile Lead Architect', specialty: 'Flutter State Machine & Native Frameworks', gradient: 'from-amber-500 to-orange-500' }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs text-brand-accent-cyan font-bold tracking-widest uppercase mb-2.5 block">
            About our agency
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight mb-5">
            A Collective of Digital Creators.
          </h1>
          <p className="font-sans text-brand-muted text-base md:text-lg leading-relaxed max-w-2xl">
            We are Riolabz. We threw away traditional administrative corporate hierarchies to assemble a high-intensity studio of developers, designers, and systems architects. We build code frameworks that scale to millions of requests daily, styled with extreme precision.
          </p>
        </div>

        {/* Realtime stats grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="glass p-6 rounded-2xl border-white/5 flex flex-col justify-between">
            <p className="font-mono text-xs text-brand-muted uppercase tracking-wider">Completed Projects</p>
            <div>
              <p className="font-display font-black text-4xl md:text-5xl text-white tracking-tighter mt-4">
                {projectsCount}+
              </p>
              <span className="text-[10px] text-brand-accent-cyan font-mono tracking-tight mt-1 inline-block">Verified Deliveries</span>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border-white/5 flex flex-col justify-between">
            <p className="font-mono text-xs text-brand-muted uppercase tracking-wider">Enterprise Partners</p>
            <div>
              <p className="font-display font-black text-4xl md:text-5xl text-white tracking-tighter mt-4">
                {clientsCount}+
              </p>
              <span className="text-[10px] text-brand-accent-purple font-mono tracking-tight mt-1 inline-block">Active Retainers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Team Grid */}
      <div>
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs text-brand-accent-purple font-bold tracking-widest uppercase mb-2 block">
            The Team
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight">
            Specialized Experts Only
          </h2>
          <p className="font-sans text-brand-muted text-sm mt-2">
            No administrative buffers. You work directly with senior architects dedicated to code optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              id={`team-member-${i}`}
              key={i}
              whileHover={{ y: -5 }}
              className="rounded-3xl glass p-5 border-white/5 relative overflow-hidden flex flex-col justify-between shadow-lg group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full opacity-10 blur-2xl group-hover:bg-brand-accent-cyan/10 transition-colors pointer-events-none" />

              <div>
                {/* Simulated Avatar / Abstract Profile Vector Graphics */}
                <div className="aspect-square rounded-2xl bg-slate-950 border border-white/5 p-4 mb-5 flex items-center justify-center relative overflow-hidden group-hover:border-white/10 transition-colors">
                  <div className={`absolute inset-3 rounded-xl bg-gradient-to-tr ${member.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="relative z-10 w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white stroke-[2px]" />
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-lg text-white group-hover:text-brand-accent-cyan transition-colors tracking-tight">
                  {member.name}
                </h3>
                <p className="font-mono text-[10px] text-brand-accent-purple tracking-widest uppercase mt-0.5 font-bold">
                  {member.role}
                </p>
              </div>

              <p className="font-sans text-brand-muted text-[11px] leading-relaxed mt-4 border-t border-white/5 pt-4">
                {member.specialty}
              </p>

              {/* Fake Linkedin / Professional Profiles links */}
              <div className="flex items-center gap-2 mt-4">
                <a href="#linkedin" className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="#github" className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
