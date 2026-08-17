import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { Zap, Wrench, ShieldCheck, Search, ArrowRight, CheckCircle2, Cog } from 'lucide-react';

interface WhatWeDoProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenQuoteModal }) => {
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Generators & Heavy-Duty Engines',
      subtitle: 'Need dependable backup power?',
      icon: Zap,
      description: 'We supply generators and heavy-duty engines suited to different business and operational requirements.',
      result: 'Reliable power capacity without guessing what equipment your business actually needs.',
      details: ['Prime & standby generators', 'Industrial diesel engines', 'Soundproof & open configurations', 'Perkins / Cummins / CAT / FG Wilson'],
      whatsappMsg: SITE_CONFIG.whatsappMessages.heroQuote,
    },
    {
      id: 2,
      number: '02',
      title: 'Genuine Spare Parts',
      subtitle: 'A wrong or poor-quality component can create another breakdown before you\'ve recovered from the first one.',
      icon: Cog,
      description: 'We help source the appropriate spare parts for Perkins, Cummins, Caterpillar and FG Wilson equipment.',
      result: 'Fewer avoidable mistakes and a better chance of getting your equipment back to work properly.',
      details: ['OEM filters, injectors & pumps', 'Gaskets, pistons & liner kits', 'Alternators, AVRs & starter motors', 'Sensors, belts & electrical components'],
      whatsappMsg: SITE_CONFIG.whatsappMessages.spareParts,
    },
    {
      id: 3,
      number: '03',
      title: 'Repairs & Engine Overhauling',
      subtitle: 'Some engine problems require more than a quick patch.',
      icon: Wrench,
      description: 'Our repair and overhauling service is designed to identify underlying issues and restore equipment to dependable working condition.',
      result: 'Extend the useful life of your equipment instead of rushing into an unnecessary replacement.',
      details: ['Complete top & major engine overhauls', 'Crankshaft & cylinder head machining', 'Diagnostic troubleshooting under load', 'Fuel injection & turbo overhaul'],
      whatsappMsg: SITE_CONFIG.whatsappMessages.overhaulService,
    },
    {
      id: 4,
      number: '04',
      title: 'Preventive Maintenance',
      subtitle: 'Don\'t wait for a breakdown to tell you something is wrong.',
      icon: ShieldCheck,
      description: 'Regular servicing can help identify developing problems before they become expensive emergencies.',
      result: 'Better equipment reliability and greater peace of mind.',
      details: ['Scheduled 250hr / 500hr servicing', 'Coolant, oil & fluid laboratory checks', 'Load bank & thermal testing', 'Preventive component replacement'],
      whatsappMsg: SITE_CONFIG.whatsappMessages.preventiveMaintenance,
    },
    {
      id: 5,
      number: '05',
      title: 'Generator Sourcing & Supply',
      subtitle: 'Not sure what capacity, engine type or configuration is right for your operation?',
      icon: Search,
      description: 'Tell us what you need. We\'ll help you determine the appropriate solution based on your actual requirements.',
      result: 'Sized correctly to handle your operational load without overspending or underpowering.',
      details: ['Load calculation & sizing guidance', 'Facility power audit recommendations', 'Custom enclosure & fuel system sourcing', 'Transparent specifications'],
      whatsappMsg: SITE_CONFIG.whatsappMessages.customSourcing,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Wrench className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">REF: 2024-SYS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            SOLUTIONS & SPECIALIZED SERVICES
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            From emergency repairs and genuine parts sourcing to major engine overhauls and complete generator installations.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLastSpan = index === 4; // 5th card styling

            return (
              <div
                key={service.id}
                className={`bg-white border border-slate-200 hover:border-orange-500/80 rounded-[32px] p-8 shadow-2xl shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isLastSpan ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-orange-600 font-tech">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 transition-colors group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors tracking-tight uppercase">
                    {service.title}
                  </h3>

                  {/* Subtitle / Hook copy */}
                  <p className="text-xs font-semibold text-orange-600 mb-3 italic">
                    "{service.subtitle}"
                  </p>

                  {/* Main Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mb-6 space-y-2 pt-3 border-t border-slate-100">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* The Result Box (Verbatim) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5">
                    <span className="font-bold text-orange-600 uppercase tracking-[0.2em] block mb-1 text-[10px] font-mono">
                      THE RESULT:
                    </span>
                    {service.result}
                  </div>

                  {/* Card Action */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="flex-1 py-3 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors cursor-pointer"
                    >
                      Inquire on this
                    </button>
                    <a
                      href={getWhatsAppUrl(service.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-2xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-all shadow-md shadow-orange-600/20"
                      title="Direct WhatsApp"
                    >
                      <span>WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Centered CTA row */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-orange-600 whitespace-nowrap cursor-pointer"
          >
            <span>Tell Us What You Need — Get A Direct Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
