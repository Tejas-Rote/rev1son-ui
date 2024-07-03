import React from "react";
export interface ToastButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const ToastButton: React.FC<ToastButtonProps> = ({ children, onClick }) => {
  return (
    <div className="inline-flex items-center justify-center">
      <button
        className="inline-flex  flex-shrink-0 items-center justify-center bg-primary text-highlight p-2 rounded txt-primary hover:bg-hover hover:text-hover transition-all"
        onClick={onClick}
      >
        <p className="text-lg">{children}</p>
      </button>
    </div>
  );
};
export default ToastButton;
