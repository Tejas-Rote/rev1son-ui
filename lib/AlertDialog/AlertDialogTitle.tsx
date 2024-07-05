import React, { ReactNode } from "react";
export interface AlertDialogTitleProps {
  children: ReactNode;
  className?: string;
}
const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${className} text-primary text-lg font-bold `}>
      {children}
    </div>
  );
};

export default AlertDialogTitle;
