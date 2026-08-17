import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { AlertOctagon, Flame, ArrowRight, ShieldAlert } from 'lucide-react';

interface TheProblemProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const TheProblem: React.FC<TheProblemProps> = ({ onOpenQuoteModal }) => {
  // Interactive Downtime Cost Calculator for Facility & Business Managers
  const [outageHoursPerMonth, setOutageHoursPerMonth] = useState<number>(4);
  const [hourlyProductionLoss, setHourlyProductionLoss] = useState<number>(250);

  const estimatedMonthlyLoss = outageHoursPerMonth * hourlyProductionLoss;
  const estimatedAnnualRisk = estimatedMonthlyLoss * 12;

  return (
    <section id="the-problem" className="py-20 bg-slate-50 relative border-t border-b border-slate-200/80">
      
      {/* Editorial Watermark Texture */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            How Much Is Generator Downtime Costing You?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-medium">
            When power fails unexpectedly, the ripple effect across production, client delivery, and equipment safety is devastating.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Problem Narrative Cards (Verbatim Product Copy) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Breakdown Scenario Card */}
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 font-mono">
                  FAILURE SCENARIO
                </span>
                <span className="text-[10px] text-slate-400 font-mono">01 / DOWNTIME</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-2 tracking-tight">
                <Flame className="w-5 h-5 text-orange-600" />
                <span>You know the feeling.</span>
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                The power goes out. You switch to your generator.
              </p>
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-orange-950 font-bold mb-4 text-base">
                Then… it refuses to start.
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Or it starts but struggles under load. Maybe it overheats, consumes too much fuel, produces unusual noise, or shuts down when you need it most.
              </p>
            </div>

            {/* The Compounding Cost Card */}
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-slate-200/50 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 font-mono">
                  COMPOUNDING IMPACT
                </span>
                <span className="text-[10px] text-slate-400 font-mono">02 / CAPITAL LEAK</span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Now you're calling technicians, searching for spare parts, negotiating prices — while your business stands still.
              </p>
              <p className="text-slate-900 font-bold text-base">
                And every minute your equipment stays down, the losses can keep growing.
              </p>
              <div className="pt-3">
                <div className="bg-slate-900 text-white p-5 rounded-2xl">
                  <p className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] mb-1 font-mono">
                    Here's the truth:
                  </p>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Buying the cheapest part or using an inexperienced technician can become much more expensive than getting the right solution from the beginning.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Downtime Risk Calculator */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-[32px] p-8 sm:p-9 shadow-2xl shadow-slate-900/30 sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 font-mono block">
                    INTERACTIVE TOOL
                  </span>
                  <h3 className="text-xl font-black text-white tracking-tight uppercase mt-0.5">
                    Downtime Estimator
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>

              {/* Slider 1: Outage Hours */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300 uppercase tracking-wider">Unscheduled Strain (Hours / Mo):</span>
                  <span className="text-orange-400 font-mono text-sm">{outageHoursPerMonth} hrs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={outageHoursPerMonth}
                  onChange={(e) => setOutageHoursPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg cursor-pointer accent-orange-500"
                  aria-label="Outage hours per month slider"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 hr (Minor)</span>
                  <span>20 hrs (Heavy strain)</span>
                  <span>40 hrs (Severe)</span>
                </div>
              </div>

              {/* Slider 2: Estimated Hourly Impact */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300 uppercase tracking-wider">Operational Impact ($ / Hr):</span>
                  <span className="text-orange-400 font-mono text-sm">${hourlyProductionLoss} /hr</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={hourlyProductionLoss}
                  onChange={(e) => setHourlyProductionLoss(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg cursor-pointer accent-orange-500"
                  aria-label="Hourly production loss slider"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$50/hr (Small ops)</span>
                  <span>$500/hr (Commercial)</span>
                  <span>$2,000/hr+ (Plant)</span>
                </div>
              </div>

              {/* Calculated Totals Box */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Monthly Vulnerability:</span>
                  <span className="text-xl font-black text-orange-400 font-tech">
                    ${estimatedMonthlyLoss.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Potential Annual Risk:</span>
                  <span className="text-2xl font-black text-white font-tech">
                    ${estimatedAnnualRisk.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-400 text-center leading-relaxed">
                Preventable with genuine OEM parts, expert diagnostics, and scheduled overhauls.
              </p>

              {/* Action Button */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('Repairs & Engine Overhauling')}
                  className="w-full py-4 px-4 text-xs font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all cursor-pointer"
                >
                  Prevent Downtime With Mabelight
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Centered CTA Section Under Problem */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.breakdownEmergency)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer"
          >
            <span>Have Equipment Showing Warning Signs? Contact Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
