import React, { ReactElement } from "react";
import styles from "./Accordion.module.css";
import withAccordionState from "./withAccordionState";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";
type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean; // These props will be injected by the HOC
  toggleOpen?: () => void; // These props will be injected by the HOC
};

const AccordionItem = ({
  children,
  className,
  isOpen,
  toggleOpen,
}: AccordionItemProps) => {
  return (
    <div
      className={`${styles.accordionItem} ${className || ""}`}
      onClick={toggleOpen}
    >
      {/* {children} */}

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === AccordionButton) {
            // return React.cloneElement(child, { onClick: toggleOpen });
            return React.cloneElement(
              child as ReactElement<
                React.ComponentProps<typeof AccordionButton>
              >,
              { onClick: toggleOpen }
            );
          }
          if (child.type === AccordionContent) {
            return React.cloneElement(
              child as ReactElement<
                React.ComponentProps<typeof AccordionContent>
              >,
              { isOpen }
            );
          }
        }
        return child;
      })}
    </div>
  );
};

export default withAccordionState(AccordionItem);
