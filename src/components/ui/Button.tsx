import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "social";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  target?: string;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-surface hover:bg-accent-2",
  secondary:
    "border border-accent/50 text-accent hover:border-accent hover:bg-accent/5",
  social:
    "border border-accent/40 bg-surface text-accent-light hover:bg-surface-2 hover:border-accent/70",
};

const base =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-[var(--duration-default)] focus-ring";

const socialBase =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors duration-[var(--duration-default)] focus-ring";

export function Button({
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  children,
  target = "_self",
}: ButtonProps) {
  const classes = `${variant === "social" ? socialBase : base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
