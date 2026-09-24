import React, { useState } from 'react';
import { X, Users, MessageSquare, Globe, Sparkles, ArrowUpRight, Award, Heart } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose,
  onOpenAuth,
}) => {
  const [activeTab, setActiveTab] = useState<'hubs' | 'governance' | 'builders'>('hubs');

  if (!isOpen) return null;

  const hubs = [
    { city: 'Mombasa, Kenya', role: 'Global Headquarters & Maritime Node', members: '4,280 Members', status: 'Core Anchor' },
    { city: 'Nairobi, Kenya', role: 'Silicon Savannah FinTech Hub', members: '8,950 Members', status: 'Active' },
    { city: 'Kigali, Rwanda', role: 'Pan-African AI Research Collective', members: '3,120 Members', status: 'Active' },
    { city: 'Lagos, Nigeria', role: 'West African Media & Creative Hub', members: '7,400 Members', status: 'Expanding' },
    { city: 'London & Dubai', role: 'Diaspora & Institutional Capital Corridors', members: '5,600 Members', status: 'Bridge Node' },
  ];

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
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                  PASADIUM Community
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  GLOBAL NETWORK
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Be part of a growing global network of builders, traders, operators, and creators.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenAuth}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-xs"
            >
              <span>Join Ecosystem</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tab selection */}
        <div className="flex items-center gap-2 my-6">
          <button
            type="button"
            onClick={() => setActiveTab('hubs')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
              activeTab === 'hubs' ? 'bg-neutral-800 text-white border border-neutral-700' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Regional Hubs
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('governance')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
              activeTab === 'governance' ? 'bg-neutral-800 text-white border border-neutral-700' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Council Proposals
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('builders')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
              activeTab === 'builders' ? 'bg-neutral-800 text-white border border-neutral-700' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Developer Guild
          </button>
        </div>

        {/* Hubs content */}
        {activeTab === 'hubs' && (
          <div className="space-y-3">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0c121c] border border-neutral-800 flex items-center justify-between hover:border-neutral-700 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{hub.city}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                      {hub.status}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400">{hub.role}</div>
                </div>

                <div className="text-right text-xs font-mono text-purple-400 font-semibold">
                  {hub.members}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'governance' && (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-semibold">PIP-014 · ACTIVE VOTE</span>
                <span className="text-emerald-400">92% In Favor</span>
              </div>
              <h3 className="text-sm font-bold text-white">Expand YLC TradeHub Agricultural Oracles to Kampala Coffee Exchange</h3>
              <p className="text-xs text-neutral-400">
                Deploying automated sensor telemetries and price discovery nodes across Ugandan coffee cooperatives.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-purple-400 font-semibold">PIP-013 · PASSED</span>
                <span className="text-emerald-400">Executed on Chain</span>
              </div>
              <h3 className="text-sm font-bold text-white">Zero-Commission Trade Routing for Pan-African Agri-Exporters</h3>
              <p className="text-xs text-neutral-400">
                Subsidizing gas and settlement fees for verified local smallholder farming collectives.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'builders' && (
          <div className="p-6 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-4">
            <h3 className="text-base font-bold text-white">PASADIUM Global Developer Guild</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Build sovereign applications on top of PASADIUM Trade APIs, VCAAS media pipes, and edge mesh compute.
              $250,000 in ecosystem grants available for Q3/Q4.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/PASADIUM-GLOBAL"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white text-neutral-900 font-semibold text-xs flex items-center gap-1.5"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={onOpenAuth}
                className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs border border-neutral-700"
              >
                Request Guild Access
              </button>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Driven by People · Powered by Innovation</span>
          </div>
          <span className="text-neutral-500">MOMBASA · NAIROBI · GLOBAL NODES</span>
        </div>
      </div>
    </div>
  );
};
