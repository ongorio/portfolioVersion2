import type { ExperienceItem } from "@/data/portfolio";

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-shell">
      <p className="section-kicker">Experience</p>
      <h2 className="section-title">Professional Timeline</h2>

      <div className="mt-8 space-y-6 border-l border-white/15 pl-5">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.start}`} className="relative">
            <span className="absolute -left-[1.45rem] top-1 h-3 w-3 rounded-full border border-[#16DB65] bg-[#020202]" />
            <p className="text-sm text-[#16DB65]">
              {experience.start} - {experience.end}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">{experience.title}</h3>
            <p className="text-white/70">{experience.company}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
