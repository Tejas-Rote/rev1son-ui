import React from "react";

export interface FeaturedContentProps {
  children: React.ReactNode;
  className?: string;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex flex-col  ${className ? className : ""}`}>
      {children}
    </div>
  );
};
export default FeaturedContent;
