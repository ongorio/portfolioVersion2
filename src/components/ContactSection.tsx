import { IconToken } from "@/components/IconToken";

import type { SocialLink } from "@/data/portfolio";

import { socialIconMap } from "@/lib/icon-map";

type ContactSectionProps = {
  socialLinks: SocialLink[];
};

export function ContactSection({ socialLinks }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">Let&apos;s Work Together</h2>

      <form className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-5" aria-label="Contact form">
        <label className="grid gap-2 text-sm text-white/80">
          Name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="rounded-md border border-white/15 bg-[#020202] px-3 py-2 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65]"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm text-white/80">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="rounded-md border border-white/15 bg-[#020202] px-3 py-2 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65]"
            placeholder="you@email.com"
          />
        </label>

        <label className="grid gap-2 text-sm text-white/80">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-md border border-white/15 bg-[#020202] px-3 py-2 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65]"
            placeholder="Tell me a bit about your project..."
          />
        </label>

        <button
          type="submit"
          className="w-fit rounded-full bg-[#16DB65] px-5 py-2 text-sm font-semibold text-[#020202] transition hover:bg-[#11b954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/75 underline decoration-white/20 underline-offset-4 transition hover:text-[#16DB65] hover:decoration-[#16DB65]"
          >
            <IconToken icon={socialIconMap[link.iconKey]} size={15} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
