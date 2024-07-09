import React from "react";
export interface FeaturedActionsProps {
  children: React.ReactNode;
  className?: string;
}
const FeaturedActions: React.FC<FeaturedActionsProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${className ? className : ""} p-2`}>
      <div>{children}</div>
    </div>
  );
};

export default FeaturedActions;
