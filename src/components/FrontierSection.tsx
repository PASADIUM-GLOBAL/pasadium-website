import React, { useState } from 'react';
import { Sparkles, Cpu, Wifi, FlaskConical, ArrowRight, Check } from 'lucide-react';

interface FrontierSectionProps {
  onOpenAI: () => void;
}

export const FrontierSection: React.FC<FrontierSectionProps> = ({ onOpenAI }) => {
  const [subscribedCategory, setSubscribedCategory] = useState<string | null>(null);

  const handleNotify = (category: string) => {
    setSubscribedCategory(category);
    setTimeout(() => setSubscribedCategory(null), 3000);
  };

  return (
    <section id="frontier" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2">
            THE PASADIUM FRONTIER
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Trajectory & Intentional Systems
          </h2>
        </div>
        <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-mono">
          We do not leave placeholders. Every frontier vector advances with concrete
          engineering milestones and sovereign infrastructure commitments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontier 01: AI */}
        <div className="bg-[#0b0d10] border border-neutral-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-cyan-400 font-semibold">VECTOR 01</span>
              <span className="text-neutral-400">BUILDING</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white font-display">AI</h3>
              <p className="text-xs font-mono text-neutral-400">Autonomous Intelligence & Multi-Agent Matrix</p>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Domain-specific neural decision engines trained for African commerce, regulatory automation,
              and cross-border trade route optimization.
            </p>

            {/* Ascii Progress Bar Representation */}
            <div className="p-3 rounded bg-neutral-900/80 border border-neutral-800 font-mono text-xs space-y-1.5">
              <div className="flex justify-between text-neutral-400 text-[11px]">
                <span>Progress: Phase 3 Verification</span>
                <span className="text-cyan-400 font-bold tabular-nums">78%</span>
              </div>
              <div className="text-cyan-400 tracking-wider font-bold">
                ███████████████░░░░░
              </div>
              <div className="text-[11px] text-neutral-500">
                Milestone: Fine-tuned inference engine & sovereign public terminal active.
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
            <button
              type="button"
              onClick={onOpenAI}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Test Current Agent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-mono text-neutral-500">STAGED ROLLOUT</span>
          </div>
        </div>

        {/* Frontier 02: CONNECT */}
        <div className="bg-[#0b0d10] border border-neutral-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-purple-400 font-semibold">VECTOR 02</span>
              <span className="text-neutral-400">BUILDING</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white font-display">CONNECT</h3>
              <p className="text-xs font-mono text-neutral-400">WiFi Hub & Terrestrial Mesh Access</p>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Bridging digital divides with high-bandwidth, resilient terrestrial wireless mesh nodes
              and micro-metered access gateways across coastal economic zones.
            </p>

            {/* Ascii Progress Bar Representation */}
            <div className="p-3 rounded bg-neutral-900/80 border border-neutral-800 font-mono text-xs space-y-1.5">
              <div className="flex justify-between text-neutral-400 text-[11px]">
                <span>Progress: Gateway Fabrication</span>
                <span className="text-purple-400 font-bold tabular-nums">56%</span>
              </div>
              <div className="text-purple-400 tracking-wider font-bold">
                ███████████░░░░░░░░░
              </div>
              <div className="text-[11px] text-neutral-500">
                Milestone: Field testing Mombasa coastal relay node alpha.
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleNotify('Connect')}
              className="text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {subscribedCategory === 'Connect' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Subscribed</span>
                </>
              ) : (
                <>
                  <span>Request Node Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
            <span className="text-xs font-mono text-neutral-500">PILOT 2026</span>
          </div>
        </div>

        {/* Frontier 03: LABS */}
        <div className="bg-[#0b0d10] border border-neutral-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-neutral-400 font-semibold">VECTOR 03</span>
              <span className="text-neutral-400">EXPLORING</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white font-display">LABS</h3>
              <p className="text-xs font-mono text-neutral-400">Experimental Protocol Research & Ledgers</p>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Research into verifiable compute, zero-knowledge settlement state machines,
              and low-power spatial tracking hardware for supply chains.
            </p>

            {/* Ascii Progress Bar Representation */}
            <div className="p-3 rounded bg-neutral-900/80 border border-neutral-800 font-mono text-xs space-y-1.5">
              <div className="flex justify-between text-neutral-400 text-[11px]">
                <span>Progress: Theoretical Proofs</span>
                <span className="text-neutral-300 font-bold tabular-nums">42%</span>
              </div>
              <div className="text-neutral-300 tracking-wider font-bold">
                ████████░░░░░░░░░░░░
              </div>
              <div className="text-[11px] text-neutral-500">
                Milestone: Peer-review whitepaper & protocol RFC draft.
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleNotify('Labs')}
              className="text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {subscribedCategory === 'Labs' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Subscribed</span>
                </>
              ) : (
                <>
                  <span>Research Papers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
            <span className="text-xs font-mono text-neutral-500">R&D CONTINUOUS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
