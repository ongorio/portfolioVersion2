import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { skillIconMap } from "@/lib/icon-map";
import type { SkillGroup } from "@/data/portfolio";

type HeroSectionProps = {
  name: string;
  title: string;
  valueProposition: string;
  skillGroups: SkillGroup[];
};

export function HeroSection({ name, title, valueProposition, skillGroups }: HeroSectionProps) {
  const parts = name.split(" ");
  const first = parts[0];
  const middle = parts.slice(1, -1).join(" ");
  const last = parts[parts.length - 1];

  return (
    <section id="top" className="section-shell">
      <p className="section-kicker">PORTFOLIO · {new Date().getFullYear()}</p>

      <h1 className="mt-2 text-[clamp(3rem,6vw,5rem)] font-bold leading-tight tracking-tight text-surface">
        {first}{" "}
        {middle && <span className="text-accent">{middle}</span>}{" "}
        {last}
      </h1>

      <p className="mt-2 text-sm font-medium text-muted">{title}</p>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/75">
        {valueProposition}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="primary" href="#work">See the work</Button>
        <Button variant="secondary" href="#contact">Get in touch</Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-2">
          · Available for work
        </span>
        {skillGroups.flatMap((group) =>
          group.items.map((item) => (
            <Badge
              key={`${group.category}-${item.label}`}
              label={item.label}
              icon={skillIconMap[item.iconKey]}
            />
          ))
        )}
      </div>
    </section>
  );
}
