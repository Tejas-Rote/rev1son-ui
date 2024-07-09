import React, { useRef, useEffect, useState } from "react";

export interface AccordionContentProps {
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isOpen,
  className,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      style={{ maxHeight: height }}
      className={`${className ? className : ""} overflow-hidden transition-max-height duration-300 ease-in-out`}
    >
      <div className="p-4">{children}</div>
    </div>
  );
};

export default AccordionContent;
