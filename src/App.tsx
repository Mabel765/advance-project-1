/**
 * =========================================================================
 * MABELIGHT GENERATOR & HEAVY EQUIPMENT SERVICES — MAIN APP
 * =========================================================================
 * 
 * Notice on Funnel Settings:
 * All business contact details, phone numbers, and WhatsApp numbers are configured
 * in /src/config.ts in ONE clearly labeled location.
 * =========================================================================
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { TheSolution } from './components/TheSolution';
import { WhatWeDo } from './components/WhatWeDo';
import { DiagnosticBuilder } from './components/DiagnosticBuilder';
import { WhyChooseMabelight } from './components/WhyChooseMabelight';
import { TheRealValue } from './components/TheRealValue';
import { WhoWeServe } from './components/WhoWeServe';
import { ProofAndCredibility } from './components/ProofAndCredibility';
import { CommonQuestions } from './components/CommonQuestions';
import { FinalClosingCTA } from './components/FinalClosingCTA';
import { Footer } from './components/Footer';
import { DirectInquiryModal } from './components/DirectInquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedModalService, setSelectedModalService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedModalService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-600 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Decorative Signature Editorial Moments */}
      <div className="fixed top-[35%] left-[-30px] w-64 h-1.5 bg-orange-600 rotate-[35deg] opacity-15 pointer-events-none z-0" />
      <div className="fixed bottom-[15%] right-[5%] w-32 h-32 border-2 border-orange-600 rounded-full opacity-5 pointer-events-none z-0" />
      
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Landing & Sales Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* The Problem Section + Downtime Risk Calculator */}
        <TheProblem onOpenQuoteModal={handleOpenQuoteModal} />

        {/* The Solution Section */}
        <TheSolution onOpenQuoteModal={handleOpenQuoteModal} />

        {/* What We Do (5 Core Services) */}
        <WhatWeDo onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Signature Creative Moment: Interactive Equipment & Symptom Triage */}
        <DiagnosticBuilder />

        {/* Why Choose Mabelight (4 Pillars) */}
        <WhyChooseMabelight />

        {/* The Real Value */}
        <TheRealValue />

        {/* Who We Serve (9 Industry Sectors) */}
        <WhoWeServe />

        {/* Proof & Credibility + What You Get */}
        <ProofAndCredibility onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Common Questions (FAQ) */}
        <CommonQuestions />

        {/* Final Closing Action Section */}
        <FinalClosingCTA onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Public-Only Clean Footer */}
      <Footer />

      {/* Interactive Quick Lead / Quote Modal */}
      <DirectInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedModalService}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
