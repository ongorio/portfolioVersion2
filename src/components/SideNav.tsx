type NavItem = {
  id: string;
  label: string;
};

type SideNavProps = {
  name: string;
  title: string;
  navItems: NavItem[];
};

export function SideNav({ name, title, navItems }: SideNavProps) {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#020202]/95 px-4 py-3 backdrop-blur lg:hidden">
        <p className="text-sm font-semibold tracking-wide text-[#16DB65]">{name}</p>
        <nav aria-label="Section navigation" className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition hover:border-[#16DB65] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-white/10 lg:px-8 lg:py-14">
        <p className="text-2xl font-bold text-white">{name}</p>
        <p className="mt-1 text-sm text-white/70">{title}</p>
        <nav aria-label="Section navigation" className="mt-12 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-sm text-white/70 transition hover:translate-x-1 hover:text-[#16DB65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16DB65]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
