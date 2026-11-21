import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import {
  ArchitectureSection,
  DeploymentSection,
  ProvidersSection,
  ServicesSection,
} from "./sections/CloudPlatformSections";
import { HeroSection, OverviewSection } from "./sections/CloudOverview";
import {
  FAQSection,
  GettingStartedSection,
  InteractiveToolsSection,
  KnowledgeCheckSection,
} from "./sections/LearningSections";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-slate-800">
      <SiteHeader />
      <main>
        <HeroSection />
        <OverviewSection />
        <ServicesSection />
        <ArchitectureSection />
        <DeploymentSection />
        <ProvidersSection />
        <InteractiveToolsSection />
        <KnowledgeCheckSection />
        <GettingStartedSection />
        <FAQSection />
      </main>
      <SiteFooter />
    </div>
  );
}
