import type { Icon, IconWeight } from "@phosphor-icons/react";

type IconTokenProps = {
  icon: Icon;
  size?: number;
  color?: string;
  weight?: IconWeight;
  className?: string;
  ariaHidden?: boolean;
};

export function IconToken({
  icon: IconComponent,
  size = 18,
  color = "currentColor",
  weight = "regular",
  className,
  ariaHidden = true,
}: IconTokenProps) {
  return (
    <IconComponent
      size={size}
      color={color}
      weight={weight}
      className={className}
      aria-hidden={ariaHidden}
      focusable={false}
    />
  );
}
