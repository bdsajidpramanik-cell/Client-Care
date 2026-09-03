'use client';
import { Navigation } from '@/components/landing/Navigation';
import { Hero } from '@/components/landing/Hero';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* বাকি সেকশন (TrustBar, AIEmployees, AIVoice, CRM, Automation, Knowledge, Intelligence, Analytics, Industries, HowItWorks, Pricing, FAQ, FinalCTA) পরে যোগ করা হবে, আপাতত Hero আর Footer থাকলেই হবে */}
      <Footer />
    </>
  );
}
