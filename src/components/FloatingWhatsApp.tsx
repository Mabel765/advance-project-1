import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <a
        href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.heroQuote)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-orange-600/40 transition-all transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-orange-600 cursor-pointer"
        aria-label="Chat with Mabelight on WhatsApp"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-white stroke-white" />
        </div>
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest whitespace-nowrap font-mono">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
