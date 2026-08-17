import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config';
import { Sparkles, Send, ShieldCheck, CheckCircle } from 'lucide-react';

export const DiagnosticBuilder: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Perkins');
  const [selectedService, setSelectedService] = useState<string>('Repairs & Engine Overhauling');
  const [equipmentModel, setEquipmentModel] = useState<string>('');
  const [selectedSymptom, setSelectedSymptom] = useState<string>('Struggles or shuts down under electrical load');
  const [customNotes, setCustomNotes] = useState<string>('');

  const brandList = ['Perkins', 'Cummins', 'Caterpillar', 'FG Wilson', 'Other / Not Sure'];

  const serviceList = [
    'Repairs & Engine Overhauling',
    'Spare Parts Sourcing',
    'Generators & Heavy-Duty Engines',
    'Preventive Maintenance',
    'Generator Sourcing & Supply'
  ];

  const commonIssues = [
    'Struggles or shuts down under electrical load',
    'Refuses to start / slow cranking',
    'Overheats or high temperature alarm',
    'Consumes excessive fuel or oil',
    'Produces unusual knocking or noise',
    'Needs specific genuine spare part / filters / pump',
    'Due for major engine overhaul / rebuilding',
    'Planning new generator installation & capacity sizing'
  ];

  // Compose dynamic message for WhatsApp
  const generatedMessage = `Hello Mabelight, I need assistance with our equipment:
- Brand: ${selectedBrand}
- Service Required: ${selectedService}
${equipmentModel ? `- Model/Capacity: ${equipmentModel}` : ''}
- Observed Symptom/Requirement: ${selectedSymptom}
${customNotes ? `- Additional Details: ${customNotes}` : ''}

Please provide technical direction and quotation.`;

  return (
    <section id="diagnostic-tool" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      {/* Visual Accents */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Power & Equipment Triage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            TELL US WHAT YOU NEED — WE'LL HELP DETERMINE THE RIGHT SOLUTION
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Select your equipment details and symptoms below. We'll format an exact technical brief for fast WhatsApp quotation.
          </p>
        </div>

        {/* Triage Interactive Card Box */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-8 sm:p-12 shadow-2xl shadow-slate-200/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step 1 & 2: Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Brand Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 font-mono">
                  1. Select Equipment Brand:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {brandList.map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-3.5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all text-left flex items-center justify-between cursor-pointer ${
                        selectedBrand === brand
                          ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 ring-2 ring-orange-400'
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{brand}</span>
                      {selectedBrand === brand && <CheckCircle className="w-3.5 h-3.5 fill-white text-orange-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                  2. Select What You Need:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-600 transition-colors"
                >
                  {serviceList.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Equipment Model / kVA */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                  3. Equipment Model or Capacity (Optional):
                </label>
                <input
                  type="text"
                  value={equipmentModel}
                  onChange={(e) => setEquipmentModel(e.target.value)}
                  placeholder="e.g. Perkins 1104A-44TG2, CAT 3406, 150kVA FG Wilson"
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 transition-colors font-medium"
                />
              </div>

              {/* Primary Symptom / Requirement */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                  4. Primary Symptom or Requirement:
                </label>
                <select
                  value={selectedSymptom}
                  onChange={(e) => setSelectedSymptom(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-600 transition-colors"
                >
                  {commonIssues.map((issue) => (
                    <option key={issue} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
              </div>

              {/* Extra Details */}
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                  5. Additional Notes (Optional):
                </label>
                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Any extra context, part number, or urgent timing requirements..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 transition-colors font-medium"
                />
              </div>

            </div>

            {/* Step 3: Live Formatted Technical Ticket Preview (Dark contrast box) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white rounded-[32px] p-6 sm:p-8 shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 font-mono">
                      TECHNICAL ASSESSMENT TICKET
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    REF: 2024-LIVE
                  </span>
                </div>

                <div className="mt-4 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                  {generatedMessage}
                </div>

                <div className="mt-5 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Direct WhatsApp routing with pre-populated specs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Reviewed by technical generator engineers</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                <a
                  href={getWhatsAppUrl(generatedMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-bold uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-2xl shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Ticket to Mabelight on WhatsApp</span>
                </a>
                <p className="text-[11px] text-slate-400 text-center">
                  Quick response • No pressure • Clear technical quotation
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
