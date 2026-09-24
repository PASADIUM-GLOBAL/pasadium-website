import React from 'react';
import { X, Palette, ArrowUpRight, Check, Sparkles, Monitor, Box, Layers } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioModal: React.FC<StudioModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090b0e] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden my-8 font-mono text-xs">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#0e1116]">
          <div className="flex items-center gap-4">
            <PasadiumLogo size="sm" showSubtitle={false} />
            <div className="border-l border-neutral-800 pl-4">
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider">
                CREATIVE TECHNOLOGY & VISUAL SYSTEMS
              </div>
              <h2 className="text-base font-bold text-white font-display">
                PASADIUM STUDIO
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs text-purple-400 font-semibold">SOVEREIGN VISUAL ENGINEERING</span>
            <h3 className="text-2xl font-bold text-white font-display font-sans">
              Crafting digital products with architectural discipline.
            </h3>
            <p className="text-neutral-300 font-sans text-sm leading-relaxed max-w-2xl">
              PASADIUM Studio engineers bespoke software surfaces, design systems, and identity frameworks
              for the PASADIUM-GLOBAL ecosystem and select institutional clients across Africa and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-neutral-900/70 border border-neutral-800 space-y-2">
              <Monitor className="w-4 h-4 text-white" />
              <div className="text-white font-semibold text-sm font-sans">Digital Product OS</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Design system architectures, high-performance web applications, and trading terminals.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-neutral-900/70 border border-neutral-800 space-y-2">
              <Box className="w-4 h-4 text-purple-400" />
              <div className="text-white font-semibold text-sm font-sans">Spatial & 3D Systems</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Hardware visualization, interactive physical computing interfaces, and telemetry layouts.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-neutral-900/70 border border-neutral-800 space-y-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <div className="text-white font-semibold text-sm font-sans">Brand Sovereign Identity</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Editorial typography, algorithmic generative assets, and digital brand governance.
              </p>
            </div>
          </div>

          {/* Direct Engagement Desk */}
          <div className="p-4 rounded-lg bg-[#0c0e12] border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-white font-semibold block font-sans">Commission or Collaborate with Studio</span>
              <span className="text-neutral-400 text-[11px]">Direct brief inquiries to studio@pasadium.tech</span>
            </div>

            <a
              href="mailto:studio@pasadium.tech"
              className="px-4 py-2 bg-white text-neutral-950 font-bold rounded hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shrink-0"
            >
              <span>Dispatch Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#0e1116] border-t border-neutral-800 flex items-center justify-between text-neutral-500 text-[11px]">
          <span>MOMBASA DESIGN LAB</span>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            Close [Esc]
          </button>
        </div>
      </div>
    </div>
  );
};
