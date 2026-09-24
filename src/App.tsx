/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SystemsGrid } from './components/SystemsGrid.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { TradePortalModal } from './components/TradePortalModal.tsx';
import { MediaPortalModal } from './components/MediaPortalModal.tsx';
import { WiFiHubModal } from './components/WiFiHubModal.tsx';
import { ProjectsModal } from './components/ProjectsModal.tsx';
import { PortfolioModal } from './components/PortfolioModal.tsx';
import { CommunityModal } from './components/CommunityModal.tsx';
import { StudioModal } from './components/StudioModal.tsx';
import { FrontierSection } from './components/FrontierSection.tsx';
import { ArchitectureMatrix } from './components/ArchitectureMatrix.tsx';
import { ContactTerminal } from './components/ContactTerminal.tsx';
import { AIAssistant } from './components/AIAssistant.tsx';
import { CommandPalette } from './components/CommandPalette.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  // Modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    type: string;
  } | null>(null);

  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [wifiModalOpen, setWifiModalOpen] = useState(false);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const [studioModalOpen, setStudioModalOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeAITopic, setActiveAITopic] = useState<string | null>(null);

  // Global key listener for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCommandAction = (action: string) => {
    switch (action) {
      case 'open_auth':
        setAuthMode('login');
        setAuthModalOpen(true);
        break;
      case 'open_trade':
        setTradeModalOpen(true);
        break;
      case 'open_media':
        setMediaModalOpen(true);
        break;
      case 'open_wifi':
        setWifiModalOpen(true);
        break;
      case 'open_projects':
        setProjectsModalOpen(true);
        break;
      case 'open_portfolio':
        setPortfolioModalOpen(true);
        break;
      case 'open_community':
        setCommunityModalOpen(true);
        break;
      case 'open_ai':
        setAiAssistantOpen(true);
        break;
      case 'open_connect': {
        const el = document.getElementById('frontier');
        el?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'nav_architecture': {
        const el = document.getElementById('architecture');
        el?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'nav_contact': {
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'open_github':
        window.open('https://github.com/PASADIUM-GLOBAL', '_blank', 'noreferrer');
        break;
      default:
        break;
    }
  };

  const handleSelectSystemFromHero = (systemId: string) => {
    if (systemId === 'trade') {
      setTradeModalOpen(true);
    } else if (systemId === 'media') {
      setMediaModalOpen(true);
    } else if (systemId === 'wifi') {
      setWifiModalOpen(true);
    } else if (systemId === 'projects') {
      setProjectsModalOpen(true);
    } else if (systemId === 'ai') {
      setActiveAITopic('What is PASADIUM AI and how does it integrate with the ecosystem?');
      setAiAssistantOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b10] text-[#e2e5e8] bg-grid-subtle flex flex-col selection:bg-cyan-500/20 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenCommand={() => setCommandPaletteOpen(true)}
        onOpenTerminal={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAuth={() => {
          setAuthMode('login');
          setAuthModalOpen(true);
        }}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplore={() => {
            const el = document.getElementById('systems');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onContact={() => {
            const el = document.getElementById('contact');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAuth={() => {
            setAuthMode('register');
            setAuthModalOpen(true);
          }}
          onSelectSystem={handleSelectSystemFromHero}
        />

        {/* The 6 Core Systems Grid (TradeHub, VCAAS, WiFi Hub, Projects, Portfolio, Community) */}
        <SystemsGrid
          onOpenTrade={() => setTradeModalOpen(true)}
          onOpenMedia={() => setMediaModalOpen(true)}
          onOpenWiFi={() => setWifiModalOpen(true)}
          onOpenProjects={() => setProjectsModalOpen(true)}
          onOpenPortfolio={() => setPortfolioModalOpen(true)}
          onOpenCommunity={() => setCommunityModalOpen(true)}
          onOpenAI={() => {
            setActiveAITopic('What are the capabilities of PASADIUM AI?');
            setAiAssistantOpen(true);
          }}
          onOpenStudio={() => setStudioModalOpen(true)}
        />

        {/* The Frontier Section */}
        <FrontierSection
          onOpenAI={() => {
            setActiveAITopic('What is the trajectory of the PASADIUM AI vector?');
            setAiAssistantOpen(true);
          }}
        />

        {/* Architecture Matrix */}
        <ArchitectureMatrix />

        {/* Contact Terminal */}
        <ContactTerminal />
      </main>

      {/* Footer */}
      <Footer
        onOpenAuth={() => {
          setAuthMode('login');
          setAuthModalOpen(true);
        }}
      />

      {/* Authentication / Ecosystem Gateway Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={userData => {
          setCurrentUser(userData);
        }}
      />

      {/* Product & Interactive Modals */}
      <TradePortalModal
        isOpen={tradeModalOpen}
        onClose={() => setTradeModalOpen(false)}
      />

      <MediaPortalModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
      />

      <WiFiHubModal
        isOpen={wifiModalOpen}
        onClose={() => setWifiModalOpen(false)}
        onOpenTerminal={() => {
          setWifiModalOpen(false);
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <ProjectsModal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        onOpenTrade={() => {
          setProjectsModalOpen(false);
          setTradeModalOpen(true);
        }}
      />

      <PortfolioModal
        isOpen={portfolioModalOpen}
        onClose={() => setPortfolioModalOpen(false)}
        onOpenTrade={() => {
          setPortfolioModalOpen(false);
          setTradeModalOpen(true);
        }}
        userName={currentUser?.name}
      />

      <CommunityModal
        isOpen={communityModalOpen}
        onClose={() => setCommunityModalOpen(false)}
        onOpenAuth={() => {
          setCommunityModalOpen(false);
          setAuthMode('register');
          setAuthModalOpen(true);
        }}
      />

      <StudioModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
      />

      {/* Gemini AI Intelligence Assistant */}
      <AIAssistant
        isOpen={aiAssistantOpen}
        onToggle={() => setAiAssistantOpen(prev => !prev)}
        onClose={() => setAiAssistantOpen(false)}
        initialTopic={activeAITopic}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectAction={handleCommandAction}
      />
    </div>
  );
}
