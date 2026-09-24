import React, { useState } from 'react';
import { X, Radio, Play, Pause, ArrowUpRight, Check, Disc, Volume2, Video } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';
import mediaImage from '../assets/images/media_system_vcaas_1790239625328.jpg';

interface MediaPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaPortalModal: React.FC<MediaPortalModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChannel, setActiveChannel] = useState('AFRICA-CULTURE-01');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#090b0e] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Top Banner */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#0e1116]">
          <div className="flex items-center gap-4">
            <PasadiumLogo size="sm" showSubtitle={false} />
            <div className="border-l border-neutral-800 pl-4">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span>PORTAL INTERFACE · MEDIAVERSE</span>
              </div>
              <h2 className="text-base font-bold text-white font-display">
                VCAAS Media Cloud & Streaming Engine
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

        {/* Hero Copy */}
        <div className="px-6 py-6 border-b border-neutral-800/80 bg-[#07090b] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <p className="text-sm font-semibold text-amber-400 font-mono">
              DIGITAL BROADCAST & PUBLISHING
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white font-display">
              A digital media infrastructure for publishing, video, information and culture.
            </p>
            <p className="text-xs text-neutral-400 font-mono">
              Powered by PASADIUM · Video Cloud as a Service (VCAAS)
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2.5 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause Feed' : 'Resume Feed'}</span>
            </button>
          </div>
        </div>

        {/* Live Stream Viewport & Node Status */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Media Player / Screen Preview */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center">
              <img
                src={mediaImage}
                alt="VCAAS Media Stream Preview"
                className={`w-full h-full object-cover filter contrast-110 transition-opacity duration-300 ${
                  isPlaying ? 'opacity-90' : 'opacity-40'
                }`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Status overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-xs text-xs font-mono text-white border border-white/10">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-ping' : 'bg-neutral-500'}`} />
                <span>{isPlaying ? 'LIVE STREAMING' : 'STREAM STANDBY'}</span>
                <span className="text-neutral-400">· 4K UHD</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span>CHANNEL: {activeChannel}</span>
                <span>EDGE LATENCY: 142ms</span>
              </div>
            </div>

            {/* Video telemetry indicators */}
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-neutral-500 block text-[11px]">Cache Hit Ratio</span>
                <span className="text-white text-sm font-semibold tabular-nums">98.6%</span>
              </div>
              <div className="p-3 rounded bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-neutral-500 block text-[11px]">Transcode Buffer</span>
                <span className="text-emerald-400 text-sm font-semibold tabular-nums">0.12s AV1</span>
              </div>
              <div className="p-3 rounded bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-neutral-500 block text-[11px]">Active Viewers</span>
                <span className="text-white text-sm font-semibold tabular-nums">48,290</span>
              </div>
            </div>
          </div>

          {/* Broadcast Nodes & Content Channels */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 space-y-3 font-mono text-xs">
              <span className="text-neutral-400 uppercase font-semibold">Active Distribution Nodes</span>
              <div className="space-y-2 text-neutral-300">
                {[
                  { city: 'Mombasa Gateway (Hub)', status: 'Primary', ping: '1.2ms' },
                  { city: 'Nairobi Edge', status: 'Relay', ping: '8.4ms' },
                  { city: 'Lagos Coastal', status: 'Active', ping: '32.1ms' },
                  { city: 'Johannesburg South', status: 'Active', ping: '28.6ms' },
                ].map((node, i) => (
                  <div key={i} className="flex items-center justify-between pb-1.5 border-b border-neutral-800/40 last:border-0">
                    <span className="text-neutral-200">{node.city}</span>
                    <span className="text-neutral-500 tabular-nums">{node.ping}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/60 space-y-3 font-mono text-xs">
              <span className="text-neutral-400 uppercase font-semibold">Channels</span>
              <div className="space-y-1.5">
                {[
                  { id: 'AFRICA-CULTURE-01', name: 'African Cultural Cinema' },
                  { id: 'PASADIUM-STREAM-LIVE', name: 'Technology & Tech Talks' },
                  { id: 'AFX-MARKETS-24', name: 'Real-time Financial Data Feed' },
                ].map(ch => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setActiveChannel(ch.id)}
                    className={`w-full text-left p-2 rounded transition-colors ${
                      activeChannel === ch.id
                        ? 'bg-neutral-800 text-white border border-neutral-700 font-semibold'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <div className="text-[11px] text-neutral-500">{ch.id}</div>
                    <div className="text-xs">{ch.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#0e1116] border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>VCAAS SOVEREIGN STREAMING LAYER</span>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            Close Portal [Esc]
          </button>
        </div>
      </div>
    </div>
  );
};
