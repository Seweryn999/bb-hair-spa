import HeroSection from "../components/sections/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import SocialPostsSection from "../components/sections/SocialMedia";

export default function HomePage() {
  return (
    <>
      <link rel="icon" href="/logo/logob.svg" />
      <HeroSection />
      <AboutUs />
      <Services />
      <Testimonials />
      <SocialPostsSection />
    </>
  );
}
