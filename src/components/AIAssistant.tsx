import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, CornerDownLeft, RefreshCw, MessageSquare } from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  initialTopic?: string | null;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  isOpen,
  onToggle,
  onClose,
  initialTopic,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'PASADIUM Intelligence online. I am connected to the sovereign PASADIUM-GLOBAL registry in Mombasa. How can I assist your review of our systems, products, or institutional corridors?',
      timestamp: '00:01',
      source: 'registry',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (initialTopic) {
      handleSendQuery(initialTopic);
    }
  }, [initialTopic]);

  const handleSendQuery = async (queryText: string) => {
    const textToSend = queryText.trim();
    if (!textToSend || loading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-4),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: Message = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Registry lookup completed.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: data.source || 'gemini',
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.warn('AI query request error:', err);
      // Fallback message
      const fallbackMsg: Message = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: 'PASADIUM GLOBAL is headquartered in Mombasa, Kenya. We engineer market infrastructure (YLC TradeHub), video distribution (VCAAS), and sovereign terrestrial connectivity. For direct assistance, contact hello@pasadium.tech.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'local-registry',
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const presetTopics = [
    { label: 'Trade', query: 'What does PASADIUM Trade and YLC TradeHub do?' },
    { label: 'Media', query: 'Tell me about PASADIUM Media and VCAAS.' },
    { label: 'Technology', query: 'What is the underlying technology of PASADIUM?' },
    { label: 'Partnership', query: 'How do institutional partners collaborate with PASADIUM?' },
    { label: 'Frontier', query: 'What products are currently coming soon?' },
  ];

  return (
    <aside aria-label="PASADIUM Intelligence" className="fixed bottom-6 right-6 z-50 font-mono text-xs">
      {/* Floating Trigger Button when closed */}
      {!isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="px-4 py-2.5 bg-[#0a0f18] hover:bg-[#101726] text-white border border-neutral-800 hover:border-cyan-500/50 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-200 group"
        >
          <PasadiumLogo size="sm" showText={false} />
          <span className="font-semibold tracking-wide text-xs font-mono">PASADIUM AI</span>
          <span className="text-[11px] text-cyan-400 group-hover:text-cyan-300">· Ask</span>
        </button>
      )}

      {/* Main Intelligence Interface Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] bg-[#080a0c] border border-neutral-800 rounded-xl shadow-2xl flex flex-col justify-between overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3 bg-[#0e141f] border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <PasadiumLogo size="sm" showText={false} />
              <div>
                <span className="font-bold text-white tracking-wider font-mono">PASADIUM AI</span>
                <span className="text-[10px] text-cyan-400 block font-mono">MOMBASA NODE · GEMINI 3.8</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
              aria-label="Close Intelligence Interface"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conversation Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`space-y-1 ${
                  msg.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[88%] text-left leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-neutral-800 text-white border border-neutral-700'
                      : 'bg-neutral-900/90 text-neutral-200 border border-neutral-800'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  {msg.source && (
                    <div className="mt-1 pt-1 border-t border-neutral-800 text-[10px] text-neutral-500 flex items-center justify-between">
                      <span>Source: {msg.source}</span>
                      <span>{msg.timestamp}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-left space-y-1">
                <div className="inline-block p-3 rounded-lg bg-neutral-900/90 text-neutral-400 border border-neutral-800 flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span>Synthesizing PASADIUM registry...</span>
                </div>
              </div>
            )}

            {/* Quick Topic Prompts */}
            <div className="pt-2 space-y-2">
              <div className="text-[11px] text-neutral-500">What are you looking for?</div>
              <div className="flex flex-wrap gap-1.5">
                {presetTopics.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendQuery(item.query)}
                    className="px-2.5 py-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800/80 transition-colors text-[11px] flex items-center gap-1"
                  >
                    <span className="text-cyan-400">○</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#0a0c0f] border-t border-neutral-800">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendQuery(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask PASADIUM..."
                className="flex-1 px-3 py-2 rounded bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white placeholder-neutral-500 outline-hidden text-xs"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2 rounded bg-white hover:bg-neutral-200 text-neutral-950 disabled:opacity-40 transition-colors shrink-0"
                aria-label="Send query"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
};
