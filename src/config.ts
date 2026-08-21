/**
 * =========================================================================
 * MABELIGHT VENTURES — SITE & FUNNEL CONFIGURATION
 * =========================================================================
 * 
 * ALL URLs, phone numbers, WhatsApp numbers, email addresses, and webhook
 * endpoints for this landing page must be edited here in ONE obvious place.
 * 
 * You do NOT need to look inside or edit any component code below.
 * 
 * How to configure:
 * 1. WHATSAPP_PHONE_NUMBER: Enter your business WhatsApp phone number with 
 *    country code (no '+' or '-' symbols, e.g. "2349095140080").
 * 2. BUSINESS_EMAIL: Enter your public contact email (e.g. "mabelightb@gmail.com").
 * 3. WEBHOOK_URL: Optional external endpoint (e.g. Zapier, Make, or Google Sheets webhook)
 *    to receive form submissions. Leave as empty string "" if using WhatsApp only.
 * 4. DEFAULT_WHATSAPP_MESSAGE: The pre-filled message when visitors click 
 *    the primary "Get a Quote on WhatsApp" button.
 * =========================================================================
 */

export const SITE_CONFIG = {
  // Brand details
  companyName: "Mabelight Ventures",
  shortName: "Mabelight",
  tagline: "Reliable Equipment. Practical Solutions. Less Downtime.",

  // Primary Contact & Funnel Target
  // --> Enter your WhatsApp phone number with country code (e.g. 2349095140080)
  whatsappPhoneNumber: "2349095140080",
  displayPhoneNumber: "+234 909 514 0080",

  // Business Email address
  businessEmail: "mabelightb@gmail.com",

  // Optional Webhook URL for form submissions (e.g., Google Sheet Apps Script, Zapier, Make webhook)
  // Leave empty if you only want direct WhatsApp routing
  webhookUrl: "",

  // Pre-filled WhatsApp message templates for different visitor intents
  whatsappMessages: {
    heroQuote: "Hello Mabelight, I saw your website and would like to get a quote for a generator / heavy equipment requirement.",
    expertConsultation: "Hello Mabelight, I would like to speak with a technical expert regarding our equipment power requirements.",
    breakdownEmergency: "Hello Mabelight, our generator is experiencing an issue and we need urgent diagnostic & repair assistance.",
    spareParts: "Hello Mabelight, I am looking for genuine spare parts for our equipment (Perkins / Cummins / Caterpillar / FG Wilson).",
    overhaulService: "Hello Mabelight, I need information and a quote for engine overhauling / major servicing.",
    preventiveMaintenance: "Hello Mabelight, I would like to discuss a scheduled preventive maintenance plan for our business generators.",
    customSourcing: "Hello Mabelight, I need assistance determining the right generator capacity and engine specification for our facility."
  },

  // Supported Major Equipment Brands
  supportedBrands: [
    {
      name: "Perkins",
      category: "Engines & Spare Parts",
      description: "Complete diesel power engines, genuine filters, fuel injectors, gaskets, water pumps & overhaul kits."
    },
    {
      name: "Cummins",
      category: "Industrial Power & Heavy Duty",
      description: "Heavy-duty generator engines, electronic control modules, turbochargers, sensors & scheduled service parts."
    },
    {
      name: "Caterpillar",
      category: "Heavy Equipment & Power Systems",
      description: "CAT series diesel generators, rugged engine assemblies, cylinder heads, pistons & diagnostic repair support."
    },
    {
      name: "FG Wilson",
      category: "Prime & Standby Generator Sets",
      description: "Enclosed & open gensets, control panels, automatic transfer switches (ATS) & OEM replacement components."
    }
  ]
};

/**
 * Helper utility to generate a formatted WhatsApp URL with pre-filled text
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = SITE_CONFIG.whatsappPhoneNumber.replace(/[^0-9]/g, '');
  const message = customMessage || SITE_CONFIG.whatsappMessages.heroQuote;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
