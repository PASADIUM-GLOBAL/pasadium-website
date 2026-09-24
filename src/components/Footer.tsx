import React from 'react';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface FooterProps {
  onOpenAuth?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuth }) => {
  return (
    <footer className="border-t border-neutral-800/80 bg-[#05080c] py-16 px-6 font-mono text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <PasadiumLogo size="lg" showText={true} showSubtitle={true} />

            <p className="text-neutral-300 font-sans text-sm max-w-sm leading-relaxed pt-2">
              Technology for the systems that move the world forward. Sovereign digital infrastructure,
              intelligence, media, and market products from Africa for a connected world.
            </p>

            <div className="text-xs text-cyan-400 font-semibold pt-1">
              Powered by Innovation · Driven by People
            </div>

            <div className="text-neutral-500 text-[11px] pt-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Secure • Transparent • Compliant Ecosystem</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-neutral-400">
            <div className="space-y-3">
              <span className="text-white text-xs uppercase tracking-wider block font-semibold">
                Ecosystem
              </span>
              <ul className="space-y-2 text-[11px]">
                <li><a href="#systems" className="hover:text-cyan-300 transition-colors">TradeHub</a></li>
                <li><a href="#systems" className="hover:text-purple-300 transition-colors">VCAAS Media Cloud</a></li>
                <li><a href="#systems" className="hover:text-teal-300 transition-colors">WiFi Hub Mesh</a></li>
                <li><a href="#systems" className="hover:text-amber-300 transition-colors">Projects & Ventures</a></li>
                <li><a href="#systems" className="hover:text-blue-300 transition-colors">Portfolio Tracker</a></li>
                <li><a href="#systems" className="hover:text-purple-300 transition-colors">Global Community</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white text-xs uppercase tracking-wider block font-semibold">
                Architecture
              </span>
              <ul className="space-y-2 text-[11px]">
                <li><a href="#frontier" className="hover:text-white transition-colors">The Frontier</a></li>
                <li><a href="#architecture" className="hover:text-white transition-colors">3-Tier Matrix</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Access Terminal</a></li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenAuth}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    Gateway / Sign In
                  </button>
                </li>
                <li>
                  <a
                    href="https://github.com/PASADIUM-GLOBAL"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>GitHub Repos</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white text-xs uppercase tracking-wider block font-semibold">
                Global Nodes
              </span>
              <ul className="space-y-2 text-[11px]">
                <li><span className="text-white">HQ: Mombasa, Kenya</span></li>
                <li><span>Silicon Savannah: Nairobi</span></li>
                <li><a href="mailto:hello@pasadium.tech" className="hover:text-cyan-300 transition-colors">hello@pasadium.tech</a></li>
                <li><a href="mailto:partners@pasadium.tech" className="hover:text-cyan-300 transition-colors">partners@pasadium.tech</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} PASADIUM GLOBAL. Sovereign Brand OS for pasadium.tech.
          </div>
          <div className="flex items-center gap-4">
            <span>Coordinates: 4°03′S 39°40′E</span>
            <span className="text-neutral-700">·</span>
            <span>Mombasa · Nairobi · Global Corridors</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
