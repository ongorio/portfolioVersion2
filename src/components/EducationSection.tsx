import type { EducationItem } from "@/data/portfolio";

type EducationSectionProps = {
  about: string;
  education: EducationItem[];
  certifications: string[];
};

export function EducationSection({ about, education, certifications }: EducationSectionProps) {
  return (
    <section id="education" className="section-shell">
      <p className="section-kicker">Education</p>
      <h2 className="section-title">About, Education and Certifications</h2>

      <p className="mt-6 leading-7 text-white/80">{about}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold text-white">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={`${item.institution}-${item.program}`}>
                <p className="font-medium text-white">{item.program}</p>
                <p className="text-sm text-white/70">{item.institution}</p>
                <p className="text-xs text-[#16DB65]">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold text-white">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((certification) => (
              <li key={certification} className="text-sm text-white/80">
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
