import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { Zap, PhoneCall, Mail, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
      
      {/* Brand & Summary Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black shadow-md shadow-orange-600/30">
                <Zap className="w-4 h-4 fill-white stroke-white" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900 uppercase">
                MABELIGHT
              </span>
            </div>

            <p className="text-xs text-slate-900 font-bold uppercase tracking-wider font-mono">
              Ventures
            </p>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-medium">
              Mabelight Ventures helps you prevent costly downtime with dependable generators, genuine spare parts, expert repairs, and professional engine overhauling.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-orange-600 font-bold font-mono">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>Reliable Equipment. Practical Solutions. Less Downtime.</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 font-mono">
              Services & Capabilities
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Generators & Heavy-Duty Engines
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Perkins, Cummins, CAT & FG Wilson Spare Parts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Repairs & Professional Engine Overhauling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Preventive Maintenance & Servicing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Generator Sourcing & Capacity Sizing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct WhatsApp Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 font-mono">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Need technical guidance, spare parts, or an urgent repair quote? Connect with us directly on WhatsApp.
            </p>
            <div>
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all uppercase tracking-wider"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>+234 909 514 0080</span>
              </a>
            </div>
            {SITE_CONFIG.businessEmail && (
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{SITE_CONFIG.businessEmail}</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-orange-600 font-bold transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
