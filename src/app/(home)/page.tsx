import HeroSection from "./_components/HeroSection";
import PartnersSection from "./_components/PartnersSection";
import FeatureSection from "./_components/FeatureSection";
import MarketingOneSection from "./_components/MarketingOneSection";
import MarketingTwoSection from "./_components/MarketingTwoSection";
import MarketingThreeSection from "./_components/MarketingThreeSection";
import PriceSection from "./_components/PriceSection";
import FooterSection from "./_components/FooterSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PartnersSection />

      <hr className="border-1" />

      <FeatureSection />
      <MarketingOneSection />
      <MarketingTwoSection />
      <MarketingThreeSection />
      <PriceSection />
      <FooterSection />
    </main>
  );
}
