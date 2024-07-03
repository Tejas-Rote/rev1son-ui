import React, { ReactNode, useEffect } from "react";
// import { MdClose } from "react-icons/md";
export interface ToastProps {
  children: ReactNode;
  duration: number;
  direction: "top" | "bottom" | "left" | "right";
  onClose: () => void;
  visible: boolean;
}
const Toast: React.FC<ToastProps> = ({
  children,
  duration,
  direction,
  onClose,
  visible,
}) => {
  // const [visible, setVisible] = useState(initialVisible);
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, visible, onClose]);

  const getDirectionClasses = () => {
    switch (direction) {
      case "bottom":
        return visible ? "translate-y-0" : "translate-y-full";
      case "top":
        return visible ? "translate-y-0" : "-translate-y-full";
      case "left":
        return visible ? "translate-x-0" : "-translate-x-full";
      case "right":
        return visible ? "translate-x-0" : "translate-x-full";
      default:
        return "";
    }
  };

  const getPositionClasses = () => {
    switch (direction) {
      case "bottom":
        return "fixed bottom-0 right-0 transform -translate-x-1/2";
      case "top":
        return "fixed top-0 left-1/2 transform -translate-x-1/2";
      case "left":
        return "fixed top-1/2 left-0 transform -translate-y-1/2";
      case "right":
        return "fixed top-1/2 right-0 transform -translate-y-1/2";
      default:
        return "";
    }
  };

  return (
    <div
      className={` flex m-4 flex-row flex-none p-2 bg-blue text-primary transition-all shadow-initial hover:shadow-hover rounded font-mono border-primary border gap-4 transform ${getDirectionClasses()} ${getPositionClasses()}`}
    >
      <div className="flex flex-row flex-none p-2  font-mono gap-8">
        {children}
      </div>
      {/* <div> */}
      {/*   <button onClick={onClose}> */}
      {/*     <MdClose className="text-lg" /> */}
      {/*   </button> */}
      {/* </div> */}
    </div>
  );
};

export default Toast;
