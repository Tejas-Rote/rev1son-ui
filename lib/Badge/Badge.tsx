import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "outlined" | "secondary" | "primary" | "highlighted";
  count?: number | boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

const getVariantStyles = (variant: string): string => {
  switch (variant) {
    case "outlined":
      return "bg-transparent border border-primary text-primary shadow-initial hover:shadow-hover transition-all";
    case "secondary":
      return "bg-secondary text-highlight shadow-initial hover:shadow-hover transition-all";
    case "primary":
      return "bg-contrast text-contrast shadow-initial hover:shadow-hover transition-all hover:bg-primary hover:text-primary border border-primary";
    case "highlighted":
      return "bg-highlight text-contrast shadow-initial hover:shadow-hover transition-all hover:bg-primary hover:text-primary border border-primary hover:border-highlight";
    default:
      return "";
  }
};

const getRoundedClass = (rounded: string): string => {
  switch (rounded) {
    case "none":
      return "rounded-none";
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "full":
      return "rounded-full";
    default:
      return "rounded-full";
  }
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "primary",
  count,
  rounded = "full",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-3 py-1 text-sm";
  const variantStyles = getVariantStyles(variant);
  const roundedClass = getRoundedClass(rounded);

  return (
    <span
      className={`${baseStyles} ${variantStyles} ${roundedClass} ${className} relative`}
    >
      {children}
      {count !== undefined && (
        <span
          className={`absolute top-0 right-0 transform bg-highlight text-white ${roundedClass} flex items-center justify-center text-xs1 translate-x-1/2 -translate-y-1/2   ${typeof count === "boolean" ? "w-3 h-3" : "w-4 h-4 "} `}
        >
          {typeof count === "boolean" ? "" : count}
        </span>
      )}
    </span>
  );
};

export default Badge;
