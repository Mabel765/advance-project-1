import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { Sun, CheckCircle, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export const TheRealValue: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      {/* Visual Accents */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Sun className="w-3.5 h-3.5" />
            <span>Operational Peace of Mind</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            THE REAL VALUE OF DEPENDABLE GENERATOR SUPPORT
          </h2>
        </div>

        {/* 3 Imagination Transformations */}
        <div className="max-w-4xl space-y-4">
          
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-2xl shadow-slate-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:border-orange-500/80 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 font-mono">
                  MORNING START ROUTINE
                </p>
                <p className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                  Imagine starting your workday without wondering:
                </p>
                <p className="text-slate-500 italic text-sm mt-1">
                  "Will the generator start today?"
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:text-right">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl">
                <CheckCircle className="w-4 h-4 text-orange-600" /> Instant Reliability
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-2xl shadow-slate-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:border-orange-500/80 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 font-mono">
                  UNINTERRUPTED OUTPUT
                </p>
                <p className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                  Imagine your production team working without unnecessary interruptions.
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:text-right">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl">
                <CheckCircle className="w-4 h-4 text-orange-600" /> Zero Lost Hours
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-2xl shadow-slate-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:border-orange-500/80 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 font-mono">
                  DIRECT EXPERT LINE
                </p>
                <p className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                  Imagine knowing where to turn when your equipment starts showing warning signs.
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:text-right">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl">
                <CheckCircle className="w-4 h-4 text-orange-600" /> Fast Resolution
              </span>
            </div>
          </div>

        </div>

        {/* Summary Value Banner in Dark Slate Card */}
        <div className="mt-12 max-w-4xl p-8 sm:p-12 rounded-[32px] bg-slate-900 text-white text-center shadow-2xl space-y-6">
          <p className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            That's the real value of dependable generator support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
            <span className="px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-orange-400">
              Less panic.
            </span>
            <span className="px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-orange-400">
              Less unnecessary downtime.
            </span>
            <span className="px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-white">
              More confidence in your operations.
            </span>
          </div>

          <div className="pt-4 flex justify-center">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get Protected with Mabelight</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
