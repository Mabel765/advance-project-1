import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { ShieldCheck, CheckCircle2, Award, Headphones, ArrowRight, Zap } from 'lucide-react';

interface TheSolutionProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const TheSolution: React.FC<TheSolutionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="solution" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Solution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
            Don't Just Fix the Generator. Fix the Problem Behind the Breakdown.
          </h2>
        </div>

        {/* Core Solution Presentation Card */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[32px] p-8 sm:p-12 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
          <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            
            <p className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
              At Mabelight, we look beyond the immediate fault.
            </p>

            <p>
              Whether you need a generator, heavy-duty engine, spare part, repair, or complete overhaul, we help you identify the right solution for your specific power requirements.
            </p>

            {/* Brand focus pill */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 font-mono">
                  ENGINE & EQUIPMENT EXPERTISE
                </span>
                <span className="text-[10px] text-slate-400 font-mono">REF: ENG-STD</span>
              </div>
              <p className="text-slate-800 font-semibold text-base sm:text-lg leading-relaxed">
                We work with <strong className="text-slate-950 font-black underline decoration-orange-500 decoration-2">Perkins</strong>, <strong className="text-slate-950 font-black underline decoration-orange-500 decoration-2">Cummins</strong>, <strong className="text-slate-950 font-black underline decoration-orange-500 decoration-2">Caterpillar</strong> and <strong className="text-slate-950 font-black underline decoration-orange-500 decoration-2">FG Wilson</strong> equipment and provide practical recommendations before you commit to a purchase or repair.
              </p>
            </div>

            {/* 3 Pillars of Confidence */}
            <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">The Equipment</h4>
                  <p className="text-xs text-slate-500 mt-1">Dependable gensets & heavy engines</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Technical Support</h4>
                  <p className="text-xs text-slate-500 mt-1">Expert diagnostics & guidance</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Confidence</h4>
                  <p className="text-xs text-slate-500 mt-1">Knowing what's being done & why</p>
                </div>
              </div>
            </div>

            <p className="text-center sm:text-left text-slate-900 font-bold pt-2 text-base">
              You get the equipment. The technical support. And the confidence that comes with knowing what's being done and why.
            </p>

          </div>

          {/* Centered CTA button */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.expertConsultation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer"
            >
              <span>Speak With a Mabelight Expert</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
