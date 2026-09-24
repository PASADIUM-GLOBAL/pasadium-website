import React, { useState } from 'react';
import { Layers, Shield, Cpu, Database, Server, Compass, CheckCircle2 } from 'lucide-react';

export const ArchitectureMatrix: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'public' | 'product' | 'infra'>('public');

  return (
    <section id="architecture" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2">
            PASADIUM SOVEREIGN MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            The Three-Tier Architecture
          </h2>
        </div>
        <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-mono">
          PASADIUM is the identity. Products are the tools people use. Infrastructure is what
          makes them work.
        </p>
      </div>

      {/* Interactive Tier Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-lg max-w-md mb-8">
        <button
          type="button"
          onClick={() => setActiveTier('public')}
          className={`flex-1 py-2 text-xs font-mono font-medium rounded transition-all ${
            activeTier === 'public'
              ? 'bg-white text-neutral-950 font-bold shadow-xs'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          01. PUBLIC LAYER
        </button>
        <button
          type="button"
          onClick={() => setActiveTier('product')}
          className={`flex-1 py-2 text-xs font-mono font-medium rounded transition-all ${
            activeTier === 'product'
              ? 'bg-white text-neutral-950 font-bold shadow-xs'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          02. PRODUCT LAYER
        </button>
        <button
          type="button"
          onClick={() => setActiveTier('infra')}
          className={`flex-1 py-2 text-xs font-mono font-medium rounded transition-all ${
            activeTier === 'infra'
              ? 'bg-white text-neutral-950 font-bold shadow-xs'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          03. INFRASTRUCTURE
        </button>
      </div>

      {/* Matrix Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Tier Details Card */}
        <div className="lg:col-span-7 bg-[#0b0d10] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
          {activeTier === 'public' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <h3 className="text-2xl font-bold text-white font-display">
                  Public Sovereign Layer: PASADIUM
                </h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The public front door of the organization. Visitors, partners, and institutions
                interact with a unified African technology house brand rather than deciphering
                internal project codes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                {[
                  { name: 'PASADIUM Trade', desc: 'Financial market & trading gateway' },
                  { name: 'PASADIUM Media', desc: 'Cultural & digital media systems' },
                  { name: 'PASADIUM AI', desc: 'Autonomous intelligence interfaces' },
                  { name: 'PASADIUM Connect', desc: 'Access networks & WiFi Hub' },
                  { name: 'PASADIUM Labs', desc: 'Exploratory cryptography & R&D' },
                  { name: 'PASADIUM Studio', desc: 'Creative systems & digital products' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded bg-neutral-900/60 border border-neutral-800/80">
                    <span className="text-white font-semibold block">{item.name}</span>
                    <span className="text-neutral-400 text-[11px]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTier === 'product' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h3 className="text-2xl font-bold text-white font-display">
                  Product Layer: Sovereign Deployments
                </h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The concrete products that users operate every day. Each product carries its own
                purpose, interface, and dedicated execution environment, powered seamlessly by PASADIUM.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                {[
                  { name: 'YLC TradeHub', desc: 'High-throughput institutional execution platform' },
                  { name: 'VCAAS', desc: 'Video Cloud as a Service for streaming distribution' },
                  { name: 'WiFi Hub', desc: 'Distributed mesh internet gateway nodes' },
                  { name: 'TradeVerse', desc: 'Simulated liquidity environment and sandbox' },
                  { name: 'MediaVerse', desc: 'Broadcasting archive and content pipelines' },
                  { name: 'Future Products', desc: 'Modular micro-services ready for instantiation' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded bg-neutral-900/60 border border-neutral-800/80">
                    <span className="text-white font-semibold block">{item.name}</span>
                    <span className="text-neutral-400 text-[11px]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTier === 'infra' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <h3 className="text-2xl font-bold text-white font-display">
                  Deep Infrastructure Layer
                </h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The machinery beneath the brand. Invisible to public casual visitors, these engines
                provide real-time event streaming, consensus guarantees, memory virtualization, and security auditability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                {[
                  { name: 'Polymath Core', desc: 'Compute and multi-agent coordination engine' },
                  { name: 'Bridge.OS', desc: 'Interoperability and state bridge protocol' },
                  { name: 'EVENT.OS & MEMORY.OS', desc: 'Low-latency distributed event streaming' },
                  { name: 'Sentinel & SecVerse', desc: 'Automated intrusion detection & threat containment' },
                  { name: 'Evidence.OS', desc: 'Verifiable cryptographic audit trail generator' },
                  { name: 'Ledger Engine', desc: 'High-speed immutable settlement state machine' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded bg-neutral-900/60 border border-neutral-800/80">
                    <span className="text-white font-semibold block">{item.name}</span>
                    <span className="text-neutral-400 text-[11px]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Visual Architectural Hierarchy Diagram */}
        <div className="lg:col-span-5 bg-[#090a0c] border border-neutral-800 rounded-xl p-6 font-mono text-xs space-y-4">
          <div className="text-neutral-500 uppercase pb-2 border-b border-neutral-800">
            SOVEREIGN HIERARCHY TREE
          </div>

          <pre className="text-neutral-300 leading-relaxed overflow-x-auto text-[11px] sm:text-xs py-2">
{`                    PASADIUM.TECH
               ┌─────────────────────┐
               │   PASADIUM GLOBAL   │
               │   Public Brand OS   │
               └──────────┬──────────┘
                          │
          ┌───────────────┼───────────────┐
          │               │               │
        TRADE           MEDIA          FRONTIER
          │               │               │
          ▼               ▼               ▼
     YLC TradeHub       VCAAS          AI / CONNECT
     trade platform   media suite       WiFi Hub
          │               │               │
  ════════╧═══════════════╧═══════════════╧════════
             INFRASTRUCTURE LAYER (DEEP)
      Polymath · Bridge.OS · Sentinel · Ledger`}
          </pre>

          <div className="pt-4 border-t border-neutral-800 space-y-2 text-neutral-400 text-[11px]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Public users see a clean, sovereign technological identity.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Products are free to innovate and specialize autonomously.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Infrastructure remains hardened, decoupled, and verifiable.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
