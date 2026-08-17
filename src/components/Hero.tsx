import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { ArrowRight, CheckCircle2, Wrench, Cpu, Zap } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 bg-editorial-grid">
      
      {/* Decorative Geometric Editorial Accents */}
      <div className="absolute top-[20%] right-[-40px] w-56 h-1.5 bg-orange-600 rotate-[-25deg] opacity-20 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Hook 1 / Loss Aversion Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span>When Power Fails, Business Pays</span>
            <span className="hidden md:inline text-orange-400">•</span>
            <span className="hidden md:inline text-orange-950 font-medium text-xs normal-case tracking-normal">
              Every Hour Down Could Cost More Than the Repair.
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.92] text-slate-900">
            YOUR GENERATOR SHOULD KEEP YOUR BUSINESS RUNNING —{' '}
            <span className="text-orange-600 underline decoration-orange-600/30 decoration-wavy decoration-2">
              NOT KEEP YOU WORRIED.
            </span>
          </h1>

          <div className="mt-8 space-y-4 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            <p>
              When your generator breaks down at the wrong time, the cost isn't just the repair. You could lose production hours, disappoint customers, damage sensitive equipment, or watch an entire day's revenue disappear.
            </p>
          </div>

          {/* Elevated White Narrative Feature Box */}
          <div className="mt-8 max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-[32px] border border-slate-200 shadow-2xl shadow-slate-200/60 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Zap className="w-32 h-32 fill-slate-900 text-slate-900" />
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 font-mono">
                MABELIGHT SERVICE PROMISE
              </span>
              <span className="text-[10px] text-slate-400 font-mono">REF: PWR-2024</span>
            </div>
            <p className="text-slate-800 text-base sm:text-lg font-semibold leading-relaxed">
              <strong className="text-orange-600 font-black">Mabelight Ventures</strong> helps you prevent costly downtime with dependable generators, genuine spare parts, expert repairs, and professional engine overhauling.
            </p>
          </div>

          {/* Centered Primary CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 text-sm sm:text-base font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer"
            >
              <span>Get a Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 text-sm font-bold uppercase tracking-widest text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-2xl shadow-md shadow-slate-200/50 transition-all transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer"
            >
              <Wrench className="w-4 h-4 text-orange-600" />
              <span>Diagnose Equipment / Request Parts</span>
            </button>
          </div>

          {/* Trust points row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <span>Fast WhatsApp Response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <span>Genuine OEM Replacement Parts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <span>Practical Technical Recommendations</span>
            </div>
          </div>
        </div>

        {/* Major Brand Compatibility Matrix Cards */}
        <div id="brands" className="mt-16 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Certified Support & Genuine Parts For
            </span>
            <span className="text-[10px] font-mono text-slate-400">OEM COMPLIANT</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SITE_CONFIG.supportedBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white border border-slate-200 hover:border-orange-500/80 rounded-2xl p-5 shadow-lg shadow-slate-200/40 transition-all group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-black text-slate-900 group-hover:text-orange-600 transition-colors font-tech tracking-wider uppercase">
                    {brand.name}
                  </span>
                  <Cpu className="w-4 h-4 text-orange-600" />
                </div>
                <div className="text-xs font-bold text-orange-600 mb-1.5 uppercase tracking-wide">
                  {brand.category}
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Editorial Bottom Rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
    </section>
  );
};
