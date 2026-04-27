import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { LevelTestFunnel } from "@/components/level-test-funnel";
import { CoursesGrid } from "@/components/courses-grid";
import { CasesSection } from "@/components/cases-section";
import { Testimonials } from "@/components/testimonials";
import { TeachersSection } from "@/components/teachers-section";
import { StatsBar } from "@/components/stats-bar";
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
        <LevelTestFunnel />
        <CoursesGrid />
        <CasesSection />
        <Testimonials />
        <TeachersSection />
        <StatsBar />
        <AboutSection />
        <FinalCta />
        <SiteFooter />
      </main>
      <MobileStickyCta />
      <MobileBottomNav />
    </>
  );
}
