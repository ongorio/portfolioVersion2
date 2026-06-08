import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ExperienceItem } from "@/data/portfolio";

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader kicker="THE PATH SO FAR" title="Experience" />

      <div className="relative mt-8 space-y-6">
        <span
          className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-[2px] bg-surface-2/40"
          aria-hidden="true"
        />

        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.start}`}
            className="relative pl-9"
          >
            <span className="absolute left-0 top-[22px] h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--background)]" />

            <Card variant="elevated">
              <p className="font-mono text-[0.69rem] uppercase tracking-[0.11em] text-accent">
                {experience.start} — {experience.end}
              </p>
              <h3 className="mt-1 text-[1.125rem] font-semibold text-surface">
                {experience.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted">{experience.company}</p>
              {experience.body && (
                <p className="mt-3 text-sm leading-6 text-foreground/75">{experience.body}</p>
              )}
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
