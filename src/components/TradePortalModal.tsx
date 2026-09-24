import React, { useState, useEffect } from 'react';
import { X, TrendingUp, ShieldCheck, Activity, ArrowUpRight, Check, Copy } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface TradePortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OrderItem {
  price: number;
  amount: number;
  total: number;
  type: 'buy' | 'sell';
}

export const TradePortalModal: React.FC<TradePortalModalProps> = ({ isOpen, onClose }) => {
  const [activePair, setActivePair] = useState<'USDT/KES' | 'BTC/USD' | 'AFX/USD'>('USDT/KES');
  const [copied, setCopied] = useState(false);
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  // Simulated order book
  const [bids, setBids] = useState<OrderItem[]>([
    { price: 129.45, amount: 15400, total: 1993530, type: 'buy' },
    { price: 129.40, amount: 8200, total: 1061080, type: 'buy' },
    { price: 129.35, amount: 23100, total: 2987985, type: 'buy' },
    { price: 129.30, amount: 45000, total: 5818500, type: 'buy' },
  ]);

  const [asks, setAsks] = useState<OrderItem[]>([
    { price: 129.50, amount: 12100, total: 1566950, type: 'sell' },
    { price: 129.55, amount: 9800, total: 1269590, type: 'sell' },
    { price: 129.60, amount: 18400, total: 2384640, type: 'sell' },
    { price: 129.65, amount: 31000, total: 4019150, type: 'sell' },
  ]);

  // Subtle live ticking effect for realism
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setBids(prev =>
        prev.map(b => ({
          ...b,
          amount: Math.max(1000, Math.floor(b.amount + (Math.random() * 400 - 200))),
        }))
      );
    }, 2400);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText('https://trade.pasadium.tech/api/v1/stream');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateExecution = () => {
    setOrderNotification('Simulated Limit Order matched at 129.48 KES · Filled 10,000 USDT in 0.41ms');
    setTimeout(() => setOrderNotification(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#090b0e] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Top Portal Banner */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#0e1116]">
          <div className="flex items-center gap-4">
            <PasadiumLogo size="sm" showSubtitle={false} />
            <div className="border-l border-neutral-800 pl-4">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>PORTAL INTERFACE · TRADEVERSE</span>
              </div>
              <h2 className="text-base font-bold text-white font-display">
                TradeHub / YLC Order Router
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

        {/* Hero Value statement */}
        <div className="px-6 py-6 border-b border-neutral-800/80 bg-[#07090b] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <p className="text-sm font-semibold text-emerald-400 font-mono">
              MARKET INFRASTRUCTURE
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white font-display">
              Market infrastructure built for execution, intelligence and risk.
            </p>
            <p className="text-xs text-neutral-400 font-mono">
              Powered by PASADIUM · Primary deployment: YLC TradeHub
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleSimulateExecution}
              className="px-4 py-2.5 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded transition-colors whitespace-nowrap shadow-xs"
            >
              Test Match Execution
            </button>
            <button
              type="button"
              onClick={handleCopyEndpoint}
              className="px-3 py-2.5 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'API Node'}</span>
            </button>
          </div>
        </div>

        {/* Live Notification */}
        {orderNotification && (
          <div className="px-6 py-2 bg-emerald-950/60 border-b border-emerald-800/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <Check className="w-3.5 h-3.5" />
            <span>{orderNotification}</span>
          </div>
        )}

        {/* Platform Viewport: Trading Telemetry & Order Book */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Pair selector & Core metrics */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-500">Market Pair</span>
              <div className="flex items-center gap-2">
                {(['USDT/KES', 'BTC/USD', 'AFX/USD'] as const).map(pair => (
                  <button
                    key={pair}
                    type="button"
                    onClick={() => setActivePair(pair)}
                    className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                      activePair === pair
                        ? 'bg-neutral-800 text-white font-semibold border border-neutral-700'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {pair}
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-neutral-800/80 grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block">Mark Price</span>
                  <span className="text-base font-bold text-white tabular-nums">129.48 KES</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">24h Change</span>
                  <span className="text-base font-bold text-emerald-400 tabular-nums">+1.42%</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Engine Latency</span>
                  <span className="text-white tabular-nums">0.38 ms</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Liquidity Depth</span>
                  <span className="text-white tabular-nums">$14.8M USD</span>
                </div>
              </div>
            </div>

            {/* Architecture stack under the hood */}
            <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/60 space-y-3 text-xs font-mono">
              <span className="text-neutral-500 uppercase block">Underlying Architecture</span>
              <div className="space-y-2 text-neutral-300">
                <div className="flex items-center justify-between pb-1 border-b border-neutral-800/40">
                  <span>Matching Engine</span>
                  <span className="text-neutral-400">Polymath Bridge</span>
                </div>
                <div className="flex items-center justify-between pb-1 border-b border-neutral-800/40">
                  <span>Risk Sentinel</span>
                  <span className="text-emerald-400">Sentinel Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Settlement Engine</span>
                  <span className="text-neutral-400">Ledger OS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Order Book Display */}
          <div className="lg:col-span-8 p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-neutral-800/80">
              <span>ORDER BOOK (REAL-TIME DEPTH)</span>
              <span>MATCH STATUS: ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {/* Asks (Sells) */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-neutral-500 text-[11px] pb-1">
                  <span>Ask Price</span>
                  <span>Size (USDT)</span>
                  <span>Total (KES)</span>
                </div>
                {asks.map((ask, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-1 px-2 rounded bg-red-950/20 text-red-300 tabular-nums text-xs"
                  >
                    <span className="font-semibold">{ask.price.toFixed(2)}</span>
                    <span className="text-neutral-300">{ask.amount.toLocaleString()}</span>
                    <span className="text-neutral-400">{ask.total.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Bids (Buys) */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-neutral-500 text-[11px] pb-1">
                  <span>Bid Price</span>
                  <span>Size (USDT)</span>
                  <span>Total (KES)</span>
                </div>
                {bids.map((bid, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-1 px-2 rounded bg-emerald-950/20 text-emerald-300 tabular-nums text-xs"
                  >
                    <span className="font-semibold">{bid.price.toFixed(2)}</span>
                    <span className="text-neutral-300">{bid.amount.toLocaleString()}</span>
                    <span className="text-neutral-400">{bid.total.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom launcher notice */}
            <div className="pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
              <span>Production Node: ylc-tradehub.pasadium.tech</span>
              <a
                href="https://github.com/PASADIUM-GLOBAL"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline flex items-center gap-1"
              >
                <span>PASADIUM-GLOBAL Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Portal Footer */}
        <div className="px-6 py-4 bg-[#0e1116] border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>PASADIUM GLOBAL · MOMBASA FINANCIAL CORRIDOR</span>
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
