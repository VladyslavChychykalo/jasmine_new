import React from "react";
import styles from "../Accordion.module.scss";

const AccordionSection = ({ children }) => {
  return (
    <div className={styles.accordionSection}>
      {children}
    </div>
  );
};

export default AccordionSection;
