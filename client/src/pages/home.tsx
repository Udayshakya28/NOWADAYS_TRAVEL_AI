import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import QuickStartWidget from "@/components/quick-start-widget";
import ItineraryBuilder from "@/components/itinerary-builder";
import DestinationShowcase from "@/components/destination-showcase";
import FeatureComparison from "@/components/feature-comparison";
import IntegrationSection from "@/components/integration-section";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickStartWidget />
      <ItineraryBuilder />
      <DestinationShowcase />
      <FeatureComparison />
      <IntegrationSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
