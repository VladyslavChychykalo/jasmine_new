import React from "react";
import styles from "../Accordion.module.scss";

const AccordionSection = ({ children, className }) => {
  return (
    <div className={`${styles.accordionSection} ${className}`}>{children}</div>
  );
};

export default AccordionSection;
