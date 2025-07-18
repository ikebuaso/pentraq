import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { PricingPreviewSection } from "@/components/sections/pricing-preview-section";
import { BlogHighlightsSection } from "@/components/sections/blog-highlights-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <WhyChooseSection />
      <PricingPreviewSection />
      <BlogHighlightsSection />
      <FinalCtaSection />
    </MainLayout>
  );
};

export default Index;
