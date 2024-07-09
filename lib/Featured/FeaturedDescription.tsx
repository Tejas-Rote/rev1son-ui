import React from "react";
export interface FeaturedDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const FeaturedDescription: React.FC<FeaturedDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`p-2 ${className ? className : ""}  text-base  text-justify  `}
    >
      {children}
    </div>
  );
};

export default FeaturedDescription;
