
import React from 'react';
import Hero from '@/components/Hero';
import FeatureHighlights from '@/components/FeatureHighlights';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import ProblemSolution from '@/components/ProblemSolution';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-green-50">
      <Hero />
      <FeatureHighlights />
      <ProductShowcase />
      <Benefits />
      <ProblemSolution />
      <SocialProof />
      <HowItWorks />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
