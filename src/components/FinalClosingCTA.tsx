import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { ArrowRight, AlertTriangle } from 'lucide-react';

interface FinalClosingCTAProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const FinalClosingCTA: React.FC<FinalClosingCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main CTA Box in Slate 900 */}
        <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8 sm:p-14 shadow-2xl text-center relative overflow-hidden">
          
          {/* Top Editorial Accent Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-mono">
            <AlertTriangle className="w-3.5 h-3.5 text-orange-400" />
            <span>PREVENT COSTLY DOWNTIME TODAY</span>
          </div>

          {/* Headline (Verbatim) */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto uppercase">
            YOUR NEXT BREAKDOWN SHOULDN'T BE THE FIRST TIME YOU THINK ABOUT YOUR GENERATOR.
          </h2>

          {/* Verbatim 3 Warning Triggers */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <span className="text-orange-500 font-bold font-mono text-lg">01</span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                If your generator is already showing signs of trouble, <strong className="text-white">don't wait for complete failure.</strong>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <span className="text-orange-500 font-bold font-mono text-lg">02</span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                If you're planning to buy one, <strong className="text-white">don't guess your way through the decision.</strong>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <span className="text-orange-500 font-bold font-mono text-lg">03</span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                If you need a spare part, <strong className="text-white">don't risk fitting the wrong component.</strong>
              </p>
            </div>
          </div>

          {/* Direct call to action copy */}
          <div className="mt-10 space-y-2 max-w-2xl mx-auto">
            <p className="text-2xl sm:text-3xl font-black text-orange-400 uppercase tracking-tight">
              Talk to Mabelight.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-medium">
              Tell us what you need. We'll help you determine the right next step.
            </p>
          </div>

          {/* Centered Main WhatsApp CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              <span>REQUEST A QUOTE ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-slate-950 hover:bg-slate-800 border border-slate-700 rounded-2xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Tell Us The Problem (Form)</span>
            </button>
          </div>

          {/* Brand Tagline Banner */}
          <div className="mt-12 pt-8 border-t border-slate-800 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-black text-white uppercase tracking-wider font-mono">
              Mabelight Ventures
            </p>
            <p className="text-xs sm:text-sm font-semibold text-orange-400 mt-1 uppercase tracking-widest font-mono">
              Reliable Equipment. Practical Solutions. Less Downtime.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
