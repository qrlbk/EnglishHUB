import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { CoursesGrid } from "@/components/courses-grid";
import { TeachersSection } from "@/components/teachers-section";
import { StatsBar } from "@/components/stats-bar";
import { Testimonials } from "@/components/testimonials";
import { PricesSection } from "@/components/prices-section";
import { AboutSection } from "@/components/about-section";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="app-shell-main">
        <Hero />
        <CoursesGrid />
        <TeachersSection />
        <StatsBar />
        <Testimonials />
        <PricesSection />
        <AboutSection />
        <FinalCta />
        <SiteFooter />
      </main>
      <MobileStickyCta />
      <MobileBottomNav />
    </>
  );
}
