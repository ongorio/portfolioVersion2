import { IconToken } from "@/components/IconToken";

import type { SocialLink } from "@/data/portfolio";

import { socialIconMap } from "@/lib/icon-map";

type HeroSectionProps = {
  name: string;
  title: string;
  valueProposition: string;
  socialLinks: SocialLink[];
};

export function HeroSection({
  name,
  title,
  valueProposition,
  socialLinks,
}: HeroSectionProps) {
  return (
    <section id="about-me" className="section-shell">
      <h1 className="mt-2 text-3xl font-bold text-surface sm:text-5xl">{name}</h1>
      <p className="mt-3 text-xl text-accent">{title}</p>
      <p className="mt-6 max-w-2xl text-base leading-7 text-surface/80 sm:text-lg">{valueProposition}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-4 py-2 text-sm text-[#d9ffe8] transition hover:border-accent hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65]"
          >
            <IconToken icon={socialIconMap[link.iconKey]} size={16} color="#9ce6bb" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>

    </section>
  );
}
