import React from "react";
import styles from "../Accordion.module.scss";

const AccordionSection = ({ children, key }) => {
  return (
    <div className={styles.accordionSection} key={key}>
      {children}
    </div>
  );
};

export default AccordionSection;
