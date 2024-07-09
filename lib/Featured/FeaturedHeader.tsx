import React, { ReactNode } from "react";

export interface FeaturedHeaderProps {
  children: ReactNode;
  className?: string;
  type: "icon" | "image";
  style?: "simple" | "highlighted";
}

const getCssForStyle = (style?: "simple" | "highlighted") => {
  switch (style) {
    case "simple":
      return "p-2  bg-transparent";
    case "highlighted":
      return "p-2 bg-highlight text-contrast rounded";
    default:
      return "";
  }
};

const getCssForType = (type?: "icon" | "image") => {
  switch (type) {
    case "icon":
      return "text-lg";
    case "image":
      return "bg-secondary-highlight";
    default:
      return "";
  }
};

const FeaturedHeader: React.FC<FeaturedHeaderProps> = ({
  children,
  className,
  type = "icon",
  style = "simple",
}) => {
  return (
    <div className={` ${className ? className : ""} `}>
      <div
        className={`p-2  inline-flex flex-col flex-initial  ${getCssForType(type)} ${getCssForStyle(style)}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FeaturedHeader;
