import { Cpu, Smartphone, Layers, ArrowRight, HelpCircle, Users, Sparkles, MessageSquare } from 'lucide-react';
import { Page } from '../types';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems: { id: Page; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'service-detail', label: 'Services', icon: Layers },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'planner', label: 'Project Planner', icon: MessageSquare },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full glass bg-opacity-70 border-white/10 shadow-lg backdrop-blur-xl">
          {/* Logo */}
          <button 
            id="nav-logo"
            onClick={() => setCurrentPage('home')} 
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-accent-cyan to-brand-accent-purple p-[1px] shadow-glow flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-brand-bg flex items-center justify-center font-display font-extrabold text-sm tracking-wider text-white">
                RΩ
              </div>
            </div>
            <span className="font-display font-extrabold tracking-tight text-lg text-white group-hover:text-brand-accent-cyan transition-colors">
              RIOLABZ
            </span>
          </button>

          {/* Nav Items - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive ? 'text-white' : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-bg"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <button
            id="nav-cta"
            onClick={() => setCurrentPage('planner')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-accent-cyan to-brand-accent-purple text-white font-sans font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md group cursor-pointer"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Floating Bottom iOS-style Dock Navigation for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[340px] px-4 md:hidden">
        <div className="flex items-center justify-around py-3 rounded-2xl glass shadow-2xl border-white/15 backdrop-blur-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive ? 'text-brand-accent-cyan scale-105' : 'text-brand-muted'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-bg"
                    className="absolute inset-0 bg-white/5 rounded-xl border border-white/5"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <Icon className={`relative z-10 w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                <span className="relative z-10 text-[10px] font-medium font-sans tracking-tight">
                  {item.label === 'Project Planner' ? 'Planner' : item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
