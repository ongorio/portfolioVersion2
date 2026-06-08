import { SealCheckIcon } from "@phosphor-icons/react/ssr";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CertificationItem } from "@/data/portfolio";

type CertificationsSectionProps = {
  certifications: CertificationItem[];
};

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeader kicker="CREDENTIALS" title="Certifications" />

      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.name} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
              <SealCheckIcon weight="bold" size={20} className="text-accent" aria-hidden />
            </div>

            <div>
              <p className="text-[1.125rem] font-semibold leading-snug text-surface">
                {cert.name}
              </p>
              <p className="mt-0.5 text-sm text-muted">{cert.org}</p>
              <p className="mt-1 font-mono text-[0.69rem] uppercase tracking-[0.11em] text-accent">
                {cert.year}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
