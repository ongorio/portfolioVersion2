import type { ProjectItem } from "@/data/portfolio";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-shell">
      <p className="section-kicker">Projects</p>
      <h2 className="section-title">Selected Work</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(22,219,101,0.05)]"
          >
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-white/80">{project.problemSolved}</p>

            <div className="mt-4 rounded-lg border border-dashed border-white/20 bg-[#0D2818]/40 p-3 text-xs text-white/70">
              Visual: {project.visualNote}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/15 px-2 py-1 text-xs text-white/80">
                  {tech}
                </span>
              ))}
            </div>

            {/* <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-medium text-[#16DB65] underline-offset-4 transition hover:underline"
            >
              View project
            </a> */}
          </article>
        ))}
      </div>
    </section>
  );
}
