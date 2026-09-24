import React, { useState, useEffect } from 'react';
import { Terminal, Command, Menu, X, Shield, ArrowUpRight, LogIn, UserCheck, LogOut } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenTerminal: () => void;
  onOpenAuth: () => void;
  currentUser: { name: string; email: string; type: string } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommand,
  onOpenTerminal,
  onOpenAuth,
  currentUser,
  onLogout,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#070b10]/95 backdrop-blur-md border-neutral-800/90 shadow-xl shadow-black/50'
          : 'bg-[#070b10]/60 backdrop-blur-xs border-neutral-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Authentic Multi-Ribbon Brand Wordmark */}
        <a href="#" className="flex items-center group">
          <PasadiumLogo size="md" showText={true} showSubtitle={true} />
        </a>

        {/* Text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <a
            href="#systems"
            className="hover:text-white transition-colors underline-offset-8 hover:underline decoration-cyan-400/40"
          >
            01. Systems
          </a>
          <a
            href="#portals"
            className="hover:text-white transition-colors underline-offset-8 hover:underline decoration-cyan-400/40"
          >
            02. Portals
          </a>
          <a
            href="#frontier"
            className="hover:text-white transition-colors underline-offset-8 hover:underline decoration-cyan-400/40"
          >
            03. The Frontier
          </a>
          <a
            href="#architecture"
            className="hover:text-white transition-colors underline-offset-8 hover:underline decoration-cyan-400/40"
          >
            04. Architecture
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors underline-offset-8 hover:underline decoration-cyan-400/40"
          >
            05. Contact
          </a>
        </nav>

        {/* Actions Suite */}
        <div className="flex items-center gap-3">
          {/* Cmd+K Quick Search */}
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-400 bg-[#0c121c] hover:bg-[#121a28] border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors"
            title="Search systems (Cmd+K)"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[11px] text-neutral-300">Cmd+K</span>
          </button>

          {/* Terminal Launcher */}
          <button
            type="button"
            onClick={onOpenTerminal}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-300 bg-[#0c121c] hover:bg-[#121a28] hover:text-white border border-neutral-800 rounded-lg transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal</span>
          </button>

          {/* User Auth / Ecosystem Gateway CTA */}
          {currentUser ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1624] border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-[#142034] transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-semibold max-w-[110px] truncate">{currentUser.name}</span>
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 top-10 w-52 rounded-xl bg-[#0a0f18] border border-neutral-800 shadow-2xl p-2 z-50 text-xs animate-fadeIn">
                  <div className="px-3 py-2 border-b border-neutral-800/80 mb-1">
                    <div className="font-bold text-white truncate">{currentUser.name}</div>
                    <div className="text-[11px] text-neutral-400 truncate">{currentUser.email}</div>
                    <div className="text-[10px] font-mono text-cyan-400 mt-0.5">{currentUser.type} Node</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setProfileMenuOpen(false);
                      onLogout();
                    }}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-red-400 hover:bg-red-950/30 flex items-center justify-between"
                  >
                    <span>Disconnect Node</span>
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenAuth}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] hover:opacity-95 shadow-md shadow-cyan-500/20 rounded-lg transition-all flex items-center gap-2 active:scale-[0.98]"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In / Join</span>
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b10] border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1.5"
            >
              01. Systems
            </a>
            <a
              href="#portals"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1.5"
            >
              02. Portals
            </a>
            <a
              href="#frontier"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1.5"
            >
              03. The Frontier
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1.5"
            >
              04. Architecture Matrix
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1.5"
            >
              05. Contact Terminal
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            {!currentUser && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-center"
              >
                Access Ecosystem / Log In
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-mono text-neutral-300 bg-[#0c121c] border border-neutral-800 text-center"
            >
              Launch Terminal Desk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
