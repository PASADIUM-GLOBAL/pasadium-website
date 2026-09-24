import React, { useState } from 'react';
import { Mail, Copy, Check, Terminal, ExternalLink, Send, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const ContactTerminal: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState<'general' | 'partnerships' | 'tech'>('general');
  const [message, setMessage] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'transmitting' | 'dispatched'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setErrorMsg('All fields are required for terminal transmission.');
      return;
    }
    if (!senderEmail.includes('@') || !senderEmail.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg(null);
    setDispatchStatus('transmitting');

    setTimeout(() => {
      setDispatchStatus('dispatched');
      // Reset form after short delay
      setTimeout(() => {
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      }, 1000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2">
            TERMINAL ACCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Contact PASADIUM Desk
          </h2>
        </div>
        <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-mono">
          Direct institutional channels, technical advisory, and sovereign partnership routing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Terminal Directory Desk */}
        <div className="lg:col-span-6 bg-[#090b0e] border border-neutral-800 rounded-xl p-6 sm:p-8 font-mono text-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <span className="text-neutral-400 font-semibold">PASADIUM ACCESS DIRECTORY</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ROUTING ACTIVE</span>
            </span>
          </div>

          <div className="space-y-4">
            <div className="text-neutral-500 text-[11px] uppercase tracking-wider">
              Direct Communication Channels
            </div>

            {[
              { label: 'General Desk', email: 'hello@pasadium.tech', key: 'general' },
              { label: 'Partnerships & Capital', email: 'partners@pasadium.tech', key: 'partners' },
              { label: 'Engineering & Tech', email: 'tech@pasadium.tech', key: 'tech' },
            ].map(item => (
              <div
                key={item.key}
                className="p-3.5 rounded bg-neutral-900/80 border border-neutral-800 flex items-center justify-between group hover:border-neutral-700 transition-colors"
              >
                <div>
                  <span className="text-neutral-400 text-[11px] block">{item.label}</span>
                  <span className="text-sm font-semibold text-white tracking-wide">{item.email}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(item.email, item.key)}
                  className="px-2.5 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors flex items-center gap-1 text-[11px]"
                  title="Copy email to clipboard"
                >
                  {copiedKey === item.key ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Social / Developer Outlets */}
          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <div className="text-neutral-500 text-[11px] uppercase tracking-wider">
              Sovereign Outlets & Repositories
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: 'GitHub: PASADIUM-GLOBAL', href: 'https://github.com/PASADIUM-GLOBAL/pasadium-website' },
                { name: 'LinkedIn: PASADIUM', href: 'https://www.linkedin.com/company/pasadium' },
                { name: 'X / Twitter: @pasadium', href: 'https://x.com/pasadium' },
                { name: 'Telegram Channel', href: 'https://t.me/pasadium' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{soc.name}</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500 shrink-0 ml-1" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 text-neutral-500 text-[11px] flex justify-between">
            <span>HEADQUARTERS: MOMBASA · KENYA · AFRICA</span>
            <span>TIMEZONE: UTC+3</span>
          </div>
        </div>

        {/* Transmission Dispatch Terminal */}
        <div className="lg:col-span-6 bg-[#090b0e] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 font-mono text-xs">
            <span className="text-neutral-400 font-semibold">DISPATCH TRANSMISSION</span>
            <span className="text-neutral-500">ENCRYPTION: VERIFIED</span>
          </div>

          {dispatchStatus === 'dispatched' ? (
            <div className="py-12 text-center space-y-4 font-mono text-xs animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white font-display">Transmission Recorded</h4>
                <p className="text-neutral-400 max-w-sm mx-auto">
                  Your dispatch has been queued at the Mombasa coordination node. Our desk will
                  respond to <span className="text-white">{senderEmail || 'your email'}</span> shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDispatchStatus('idle')}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs transition-colors"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleDispatch} className="space-y-4 font-mono text-xs">
              {errorMsg && (
                <div className="p-2.5 rounded bg-red-950/40 border border-red-800/50 text-red-300 flex items-center gap-2 text-[11px]">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-sender-name" className="text-neutral-400 text-[11px] uppercase">Your Name / Entity</label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    value={senderName}
                    onChange={e => setSenderName(e.target.value)}
                    placeholder="e.g. Elena Vance (Sovereign Capital)"
                    className="w-full px-3 py-2.5 rounded bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white placeholder-neutral-600 outline-hidden transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-sender-email" className="text-neutral-400 text-[11px] uppercase">Your Email</label>
                  <input
                    id="contact-sender-email"
                    type="email"
                    value={senderEmail}
                    onChange={e => setSenderEmail(e.target.value)}
                    placeholder="e.g. elena@institution.com"
                    className="w-full px-3 py-2.5 rounded bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white placeholder-neutral-600 outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 text-[11px] uppercase">Select Corridor Topic</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'general', label: 'General' },
                    { id: 'partnerships', label: 'Partnership' },
                    { id: 'tech', label: 'Technology' },
                  ].map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTopic(t.id as any)}
                      className={`py-2 px-2 text-center rounded border transition-colors ${
                        topic === t.id
                          ? 'bg-neutral-800 border-neutral-600 text-white font-semibold'
                          : 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message-body" className="text-neutral-400 text-[11px] uppercase">Message / Proposal</label>
                <textarea
                  id="contact-message-body"
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Outline your inquiry, liquidity interest, or engineering collaboration..."
                  className="w-full px-3 py-2.5 rounded bg-neutral-900 border border-neutral-800 focus:border-neutral-600 text-white placeholder-neutral-600 outline-hidden transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={dispatchStatus === 'transmitting'}
                className="w-full py-3 bg-white hover:bg-neutral-200 text-neutral-950 font-bold rounded transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{dispatchStatus === 'transmitting' ? 'Transmitting Dispatch...' : 'Dispatch Message to Desk'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
