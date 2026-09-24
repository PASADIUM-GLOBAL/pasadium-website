import React, { useState } from 'react';
import { X, Wallet, TrendingUp, ArrowDownRight, ArrowUpRight, DollarSign, ShieldCheck, RefreshCw } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrade: () => void;
  userName?: string;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  onOpenTrade,
  userName = 'Global Operator',
}) => {
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');

  if (!isOpen) return null;

  const totalUSD = 84350.25;
  const rateUSDToKES = 132.5;
  const totalVal = currency === 'USD' ? totalUSD : totalUSD * rateUSDToKES;

  const assets = [
    {
      name: 'YLC Mombasa Tea Grade 1 (Auction Voucher)',
      type: 'Commodity Token',
      allocation: '32%',
      valueUSD: 27000.0,
      change24h: '+4.2%',
      positive: true,
    },
    {
      name: 'Kilifi Solar Grid Computing Credits',
      type: 'Infrastructure Stake',
      allocation: '24%',
      valueUSD: 20244.06,
      change24h: '+1.8%',
      positive: true,
    },
    {
      name: 'VCAAS Media Streaming Yield Notes',
      type: 'Media Asset',
      allocation: '20%',
      valueUSD: 16870.05,
      change24h: '+6.5%',
      positive: true,
    },
    {
      name: 'East African Arabica AA Coffee Contract',
      type: 'Agricultural Futures',
      allocation: '14%',
      valueUSD: 11809.03,
      change24h: '-0.9%',
      positive: false,
    },
    {
      name: 'PASADIUM Treasury Reserve (KES/USDC)',
      type: 'Liquidity Pool',
      allocation: '10%',
      valueUSD: 8427.11,
      change24h: '+0.4%',
      positive: true,
    },
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
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Sovereign Portfolio Tracker
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  REAL-TIME SYNC
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Track your multi-asset holdings, yields, and performance across the PASADIUM ecosystem.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrency(currency === 'USD' ? 'KES' : 'USD')}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors border border-neutral-700"
            >
              Currency: {currency}
            </button>
            <button
              type="button"
              onClick={onOpenTrade}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Trade Assets</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Total Value & Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-400">NET ASSET VALUE</span>
            <div className="text-2xl font-bold text-white font-mono">
              {currency === 'USD' ? '$' : 'KES '}
              {totalVal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+$3,410.20 (+4.21% this month)</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-400">LIQUID COLLATERAL</span>
            <div className="text-2xl font-bold text-cyan-400 font-mono">
              {currency === 'USD' ? '$' : 'KES '}
              {(totalVal * 0.42).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Instant settlement available
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0c121c] border border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-400">ESTIMATED ANNUAL YIELD</span>
            <div className="text-2xl font-bold text-purple-400 font-mono">
              11.8% APY
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Aggregated across 5 vaults
            </div>
          </div>
        </div>

        {/* Asset Table */}
        <div className="rounded-xl border border-neutral-800 overflow-hidden bg-[#0c121c]">
          <div className="px-5 py-3 border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>ASSET HOLDING</span>
            <span>VALUE & 24H CHANGE</span>
          </div>

          <div className="divide-y divide-neutral-800/80">
            {assets.map((asset, idx) => {
              const val = currency === 'USD' ? asset.valueUSD : asset.valueUSD * rateUSDToKES;
              return (
                <div key={idx} className="p-4 sm:px-5 flex items-center justify-between hover:bg-neutral-800/30 transition-colors">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white">{asset.name}</div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">{asset.type}</span>
                      <span>Weight: {asset.allocation}</span>
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="text-sm font-mono font-bold text-white">
                      {currency === 'USD' ? '$' : 'KES '}
                      {val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div
                      className={`text-xs font-mono font-semibold flex items-center justify-end gap-1 ${
                        asset.positive ? 'text-emerald-400' : 'text-red-400'
                      }`}
                    >
                      {asset.positive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                      <span>{asset.change24h}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Custody via PASADIUM Vaults</span>
          </div>
          <span className="text-neutral-500">MOMBASA GATEWAY · LAST SYNC: JUST NOW</span>
        </div>
      </div>
    </div>
  );
};
