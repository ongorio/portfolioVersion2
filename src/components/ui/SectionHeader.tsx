type SectionHeaderProps = {
  kicker: string;
  title: string;
};

export function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
    </>
  );
}
