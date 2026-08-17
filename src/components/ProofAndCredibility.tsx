import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, Wrench } from 'lucide-react';

interface ProofAndCredibilityProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const ProofAndCredibility: React.FC<ProofAndCredibilityProps> = ({ onOpenQuoteModal }) => {
  const deliverables = [
    'A professional assessment of your requirement',
    'Guidance on suitable equipment or parts',
    'Clear discussion of available options',
    'Technical direction for repair or maintenance needs',
    'A quotation based on your specific requirement',
  ];

  return (
    <section id="credibility" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proof & Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            YOUR EQUIPMENT DESERVES PROFESSIONAL ATTENTION.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          
          {/* Card 1: Professional Standard & Direct Assessment */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-slate-200/50 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-medium">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-slate-900 font-bold text-lg">
                  Mabelight focuses on practical generator and heavy-equipment solutions across sales, spare parts, diagnostics, repairs, maintenance and engine overhauling.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50 border-l-4 border-orange-600 text-orange-950 font-bold">
                We don't promise what we can't verify.
              </div>

              <p>
                Instead, we assess your requirement, recommend a suitable solution, and give you the information you need to make an informed decision.
              </p>

              <div className="pt-2">
                <p className="text-slate-900 font-bold text-base">
                  Need a solution for a specific generator or engine? Tell us the model and the problem.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="w-full py-4 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-orange-600" />
                <span>Specify Generator Model & Problem</span>
              </button>
            </div>
          </div>

          {/* Card 2: What You Get When You Contact Us (Verbatim Checklist in Slate-900) */}
          <div className="bg-slate-900 text-white rounded-[32px] p-8 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  WHAT YOU GET WHEN YOU CONTACT US
                </h3>
              </div>
              <p className="text-xs font-bold text-orange-400 mb-6 uppercase tracking-wider font-mono">
                Your enquiry isn't simply another sales request. You get:
              </p>

              {/* Verbatim 5 Checkpoints */}
              <ul className="space-y-3">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 font-mono">
                  NO GUESSING. NO UNNECESSARY COMPLICATIONS.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Your Free Assessment on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
