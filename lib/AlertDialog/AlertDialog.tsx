import React, { ReactNode } from "react";

export interface AlertDialogProps {
  children: ReactNode;
  className?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ children, className }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center bg-opacity-50">
      <div
        className={`${className} relative flex flex-col p-8 transition-all items-start justify-between gap-4 bg-primary text-primary border border-primary shadow-initial hover:shadow-hover rounded max-w-2xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default AlertDialog;
