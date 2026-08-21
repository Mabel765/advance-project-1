import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { X, Send, CheckCircle2, AlertCircle, Wrench, ShieldCheck } from 'lucide-react';

interface DirectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const DirectInquiryModal: React.FC<DirectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Generators & Heavy-Duty Engines',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrWhatsApp: '',
    brand: 'Perkins',
    service: initialService,
    equipmentModel: '',
    problemOrNeed: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const structuredMessage = `Hello Mabelight, I am requesting a quote:
- Name: ${formData.name || 'Not specified'}
- Contact Number: ${formData.phoneOrWhatsApp || 'Provided on chat'}
- Equipment Brand: ${formData.brand}
- Service Needed: ${formData.service}
${formData.equipmentModel ? `- Model/Capacity: ${formData.equipmentModel}` : ''}
- Details/Problem: ${formData.problemOrNeed || 'Please advise on recommendations'}`;

    try {
      // If a webhook is configured in SITE_CONFIG.webhookUrl, send payload in background
      if (SITE_CONFIG.webhookUrl && SITE_CONFIG.webhookUrl.trim() !== '') {
        try {
          await fetch(SITE_CONFIG.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              timestamp: new Date().toISOString(),
              source: 'Mabelight Landing Page Lead Modal',
            }),
          });
        } catch (err) {
          console.warn('Webhook notification failed, continuing with WhatsApp redirect', err);
        }
      }

      setSubmitted(true);
      
      // Auto-open WhatsApp after short visual confirmation
      setTimeout(() => {
        const url = getWhatsAppUrl(structuredMessage);
        window.open(url, '_blank');
      }, 700);

    } catch (err) {
      setErrorMessage('Could not process automatically. You can directly click the WhatsApp button below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-[32px] p-6 sm:p-10 shadow-2xl shadow-slate-900/30 my-8 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 border border-orange-200 text-orange-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              Redirecting to WhatsApp...
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
              Your equipment details have been pre-formatted. If WhatsApp does not open automatically, click the button below to connect with Mabelight.
            </p>
            <div className="pt-4">
              <a
                href={getWhatsAppUrl(
                  `Hello Mabelight, I am ${formData.name || 'inquiring'} regarding ${formData.service} for ${formData.brand} equipment (${formData.problemOrNeed || 'Need quote'}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-orange-600/30 transition-all"
              >
                <span>Open WhatsApp Chat Now</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 font-mono">
                <Wrench className="w-3.5 h-3.5" />
                <span>TELL US WHAT YOU NEED</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                Request a Quote / Assessment
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                We assess your requirement and provide clear technical guidance & quotation.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 font-mono">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / Engr. Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 font-mono">
                    Phone / WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 909 514 0080"
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 font-mono">
                    Equipment Brand:
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-600"
                  >
                    <option value="Perkins">Perkins</option>
                    <option value="Cummins">Cummins</option>
                    <option value="Caterpillar">Caterpillar</option>
                    <option value="FG Wilson">FG Wilson</option>
                    <option value="Other / Not Sure">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 font-mono">
                    Service Required:
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-600"
                  >
                    <option value="Generators & Heavy-Duty Engines">Generators & Heavy-Duty Engines</option>
                    <option value="Spare Parts">Spare Parts</option>
                    <option value="Repairs & Engine Overhauling">Repairs & Engine Overhauling</option>
                    <option value="Preventive Maintenance">Preventive Maintenance</option>
                    <option value="Generator Sourcing & Supply">Generator Sourcing & Supply</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 font-mono">
                  Generator Model or Capacity (kVA / kW):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Perkins 100kVA, Cummins 6CTA, CAT C15"
                  value={formData.equipmentModel}
                  onChange={(e) => setFormData({ ...formData, equipmentModel: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 font-mono">
                  Describe Problem / Part Needed:
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe what the equipment is doing, symptoms, or specific spare parts you need..."
                  value={formData.problemOrNeed}
                  onChange={(e) => setFormData({ ...formData, problemOrNeed: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-600 font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Formatting Brief...</span>
                  ) : (
                    <>
                      <span>Get Instant Quote on WhatsApp</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                <span>Professional Technical Assessment • Direct WhatsApp Reply</span>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};
