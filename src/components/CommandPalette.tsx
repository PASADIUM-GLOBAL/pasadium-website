import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  ArrowRight,
  TrendingUp,
  Video,
  Cpu,
  Wifi,
  Terminal,
  ExternalLink,
  Layers,
  Mail,
  LogIn,
  Wallet,
  Users,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (action: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const items = [
    {
      id: 'auth',
      title: 'Access Ecosystem Gateway (Log In / Register)',
      category: 'Authentication',
      icon: LogIn,
      action: 'open_auth',
    },
    {
      id: 'trade',
      title: 'TradeHub / YLC Pan-African Market Router',
      category: 'Ecosystem Pillars',
      icon: TrendingUp,
      action: 'open_trade',
    },
    {
      id: 'vcaas',
      title: 'VCAAS Media Cloud & Video Streaming',
      category: 'Ecosystem Pillars',
      icon: Video,
      action: 'open_media',
    },
    {
      id: 'wifi',
      title: 'WiFi Hub & Decentralized Mesh Rewards',
      category: 'Ecosystem Pillars',
      icon: Wifi,
      action: 'open_wifi',
    },
    {
      id: 'projects',
      title: 'PASADIUM Projects & Venture Syndicates',
      category: 'Ecosystem Pillars',
      icon: Layers,
      action: 'open_projects',
    },
    {
      id: 'portfolio',
      title: 'Sovereign Portfolio Tracker (USD & KES)',
      category: 'Ecosystem Pillars',
      icon: Wallet,
      action: 'open_portfolio',
    },
    {
      id: 'community',
      title: 'Global Community Network & Governance',
      category: 'Ecosystem Pillars',
      icon: Users,
      action: 'open_community',
    },
    {
      id: 'ai',
      title: 'PASADIUM AI & Economic Telemetry Node',
      category: 'Intelligence',
      icon: Cpu,
      action: 'open_ai',
    },
    {
      id: 'architecture',
      title: 'Three-Tier Sovereign Model',
      category: 'Architecture',
      icon: Layers,
      action: 'nav_architecture',
    },
    {
      id: 'contact',
      title: 'Direct Access Desk & Directory',
      category: 'Contact',
      icon: Mail,
      action: 'nav_contact',
    },
    {
      id: 'github',
      title: 'GitHub Organization (PASADIUM-GLOBAL)',
      category: 'External',
      icon: ExternalLink,
      action: 'open_github',
    },
  ];

  const filtered = items.filter(
    i =>
      i.title.toLowerCase().includes(query.toLowerCase()) ||
      i.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#090d14] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-800 bg-[#0e141f]">
          <Search className="w-4 h-4 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command or search PASADIUM systems (e.g. login, trade, wifi, portfolio)..."
            className="flex-1 bg-transparent text-white placeholder-neutral-500 outline-hidden text-sm font-sans"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-500 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-neutral-500 font-sans text-xs">
              No matching systems found in PASADIUM registry.
            </div>
          ) : (
            filtered.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelectAction(item.action);
                    onClose();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-neutral-800/60 flex items-center justify-between text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400" />
                    <div>
                      <span className="font-sans text-xs font-medium text-white">{item.title}</span>
                      <span className="text-[11px] text-neutral-500 ml-2">· {item.category}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#070b10] border-t border-neutral-800 text-[11px] text-neutral-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>[Esc] Close</span>
            <span>[↑↓] Navigate</span>
            <span>[Enter] Select</span>
          </div>
          <span className="text-cyan-400/80">PASADIUM COMMAND OS</span>
        </div>
      </div>
    </div>
  );
};
