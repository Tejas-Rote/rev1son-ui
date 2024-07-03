import React, { ReactNode } from "react";
export interface ToastContentProsp {
  children: ReactNode;
}
const ToastContent: React.FC<ToastContentProsp> = ({ children }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

export default ToastContent;
