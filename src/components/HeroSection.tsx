import { IconToken } from "@/components/IconToken";

import type { SkillGroup, SocialLink } from "@/data/portfolio";

import { categoryIconMap, skillIconMap, socialIconMap } from "@/lib/icon-map";

type HeroSectionProps = {
  name: string;
  title: string;
  valueProposition: string;
  skillGroups: SkillGroup[];
  socialLinks: SocialLink[];
};

export function HeroSection({
  name,
  title,
  valueProposition,
  skillGroups,
  socialLinks,
}: HeroSectionProps) {
  return (
    <section id="introduction" className="section-shell">
      <p className="section-kicker">Introduction</p>
      <h1 className="mt-2 text-3xl font-bold text-white sm:text-5xl">{name}</h1>
      <p className="mt-3 text-xl text-[#16DB65]">{title}</p>
      <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{valueProposition}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#16DB65]/40 bg-[#0D2818] px-4 py-2 text-sm text-[#d9ffe8] transition hover:border-[#16DB65] hover:bg-[#04471C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65]"
          >
            <IconToken icon={socialIconMap[link.iconKey]} size={16} color="#9ce6bb" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {categoryIconMap[group.category] ? (
                <IconToken icon={categoryIconMap[group.category]} size={14} color="#16DB65" />
              ) : null}
              <span>{group.category}</span>
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/85"
                >
                  <IconToken icon={skillIconMap[item.iconKey]} size={14} color="#16DB65" />
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
