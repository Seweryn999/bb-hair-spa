"use client";

import HeroSection from "../components/sections/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import SocialPostsSection from "../components/sections/SocialMedia";

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <link rel="icon" href={`${basePath}/logo/logob.svg`} />
      <HeroSection />
      <AboutUs />
      <Services />
      <Testimonials />
      <SocialPostsSection />
    </>
  );
}
