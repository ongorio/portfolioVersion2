import { FolderSimpleIcon } from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconToken } from "@/components/IconToken";
import { CleanupCounterThumbnail } from "@/components/ui/CleanupCounterThumbnail";
import { FunnelThumb } from "@/components/ui/FunnelThumb";
import type { ProjectItem } from "@/data/portfolio";
import Image from "next/image";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="work" className="section-shell">
      <SectionHeader kicker="SELECTED WORK" title="Projects" />

      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} variant="elevated">
            <div className="mb-4 flex h-[160px] items-center justify-center overflow-hidden rounded-md border border-dashed border-surface-2/30 bg-surface-2/10">
              {project.thumbnailVariant === "cleanup-counter" ? (
                <CleanupCounterThumbnail />
              ) : project.thumbnailVariant === "funnel" ? (
                <FunnelThumb />
              ) : project.thumbnailImage ? (
                <Image src={project.thumbnailImage} alt={project.thumbnailImageAlt || "Project Thumbnail"} width={600} height={400} className="h-full w-full object-cover object-top" />
              ) : (
                <IconToken icon={FolderSimpleIcon} size={24} color="var(--accent-mid)" />
              )}
            </div>

            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[1.125rem] font-semibold text-surface">{project.name}</h3>
            </div>

            <p className="mb-3.5 mt-2 text-sm leading-6 text-foreground/75">
              {project.problemSolved}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="tech" label={tech} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
