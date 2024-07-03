import React, { ReactNode } from "react";

export interface ToastMsgProps {
  children: ReactNode;
}

const ToastMsg: React.FC<ToastMsgProps> = ({ children }) => {
  return <div className="font-normal text-xs">{children}</div>;
};

export default ToastMsg;
