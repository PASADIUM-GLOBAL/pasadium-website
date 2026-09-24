import React, { useState } from 'react';
import { X, Layers, Rocket, Shield, ArrowUpRight, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrade: () => void;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, onOpenTrade }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'infrastructure' | 'fintech' | 'media'>('all');

  if (!isOpen) return null;

  const projects = [
    {
      id: 'p1',
      title: 'YLC TradeHub Liquidity Router',
      category: 'fintech',
      status: 'Active · Mainnet',
      roi: '+18.4% APY',
      description: 'Decentralized liquidity routing and sub-second matching for pan-African commodity corridors.',
      metrics: 'Volume: $14.2M / 24h',
      color: 'border-cyan-500/30 text-cyan-400',
    },
    {
      id: 'p2',
      title: 'Mombasa Coastal Mesh Node 01',
      category: 'infrastructure',
      status: 'Deploying',
      roi: '8.2% Staking Yield',
      description: 'Edge fiber connectivity relay connecting subsea cable landings directly to East African enterprise clusters.',
      metrics: 'Latency: 1.2ms to Landing Station',
      color: 'border-emerald-500/30 text-emerald-400',
    },
    {
      id: 'p3',
      title: 'VCAAS MediaVerse Creator Studio',
      category: 'media',
      status: 'Private Alpha',
      roi: 'Creator Grants Available',
      description: 'Next-generation video streaming infrastructure with automatic smart contract royalties for African storytellers.',
      metrics: 'Active Streamers: 1,420',
      color: 'border-purple-500/30 text-purple-400',
    },
    {
      id: 'p4',
      title: 'Kilifi Solar-Powered Compute Microgrid',
      category: 'infrastructure',
      status: 'Ventures Round 2',
      roi: 'Target: 14% IRR',
      description: 'Zero-emission edge datacenter powered by Kenyan solar arrays, hosting sovereign AI inference instances.',
      metrics: 'Power: 100% Renewable',
      color: 'border-amber-500/30 text-amber-400',
    },
  ];

  const filtered = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090d14] border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-neutral-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                  PASADIUM Projects
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  HIGH POTENTIAL
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Join high-potential opportunities, venture syndicates, and sovereign digital infrastructure.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenTrade}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Trade Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 my-6">
          {(['all', 'infrastructure', 'fintech', 'media'] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === tab
                  ? 'bg-neutral-800 text-white border border-neutral-700'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(project => (
            <div
              key={project.id}
              className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 uppercase">
                    {project.category}
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${project.color} bg-black/40`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-semibold">{project.roi}</span>
                <span className="text-neutral-500">{project.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-6 p-4 rounded-xl bg-[#070b10] border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-neutral-400">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>All projects vetted under PASADIUM Sovereign Security Standards.</span>
          </div>
          <span className="font-mono text-neutral-500">MOMBASA LABS · INCUBATOR DESK</span>
        </div>
      </div>
    </div>
  );
};
