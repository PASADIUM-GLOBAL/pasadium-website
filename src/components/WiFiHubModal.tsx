import React, { useState } from 'react';
import { X, Wifi, Radio, Zap, Shield, ArrowUpRight, Award, Signal, Globe } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface WiFiHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const WiFiHubModal: React.FC<WiFiHubModalProps> = ({ isOpen, onClose, onOpenTerminal }) => {
  const [sharingActive, setSharingActive] = useState(true);

  if (!isOpen) return null;

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
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Wifi className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                  PASADIUM WiFi Hub
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/30">
                  CONNECTIVITY · REWARDS
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Stay connected. Share edge bandwidth. Earn daily token rewards across the East African decentralized network.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenTerminal}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-950 bg-teal-400 hover:bg-teal-300 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Connect Node</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Status Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-400">NODE STATUS</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xl font-bold text-white font-mono">
                {sharingActive ? 'BROADCASTING' : 'IDLE'}
              </span>
            </div>
            <div className="text-xs text-teal-400 font-mono">
              Mesh Node #MBA-0428 (Mombasa Core)
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-400">REWARDS ACCRUED</span>
            <div className="text-2xl font-bold text-emerald-400 font-mono">
              1,482.60 PASA
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              ≈ $148.26 USD (Auto-staked)
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-400">BANDWIDTH RELAYED</span>
            <div className="text-2xl font-bold text-cyan-400 font-mono">
              342.8 GB
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Uptime: 99.98% · Latency: 4ms
            </div>
          </div>
        </div>

        {/* Node Control Card */}
        <div className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Community Mesh Relay</h3>
              <p className="text-xs text-neutral-400">
                Route encrypted traffic for neighboring users and earn micro-rebates on every verified gigabyte.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSharingActive(!sharingActive)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                sharingActive
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 hover:bg-teal-500/30'
                  : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
              }`}
            >
              {sharingActive ? 'RELAY ACTIVE' : 'ENABLE RELAY'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-neutral-800/80 text-xs font-mono">
            <div>
              <span className="text-neutral-500 block">Encryption</span>
              <span className="text-white font-semibold">WireGuard AES-256</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Subsea Transit</span>
              <span className="text-white font-semibold">TEAMS / SEACOM</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Reward Rate</span>
              <span className="text-teal-400 font-semibold">4.2 PASA / GB</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Network Cluster</span>
              <span className="text-white font-semibold">Kenya Coastal Ring</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-400" />
            <span>Zero-Knowledge Relay Protocol · No data logging</span>
          </div>
          <span className="text-neutral-500">PASADIUM CONNECT INFRASTRUCTURE</span>
        </div>
      </div>
    </div>
  );
};
