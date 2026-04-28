import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { LevelTestFunnel } from "@/components/level-test-funnel";
import { CoursesGrid } from "@/components/courses-grid";
import { CasesSection } from "@/components/cases-section";
import { TeachersSection } from "@/components/teachers-section";
import { AboutSection } from "@/components/about-section";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ReadingProgress } from "@/components/reading-progress";

export default function Home() {
  return (
    <>
      <ReadingProgress />
      <SiteHeader />
      <main className="app-shell-main">
        <Hero />
        <LevelTestFunnel />
        <CoursesGrid />
        <CasesSection />
        <TeachersSection />
        <AboutSection />
        <FinalCta />
        <SiteFooter />
      </main>
      <MobileStickyCta />
      <MobileBottomNav />
    </>
  );
}
