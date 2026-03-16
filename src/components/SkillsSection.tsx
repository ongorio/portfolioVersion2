import { IconToken } from "@/components/IconToken";

import type { SkillGroup } from "@/data/portfolio";

import { categoryIconMap, skillIconMap } from "@/lib/icon-map";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-shell">
      {/* <h2 className="section-title">Technical Toolkit</h2> */}

      <div className="mt-8 space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              {categoryIconMap[group.category] ? (
                <IconToken icon={categoryIconMap[group.category]} size={14} color="var(--accent)" />
              ) : null}
              <span>{group.category}</span>
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-surface-2/50 bg-surface-2/15 px-3 py-1 text-xs font-medium text-surface/85"
                >
                  <IconToken icon={skillIconMap[item.iconKey]} size={14} color="var(--accent)" />
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
