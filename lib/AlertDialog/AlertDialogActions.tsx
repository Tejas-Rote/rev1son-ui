import React, { ReactNode } from "react";
export interface AlertDialogActionsProps {
  children: ReactNode;
  className?: string;
}
const AlertDialogActions: React.FC<AlertDialogActionsProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${className}  flex flex-row w-full gap-4 items-center justify-end  `}
    >
      {children}
    </div>
  );
};
export default AlertDialogActions;
