'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { ForecastSection } from '@/components/home/ForecastSection';
import { BuildingSystemsSection } from '@/components/home/BuildingSystemsSection';
import { ProcessSequenceSection } from '@/components/home/ProcessSequenceSection';
import { EstimatorSection } from '@/components/home/EstimatorSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { BookCtaSection } from '@/components/home/BookCtaSection';
import { Footer } from '@/components/layout/Footer';
import { AboutUsModal } from '@/components/modals/AboutUsModal';
import { CareersModal } from '@/components/modals/CareersModal';
import { SampleReportModal } from '@/components/modals/SampleReportModal';
import { BookAuditModal } from '@/components/modals/BookAuditModal';

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).initBuiltsense?.();
    }
  }, []);

  return (
    <>
      <Navbar />
      <main id="top">
        <HeroSection />
        <ForecastSection />
        <BuildingSystemsSection />
        <ProcessSequenceSection />
        <EstimatorSection />
        <ProjectsSection />
        <BookCtaSection />
      </main>
      <Footer />
      <AboutUsModal />
      <CareersModal />
      <SampleReportModal />
      <BookAuditModal />
    </>
  );
}
