import React from "react";

export interface ToastTitleProps {
  children: React.ReactNode;
}
const ToastTitle: React.FC<ToastTitleProps> = ({ children }) => {
  return <div className="font-mono font-bold text-sm">{children}</div>;
};

export default ToastTitle;
