import type { ReactNode } from "react";

type CardVariant = "standard" | "elevated" | "interactive";

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<CardVariant, string> = {
  standard: "",
  elevated: "shadow-[var(--shadow-md)]",
  interactive:
    "group cursor-pointer transition-[border-color,box-shadow] duration-[var(--duration-default)] hover:border-surface-2/80 hover:shadow-[var(--shadow-md)]",
};

const base =
  "rounded-lg border border-[var(--surface-card-border)] bg-[var(--surface-card)] p-5";

export function Card({ variant = "standard", className = "", children }: CardProps) {
  return (
    <div className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
