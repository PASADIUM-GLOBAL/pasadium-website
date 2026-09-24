import React from 'react';
import {
  TrendingUp,
  Video,
  Wifi,
  Layers,
  Wallet,
  Users,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Palette,
  Globe,
} from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface SystemsGridProps {
  onOpenTrade: () => void;
  onOpenMedia: () => void;
  onOpenWiFi: () => void;
  onOpenProjects: () => void;
  onOpenPortfolio: () => void;
  onOpenCommunity: () => void;
  onOpenAI: () => void;
  onOpenStudio: () => void;
}

export const SystemsGrid: React.FC<SystemsGridProps> = ({
  onOpenTrade,
  onOpenMedia,
  onOpenWiFi,
  onOpenProjects,
  onOpenPortfolio,
  onOpenCommunity,
  onOpenAI,
  onOpenStudio,
}) => {
  const ecosystemPillars = [
    {
      id: 'trade',
      title: 'TradeHub',
      subtitle: 'Access global markets with advanced tools.',
      badge: 'LIVE · 01',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      icon: TrendingUp,
      iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20',
      actionLabel: 'Enter TradeHub',
      action: onOpenTrade,
      highlights: ['Sub-1ms matching engine', 'YLC pan-African order router', 'Commodities & Digital Assets'],
    },
    {
      id: 'vcaas',
      title: 'VCAAS',
      subtitle: 'Create, share and earn from your content.',
      badge: 'BUILDING · 02',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      icon: Video,
      iconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20',
      actionLabel: 'Explore VCAAS',
      action: onOpenMedia,
      highlights: ['Ultra-low latency streaming', 'Decentralized video CDN', 'Automated royalty splits'],
    },
    {
      id: 'wifi',
      title: 'WiFi Hub',
      subtitle: 'Stay connected. Earn rewards.',
      badge: 'ACTIVE · 03',
      badgeColor: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
      icon: Wifi,
      iconBg: 'bg-teal-500/10 border-teal-500/30 text-teal-400 group-hover:bg-teal-500/20',
      actionLabel: 'Connect WiFi Hub',
      action: onOpenWiFi,
      highlights: ['Decentralized mesh relays', 'Bandwidth sharing tokenomics', 'Subsea cable termination'],
    },
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Join high-potential opportunities.',
      badge: 'VENTURES · 04',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      icon: Layers,
      iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20',
      actionLabel: 'View Projects',
      action: onOpenProjects,
      highlights: ['Vetted infrastructure syndicates', 'East African clean energy', 'Sovereign computing clusters'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      subtitle: 'Track your assets and performance.',
      badge: 'SOVEREIGN · 05',
      badgeColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      icon: Wallet,
      iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-500/20',
      actionLabel: 'Launch Portfolio',
      action: onOpenPortfolio,
      highlights: ['Multi-currency balance (USD/KES)', 'Commodity vault backing', 'Real-time telemetry feeds'],
    },
    {
      id: 'community',
      title: 'Community',
      subtitle: 'Be part of a growing global network.',
      badge: 'NETWORK · 06',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      icon: Users,
      iconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20',
      actionLabel: 'Join Network',
      action: onOpenCommunity,
      highlights: ['Regional builder chapters', 'Council governance proposals', '$250k developer grants'],
    },
  ];

  return (
    <section id="systems" className="py-20 sm:py-28 px-6 max-w-7xl mx-auto border-t border-neutral-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            <span>PASADIUM / ECOSYSTEM PILLARS</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">SOVEREIGN SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            The Six Core Systems
          </h2>
        </div>
        <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
          Integrated infrastructure built for market liquidity, content distribution, connectivity,
          and economic participation.
        </p>
      </div>

      {/* The 6 Authentic Cards from Login Interface Reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemPillars.map(pillar => {
          const IconComp = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="group relative bg-[#090d14] rounded-2xl border border-neutral-800/90 p-6 sm:p-7 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial-glow blur-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />

              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${pillar.iconBg}`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Highlights list */}
                <div className="space-y-1.5 pt-2">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80">
                <button
                  type="button"
                  onClick={pillar.action}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-200 bg-[#0e141f] hover:bg-[#162030] hover:text-white border border-neutral-800/90 hover:border-cyan-500/40 transition-all flex items-center justify-between group-hover:border-cyan-500/30"
                >
                  <span>{pillar.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Auxiliary Engineering Pods (Studio & AI Intelligence) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Studio Pod */}
        <div className="p-6 rounded-2xl bg-[#090d14] border border-neutral-800 flex items-center justify-between hover:border-neutral-700 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-white">PASADIUM Studio</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/30">
                  CREATIVE ENGINE
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Brand design systems, generative 3D visual computing, and interface architecture.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenStudio}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 transition-colors shrink-0 ml-4"
          >
            Launch Studio
          </button>
        </div>

        {/* AI Pod */}
        <div className="p-6 rounded-2xl bg-[#090d14] border border-neutral-800 flex items-center justify-between hover:border-neutral-700 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-white">AI Intelligence Node</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  GEMINI 3.8 ACTIVE
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Real-time African economic intelligence, telemetry analysis, and sovereign reasoning.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenAI}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0 ml-4 shadow-xs"
          >
            Query Node
          </button>
        </div>
      </div>
    </section>
  );
};
