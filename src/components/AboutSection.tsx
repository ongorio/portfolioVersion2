import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillIconMap } from "@/lib/icon-map";
import type { EducationItem, SkillGroup } from "@/data/portfolio";

type AboutSectionProps = {
  about: string;
  skillGroups: SkillGroup[];
  education: EducationItem[];
};

export function AboutSection({ about, skillGroups, education }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell">
      <SectionHeader kicker="ABOUT ME" title="A bit of background" />

      <div className="mt-7 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.4fr_1fr]">

        {/* Left — prose + education */}
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-foreground/80">{about}</p>

          {education.map((item) => (
            <Card key={item.institution}>
              <p className="font-medium text-surface">{item.program}</p>
              <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
              <p className="mt-1 font-mono text-[0.69rem] uppercase tracking-[0.11em] text-accent">
                {item.period}
              </p>
            </Card>
          ))}
        </div>

        {/* Right — stack & tools */}
        <Card>
          <p className="section-kicker">STACK &amp; TOOLS</p>
          <div className="mt-4 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <p className="mb-2 text-[0.69rem] font-semibold uppercase tracking-[0.15em] text-foreground/50">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item.label}
                      label={item.label}
                      icon={skillIconMap[item.iconKey]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </section>
  );
}
