import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { SideNav } from "@/components/SideNav";

import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
        <SideNav
          name={portfolioData.name}
          initials={portfolioData.initials}
          title={portfolioData.title}
          navItems={portfolioData.navItems}
          socialLinks={portfolioData.socialLinks}
        />

        <main className="px-4 py-8 sm:px-6 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-[880px]">
          <HeroSection
            name={portfolioData.name}
            title={portfolioData.title}
            valueProposition={portfolioData.valueProposition}
            skillGroups={portfolioData.skillGroups}
          />
          <ProjectsSection projects={portfolioData.projects} />
          <ExperienceSection experiences={portfolioData.experiences} />
          <CertificationsSection certifications={portfolioData.certifications} />
          <AboutSection
            about={portfolioData.about}
            skillGroups={portfolioData.skillGroups}
            education={portfolioData.education}
          />
          <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
}
