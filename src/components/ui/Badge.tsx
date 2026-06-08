import type { Icon } from "@phosphor-icons/react";
import { IconToken } from "@/components/IconToken";

type BadgeVariant = "skill" | "tech";

type BadgeProps = {
  variant?: BadgeVariant;
  icon?: Icon;
  label: string;
};

const base =
  "inline-flex items-center rounded-md border border-[var(--surface-chip-border)] bg-[var(--surface-chip)] px-2.5 py-1 text-xs font-medium text-foreground/80";

export function Badge({ variant = "skill", icon, label }: BadgeProps) {
  return (
    <span className={`${base} ${icon ? "gap-1.5" : ""}`}>
      {icon && variant === "skill" && (
        <IconToken icon={icon} size={13} color="var(--accent-2)" />
      )}
      {label}
    </span>
  );
}
