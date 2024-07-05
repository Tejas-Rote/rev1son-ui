import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  variant?:
    | "outlined"
    | "secondary"
    | "link"
    | "primary"
    | "outlined-highlight"
    | "primary-highlight";
}
const getVariantStyles = (variant: string): string => {
  switch (variant) {
    case "outlined":
      return "bg-transparent border border-primary text-primary shadow-initial hover:shadow-hover transition-all";
    case "secondary":
      return "bg-secondary text-highlight shadow-initial hover:shadow-hover transition-all";
    case "primary":
      return "bg-contrast text-contrast shadow-initial hover:shadow-hover transition-all hover:bg-primary hover:text-primary border border-primary";
    case "primary-highlight":
      return "bg-highlight text-contrast shadow-initial hover:shadow-hover transition-all hover:bg-primary hover:text-primary border border-primary hover:border-highlight";
    case "outlined-highlight":
      return "bg-transparent border border-highlight text-primary hover:bg-highlight shadow-initial hover:shadow-hover transition-all shadow-initial hover:shadow-hover transition-all";
    case "link":
      return "bg-contrast text-contrast shadow-initial hover:shadow-hover transition-all hover:bg-primary hover:text-primary border border-primary hover:underline";

    default:
      return "";
  }
};
export const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
}: ButtonProps): ReactNode => {
  const baseStyles = "flex flex-row gap-2 p-2 rounded text-sm";
  const variantStyles = getVariantStyles(variant);

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};
