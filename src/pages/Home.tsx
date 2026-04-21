import { HeroSection } from '../features/home/components/HeroSection';
import { BenefitsSection } from '../features/home/components/BenefitsSection';
import { FeaturedPlans } from '../features/home/components/FeaturedPlans';
import { GallerySection } from '../features/home/components/GallerySection';
import { CTASection } from '../features/home/components/CTASection';
import { LocationSection } from '../features/home/components/LocationSection';
import { QuickContact } from '../features/home/components/QuickContact';

export function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturedPlans />
      <GallerySection />
      <CTASection />
      <LocationSection />
      <QuickContact />
    </>
  );
}
