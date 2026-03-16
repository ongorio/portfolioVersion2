import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";

import { SideNav } from "@/components/SideNav";

import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
        <SideNav name={portfolioData.name} title={portfolioData.title} navItems={portfolioData.navItems} />

        <main className="px-4 py-8 sm:px-6 lg:px-10 lg:py-14">
          <HeroSection
            name={portfolioData.name}
            title={portfolioData.title}
            valueProposition={portfolioData.valueProposition}
            skillGroups={portfolioData.skillGroups}
            socialLinks={portfolioData.socialLinks}
          />
          <ExperienceSection experiences={portfolioData.experiences} />
          <ProjectsSection projects={portfolioData.projects} />
          <EducationSection
            about={portfolioData.about}
            education={portfolioData.education}
            certifications={portfolioData.certifications}
          />
          {/* <ContactSection socialLinks={portfolioData.socialLinks} /> */}
        </main>
      </div>
    </div>
  );
}
