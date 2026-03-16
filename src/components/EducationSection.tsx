import type { CertificationItem, EducationItem } from "@/data/portfolio";

type EducationSectionProps = {
  about: string;
  education: EducationItem[];
  certifications: CertificationItem[];
};

export function EducationSection({ about, education, certifications }: EducationSectionProps) {
  return (
    <section id="education" className="section-shell">
      <h2 className="section-title">Education & Certifications</h2>

      <p className="mt-6 leading-7 text-foreground/80">{about}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-surface-2/50 bg-surface-2/15 p-5">
          <h3 className="text-lg font-semibold text-foreground">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={`${item.institution}-${item.program}`}>
                <p className="font-medium text-foreground">{item.program}</p>
                <p className="text-sm text-foreground/70">{item.institution}</p>
                <p className="text-xs text-accent">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-surface-2/50 bg-surface-2/15 p-5">
          <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((certification) => (
              <li
                key={`${certification.name}-${certification.year}`}
                className="flex items-center justify-between rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-sm"
              >
                <span className="text-foreground/85">{certification.name}</span>
                <span className="ml-4 shrink-0 text-xs font-semibold tracking-[0.08em] text-accent">
                  {certification.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
