import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Terminal, LogIn } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';
import heroImage from '../assets/images/pasadium_spire_city_1790240982027.jpg';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
  onOpenAuth: () => void;
  onSelectSystem: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onContact,
  onOpenAuth,
  onSelectSystem,
}) => {
  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-24 pb-12 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Sci-Fi Planetary Backdrop & Atmospheric Light */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Futuristic Spire City Image */}
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-[90%] opacity-35 lg:opacity-45 rounded-3xl overflow-hidden">
          <img
            src={heroImage}
            alt="PASADIUM Planetary Spire City Backdrop"
            className="w-full h-full object-cover object-center filter contrast-125"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-[#070809]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070809] via-[#070809]/80 to-transparent" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute -top-32 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Editorial Hero Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end z-10 pt-4 sm:pt-8">
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          {/* Regional & Sovereign Tagline Banner */}
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest font-mono">
            <span className="px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-cyan-400 font-semibold">
              PASADIUM GLOBAL
            </span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-neutral-300 font-medium">Your Future. Our Ecosystem.</span>
            <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">/</span>
            <span className="text-neutral-400 hidden sm:inline">MOMBASA · KENYA</span>
          </div>

          {/* Master Headline matching authentic reference */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05] text-balance">
              More Than a Platform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#38BDF8] to-[#C084FC]">
                A Global Opportunity.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed pt-2">
              Trade, invest, participate and grow with innovative markets, projects and digital solutions —
              all in one secure, high-precision ecosystem.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenAuth}
              className="px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] hover:opacity-95 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-cyan-500/20 active:scale-[0.99]"
            >
              <LogIn className="w-4 h-4" />
              <span>Access Ecosystem</span>
            </button>

            <button
              type="button"
              onClick={onExplore}
              className="px-5 py-3.5 text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-md group"
            >
              <span>Explore Systems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onContact}
              className="px-5 py-3.5 text-sm font-medium text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              Access Terminal
            </button>
          </div>

          {/* Authentic Trust Banner from Reference */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xs">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-white">Secure • Transparent • Compliant</span>
                <span className="text-neutral-400 hidden sm:inline ml-2">
                  — Built with cutting-edge technology and industry best practices.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Organization Node Card */}
        <div className="lg:col-span-4 flex flex-col justify-end lg:items-end text-left lg:text-right border-l lg:border-l-0 lg:border-r border-neutral-800 pl-4 lg:pl-0 lg:pr-4 py-2 font-mono">
          <span className="text-xs uppercase tracking-widest text-neutral-500 mb-1">SOVEREIGN ORIGIN</span>
          <span className="text-base font-bold text-white tracking-wide">PASADIUM GLOBAL</span>
          <span className="text-xs text-cyan-400 mt-0.5 font-semibold">Mombasa · Kenya</span>
          <span className="text-[11px] text-neutral-500 mt-2">Coordinates 4°03′S 39°40′E</span>
          <span className="text-[10px] text-neutral-600 mt-0.5">Maritime Fibre Node · Edge Hub 01</span>
        </div>
      </div>

      {/* Live System Status Layer */}
      <div className="mt-12 sm:mt-16 pt-6 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-3 flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-emerald-400">SYSTEMS ONLINE</span>
        </div>

        <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => onSelectSystem('trade')}
            className="text-left p-2.5 rounded-lg hover:bg-neutral-900/80 border border-transparent hover:border-neutral-800 transition-colors group"
          >
            <div className="text-[11px] font-mono uppercase text-neutral-400 group-hover:text-cyan-400">TradeHub</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs font-semibold text-emerald-400 font-mono">LIVE</span>
              <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors">· YLC Platform</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectSystem('media')}
            className="text-left p-2.5 rounded-lg hover:bg-neutral-900/80 border border-transparent hover:border-neutral-800 transition-colors group"
          >
            <div className="text-[11px] font-mono uppercase text-neutral-400 group-hover:text-purple-400">VCAAS</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs font-semibold text-amber-400 font-mono">BUILDING</span>
              <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors">· Media Cloud</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectSystem('wifi')}
            className="text-left p-2.5 rounded-lg hover:bg-neutral-900/80 border border-transparent hover:border-neutral-800 transition-colors group"
          >
            <div className="text-[11px] font-mono uppercase text-neutral-400 group-hover:text-teal-400">WiFi Hub</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs font-semibold text-teal-400 font-mono">ACTIVE</span>
              <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors">· Mesh Network</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectSystem('projects')}
            className="text-left p-2.5 rounded-lg hover:bg-neutral-900/80 border border-transparent hover:border-neutral-800 transition-colors group"
          >
            <div className="text-[11px] font-mono uppercase text-neutral-400 group-hover:text-amber-400">Projects</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs font-semibold text-cyan-400 font-mono">EXPANDING</span>
              <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors">· Ventures</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
