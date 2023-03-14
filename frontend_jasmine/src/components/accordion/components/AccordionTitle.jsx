import React from "react";
import { useAccordionContext } from "../useAccordionContext";
import { ArrowIcon } from "../../../icons";
import styles from "../Accordion.module.scss";

const AccordionTitle = ({ children, id, data, isArrow = true }) => {
  const { activeValue, handleToggle } = useAccordionContext();

  return (
    <div
      className={`${styles.accordionHeader} ${
        activeValue === id ? styles.active : ""
      }`}
      onClick={() => handleToggle(id, data)}
    >
      <h5 className={styles.accodrionTitle}>{children}</h5>
      {isArrow && <ArrowIcon className={styles.arrrowIcon} />}
    </div>
  );
};

export default AccordionTitle;
