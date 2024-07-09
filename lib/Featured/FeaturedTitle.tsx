import React from "react";
export interface FeaturedTitleProps {
  children: React.ReactNode;
  className?: string;
}

const FeaturedTitle: React.FC<FeaturedTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className={` p-2 ${className ? className : ""}  font-bold text-xl  `}>
      {children}
    </div>
  );
};

export default FeaturedTitle;
