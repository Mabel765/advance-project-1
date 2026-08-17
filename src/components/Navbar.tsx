import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { Zap, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#services' },
    { label: 'Spare Parts', href: '#brands' },
    { label: 'Reliability', href: '#why-us' },
    { label: 'Who We Serve', href: '#industries' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-notification ticker */}
      <div className="bg-slate-900 text-slate-200 text-xs font-medium py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-orange-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest shrink-0">
              <Zap className="w-3 h-3 fill-white" /> Fast Response
            </span>
            <span className="truncate text-slate-300 font-mono text-[11px]">
              Perkins • Cummins • Caterpillar • FG Wilson — Dependable Generators, Genuine Parts & Engine Overhauls
            </span>
          </div>
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-400 hover:text-orange-300 shrink-0 uppercase tracking-widest"
          >
            <PhoneCall className="w-3 h-3" /> WhatsApp Support
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/90 shadow-md shadow-slate-200/50 py-3.5'
            : 'bg-slate-50/90 backdrop-blur-sm border-slate-200/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          
          {/* Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-orange-600 rounded-lg shrink-0"
            aria-label="Mabelight Ventures Home"
          >
            <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black shadow-md shadow-orange-600/30 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white stroke-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase leading-none text-slate-900 group-hover:text-orange-600 transition-colors">
                MABELIGHT
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5 font-mono">
                Ventures
              </span>
            </div>
          </a>

          {/* Nav Zone (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-orange-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Zone */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-2xl shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer"
            >
              Diagnostic Sizer
            </button>
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-lg shadow-orange-600/25 transition-all transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer"
            >
              <span>Get a Quote on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 rounded-xl whitespace-nowrap"
            >
              Quote
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl focus-visible:outline-2 focus-visible:outline-orange-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 shadow-xl space-y-3">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200 rounded-2xl"
            >
              Diagnostic & Quote Assistant
            </button>
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white bg-orange-600 rounded-2xl shadow-md"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
