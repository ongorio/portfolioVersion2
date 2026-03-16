import type { ExperienceItem } from "@/data/portfolio";

type ExperienceSectionProps = {
  experiences: ExperienceItem[];
};

const splitDate = (value: string) => {
  const parts = value.trim().split(" ");

  if (parts.length < 2) {
    return { primary: value, secondary: "" };
  }

  const secondary = parts.pop() ?? "";
  return { primary: parts.join(" "), secondary };
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-shell">
      <h2 className="section-title">Professional Experience</h2>

      <div className="relative mt-10 space-y-4 md:space-y-6">
        <span className="pointer-events-none absolute bottom-0 left-3 top-0 w-[2px] bg-surface-2/50 md:left-1/2 md:-translate-x-1/2" />

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;
          const startDate = splitDate(experience.start);
          const endDate = splitDate(experience.end);

          return (
            <article
              key={`${experience.company}-${experience.start}`}
              className={`relative pl-10 md:pl-0 ${isLeft ? "md:pr-[calc(50%+1.75rem)]" : "md:pl-[calc(50%+1.75rem)]"}`}
            >
              <span className="absolute left-3 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-surface-2/50 bg-accent shadow-[0_0_0_4px_foreground] md:left-1/2" />

              <div
                className={`relative overflow-visible rounded-xl border border-surface-2/50 bg-surface-2/15 shadow-[0_10px_24px_rgba(2,2,2,0.18)] ${
                  isLeft ? "md:flex md:flex-row" : "md:flex md:flex-row-reverse"
                }`}
              >
                <span className="absolute -left-2 top-5 h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-surface-2/15 md:hidden" />
                {isLeft ? (
                  <span className="absolute -right-2 top-5 hidden h-0 w-0 border-y-8 border-l-8 border-y-transparent border-l-surface-2/15 md:block" />
                ) : (
                  <span className="absolute -left-2 top-5 hidden h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-surface-2/15 md:block" />
                )}

                <div className="w-full p-3.5 md:p-4">
                  <h3 className="text-base font-bold leading-5 text-foreground">{experience.title}</h3>
                  <div className="mt-1.5 flex justify-end text-right text-[0.69rem] font-semibold uppercase tracking-[0.11em] text-accent">
                    {/* <span>{startDate.primary}</span> */}
                    {startDate.secondary ? (
                      <span className="ml-1 text-[0.63rem] tracking-[0.12em] text-surface-2/70">{startDate.secondary}</span>
                    ) : null}
                    <span className="mx-1.5 text-surface-2/70">-</span>
                    <span>{endDate.primary}</span>
                    {endDate.secondary ? (
                      <span className="ml-1 text-[0.63rem] tracking-[0.12em] text-surface-2/70">{endDate.secondary}</span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm text-surface-2/80">{experience.company}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
