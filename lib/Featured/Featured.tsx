import React from "react";
export interface FeaturedProps {
  className?: string;
  children: React.ReactNode;
  type?: "simple" | "card";
  highlight?: boolean;
}

const getStylesForType = (type?: "simple" | "card") => {
  switch (type) {
    case "simple":
      return "bg-primary text-primary shadow-none";
    case "card":
      return " bg-primary text-primary shadow-initial border border-primary rounded hover:shadow-hover";
    default:
      return "";
  }
};
const baseStyles =
  "flex flex-col p-6 transition-all items-start justify-around ";
const highlightStyle = "bg-contrast text-contrast border border-highlight";
const Featured: React.FC<FeaturedProps> = ({
  children,
  className,
  type = "card",
  highlight,
}) => {
  return (
    <div
      className={`${className} ${getStylesForType(type)}  ${baseStyles} ${highlight ? highlightStyle : ""}  w-full `}
    >
      {children}
    </div>
  );
};
export default Featured;
