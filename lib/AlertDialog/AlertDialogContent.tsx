import React, { ReactNode } from "react";

export interface AlertDialogContentProps {
  children: ReactNode;
  className?: string;
}

const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  children,
  className,
}) => {
  return <div className={`${className} text-justify`}>{children}</div>;
};
export default AlertDialogContent;
