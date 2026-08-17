import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';

export const CommonQuestions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What if I don't know exactly what part or generator I need?",
      answer: "That's fine. Tell us what equipment you have, what it's doing, and what you need it to accomplish. We'll help you determine the appropriate direction.",
      badge: "Sizing & Sourcing"
    },
    {
      question: "What if my generator has already broken down?",
      answer: "Contact us. We'll need information about the equipment and the problem so we can advise on the appropriate next step.",
      badge: "Emergency Repair"
    },
    {
      question: "Do you only sell generators?",
      answer: "No. Our services cover generator and engine sales, spare parts, repairs, diagnostics, maintenance and engine overhauling.",
      badge: "Scope of Services"
    },
    {
      question: "How much will it cost?",
      answer: "It depends on the equipment, specification, parts required and nature of the work. That's why we provide quotation-based pricing after understanding your specific requirement.",
      badge: "Pricing & Quotes"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 relative border-t border-slate-200">
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            COMMON QUESTIONS
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Straight answers to help you make informed equipment decisions.
          </p>
        </div>

        {/* Accordion FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 hover:border-orange-500/80 rounded-[28px] overflow-hidden shadow-2xl shadow-slate-200/50 transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-600"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 font-mono w-fit">
                      {faq.badge}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      "{faq.question}"
                    </span>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-orange-600 bg-orange-100' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-medium">
                    <p className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Centered CTA under FAQ */}
        <div className="mt-14 text-center">
          <p className="text-sm font-semibold text-slate-500 mb-4">
            Have a different question or specific equipment query?
          </p>
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Ask Mabelight on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
