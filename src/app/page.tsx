import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedServices from "@/components/sections/FeaturedServices";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LatestProducts from "@/components/sections/LatestProducts";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedServices />
      <FeaturedProjects />
      <LatestProducts />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
