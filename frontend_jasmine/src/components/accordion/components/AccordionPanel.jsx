import React, { useRef } from "react";
import { useAccordionContext } from "../useAccordionContext";
import styles from "../Accordion.module.scss";

const AccordionPanel = ({ children, id }) => {
  const contentEl = useRef();
  const { activeValue } = useAccordionContext();

  return (
    <div
      ref={contentEl}
      className={`${styles.accodrionCollapse} ${
        activeValue === id ? styles.show : ""
      }`}
      style={
        activeValue === id
          ? {
              height: contentEl?.current?.scrollHeight
                ? contentEl?.current?.scrollHeight
                : "0px",
            }
          : { height: "0px" }
      }
    >
      <div className={styles.accordionBody}>{children}</div>
    </div>
  );
};

export default AccordionPanel;
