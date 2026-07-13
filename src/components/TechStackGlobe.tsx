import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Cpu, Server, Smartphone, Cloud, Layers, ShieldCheck, HeartPulse } from 'lucide-react';

export default function TechStackGlobe() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [uptime, setUptime] = useState(99.982);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-updating uptime decimal for the high-tech live look
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => {
        const change = (Math.random() - 0.5) * 0.0002;
        const nextValue = prev + change;
        return nextValue > 100 ? 99.999 : nextValue < 99.98 ? 99.985 : nextValue;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Tech nodes to place inside our futuristic node system
  const techNodes = [
    { name: 'React', icon: Layers, color: '#38BDF8', angle: 0, radius: 100 },
    { name: 'Flutter', icon: Smartphone, color: '#0EA5E9', angle: 72, radius: 100 },
    { name: 'AWS Cloud', icon: Cloud, color: '#F97316', angle: 144, radius: 100 },
    { name: 'Node.js', icon: Server, color: '#22C55E', angle: 216, radius: 100 },
    { name: 'Next.js', icon: Cpu, color: '#A855F7', angle: 288, radius: 100 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[450px] mx-auto cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{
          rotateY: mousePos.x * 15,
          rotateX: -mousePos.y * 15,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        className="w-full h-full rounded-3xl glass p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl border-white/10"
      >
        {/* Glow ambient background inside card */}
        <div className="absolute -right-24 -top-24 w-48 h-48 bg-brand-accent-cyan rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
        <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-brand-accent-purple rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />

        {/* Card Header: Virtual Status */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase font-semibold">
              Core Engine Active
            </span>
          </div>
          <div className="glass-light px-2.5 py-1 rounded-full flex items-center gap-1.5 border-white/5">
            <HeartPulse className="w-3.5 h-3.5 text-brand-accent-cyan animate-pulse" />
            <span className="font-mono text-[10px] text-brand-muted tracking-wide">
              Uptime: <span className="text-white font-medium">{uptime.toFixed(4)}%</span>
            </span>
          </div>
        </div>

        {/* Rotating Orbital SVG Network */}
        <div className="flex-1 flex items-center justify-center relative my-4">
          <svg className="w-full h-full max-w-[280px] max-h-[280px] overflow-visible" viewBox="0 0 200 200">
            {/* Pulsing center node (Core Riolabz Hub) */}
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#05070A" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            <circle cx="100" cy="100" r="40" fill="url(#centerGlow)" />
            <motion.circle 
              cx="100" 
              cy="100" 
              r="20" 
              fill="#0F172A" 
              stroke="url(#orbitGrad)" 
              strokeWidth="1.5"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            
            {/* Main orbits */}
            <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(56, 189, 248, 0.06)" />

            {/* Glowing lines from center to nodes */}
            <g className="opacity-40">
              {techNodes.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const x2 = 100 + Math.cos(rad) * 68;
                const y2 = 100 + Math.sin(rad) * 68;
                return (
                  <line 
                    key={i} 
                    x1="100" 
                    y1="100" 
                    x2={x2} 
                    y2={y2} 
                    stroke={node.color} 
                    strokeWidth="1" 
                    strokeDasharray="1 3"
                  />
                );
              })}
            </g>

            {/* Floating rotating outer sphere (rendered in SVG space but driven by Framer Motion) */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              style={{ transformOrigin: '100px 100px' }}
            >
              {techNodes.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                // Calculate position relative to center (100, 100)
                const cx = 100 + Math.cos(rad) * 68;
                const cy = 100 + Math.sin(rad) * 68;
                const NodeIcon = node.icon;

                return (
                  <g key={i} className="cursor-pointer group/node">
                    {/* Glowing background halo */}
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r="16" 
                      fill="#0F172A" 
                      stroke={node.color} 
                      strokeWidth="1.5" 
                      className="shadow-glow"
                    />
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r="12" 
                      fill="rgba(255, 255, 255, 0.02)" 
                    />
                    {/* Mini SVG icons/text */}
                    <g transform={`translate(${cx - 7}, ${cy - 7})`}>
                      <NodeIcon className="w-3.5 h-3.5 text-white stroke-[2px]" style={{ color: node.color }} />
                    </g>
                  </g>
                );
              })}
            </motion.g>
          </svg>

          {/* Overlay titles that dynamically hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
            <span className="font-display font-black text-xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-cyan to-brand-accent-purple">
              CORE OS
            </span>
            <span className="font-mono text-[9px] text-brand-muted tracking-widest uppercase mt-0.5">
              Scalable V1.4
            </span>
          </div>
        </div>

        {/* Card Footer: Realtime Tech Stats */}
        <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 relative z-10">
          <div className="text-center">
            <p className="font-mono text-[9px] text-brand-muted uppercase tracking-wider">Engine</p>
            <p className="font-display font-semibold text-xs text-white mt-0.5">Next-Gen</p>
          </div>
          <div className="text-center border-x border-white/5 px-2">
            <p className="font-mono text-[9px] text-brand-muted uppercase tracking-wider">Deploy</p>
            <p className="font-display font-semibold text-xs text-brand-accent-cyan mt-0.5">Edge VPS</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-[9px] text-brand-muted uppercase tracking-wider">API Ping</p>
            <p className="font-display font-semibold text-xs text-emerald-400 mt-0.5">14ms</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
