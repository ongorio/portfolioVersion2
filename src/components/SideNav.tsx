"use client";

import { useEffect, useState } from "react";
import { IconToken } from "@/components/IconToken";
import { Button } from "@/components/ui/Button";
import { navIconMap, socialIconMap } from "@/lib/icon-map";
import type { NavIconKey } from "@/lib/icon-map";
import type { SocialLink } from "@/data/portfolio";

type NavItem = {
  id: string;
  label: string;
  iconKey: NavIconKey;
};

type SideNavProps = {
  name: string;
  initials: string;
  title: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
};

const SECTION_IDS = ["work", "experience", "certifications", "about", "contact"];

export function SideNav({ name, initials, title, navItems, socialLinks }: SideNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-10% 0px -55% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile sticky header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-surface/95 px-4 py-3 backdrop-blur lg:hidden">
        <p className="text-sm font-semibold tracking-wide text-accent">{name}</p>
        <nav aria-label="Section navigation" className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs transition focus-ring ${
                  isActive
                    ? "border-accent/60 bg-accent/8 text-accent"
                    : "border-white/15 text-white/70 hover:border-accent/60 hover:text-accent"
                }`}
              >
                <IconToken icon={navIconMap[item.iconKey]} size={12} />
                {item.label}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden bg-surface lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:gap-9 lg:border-r lg:border-white/10 lg:px-7 lg:py-14">
        {/* Identity */}
        <div>
          <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-accent/40 bg-accent/14">
            <span className="text-2xl font-extrabold tracking-tight text-accent">{initials}</span>
          </div>
          <p className="mt-4 text-lg font-bold text-white">{name}</p>
          <p className="mt-1 text-sm text-white/70">{title}</p>
        </div>

        {/* Nav links */}
        <nav aria-label="Section navigation" className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-3 text-sm transition-all duration-[var(--duration-default)] focus-ring ${
                  isActive
                    ? "translate-x-1 font-medium text-accent"
                    : "text-white/70 hover:translate-x-1 hover:text-accent"
                }`}
              >
                <IconToken icon={navIconMap[item.iconKey]} size={16} />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Social links */}
        <div className="mt-auto flex flex-col gap-3">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="social"
              href={link.href}
              target="_blank"
            >
              <IconToken icon={socialIconMap[link.iconKey]} size={15} />
              {link.label}
            </Button>
          ))}
        </div>

        {/* Footer */}
        <p className="font-mono text-[0.69rem] tracking-wide text-white/45">
          Mexico · GMT-6
        </p>
      </aside>
    </>
  );
}
