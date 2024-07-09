import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
export interface AccordionHeaderProps {
  title: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  title,
  isOpen,
  onToggle,
  className,
}) => {
  return (
    <div
      className={`${className ? className : ""} flex flex-row w-full items-center justify-between gap-12 cursor-pointer `}
      onClick={onToggle}
    >
      <h3 className="font-bold">{title}</h3>
      <MdKeyboardArrowDown
        className={`${isOpen ? "" : "rotate-180"} transition-all  `}
      />
    </div>
  );
};

export default AccordionHeader;
