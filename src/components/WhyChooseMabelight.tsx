import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { CheckCircle2, Shield, Wrench, Sparkles, Building2, ArrowRight } from 'lucide-react';

export const WhyChooseMabelight: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'Practical Recommendations',
      icon: Sparkles,
      description: "We don't believe in selling you equipment simply because it's available. We focus on understanding what you need first.",
    },
    {
      num: '02',
      title: 'Technical Support',
      icon: Wrench,
      description: 'From diagnostics to repairs and overhauling, you have access to support when equipment problems arise.',
    },
    {
      num: '03',
      title: 'Quality-Focused Solutions',
      icon: Shield,
      description: 'We help you source suitable generators, engines and spare parts for your equipment requirements.',
    },
    {
      num: '04',
      title: 'Business-Minded Service',
      icon: Building2,
      description: "We understand that your generator isn't just a machine. It's part of the system keeping your business running.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Why Choose Mabelight?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            BECAUSE RELIABILITY IS MORE THAN A PRODUCT.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Engineered solutions that prioritize uptime, fuel efficiency, and long equipment lifespans.
          </p>
        </div>

        {/* 4 Pillars Grid with elevated cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.num}
                className="bg-white border border-slate-200 hover:border-orange-500/80 rounded-[32px] p-8 shadow-2xl shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-orange-600 font-tech">
                    {reason.num}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                  {reason.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hook 2 Integration & Pattern Interrupt */}
        <div className="mt-14 max-w-4xl p-8 sm:p-10 rounded-[32px] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
                ENGINEERING PHILOSOPHY
              </span>
              <p className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
                "Your Generator Doesn't Need to Be New. It Needs to Be Reliable."
              </p>
            </div>
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.expertConsultation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all shrink-0 cursor-pointer"
            >
              <span>Talk to Mabelight on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
