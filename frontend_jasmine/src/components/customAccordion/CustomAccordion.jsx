import React, { useRef, useState } from "react";
import styles from "./CustomAccordion.module.scss";
import { ArrowIcon } from "../../icons";

function CustomAccordion(props) {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  const { accordionTitle, id, children } = props;

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className={styles.accordionWrapper}>
      <div
        className={`${styles.accordionHeader} ${
          active === id ? styles.active : ""
        }`}
        onClick={() => handleToggle(id)}
      >
        <h5 className={styles.accodrionTitle}>{accordionTitle}</h5>
        <ArrowIcon className={styles.arrrowIcon} />
      </div>
      <div
        ref={contentEl}
        className={`${styles.accodrionCollapse} ${
          active === id ? styles.show : ""
        }`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className={styles.accordionBody}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomAccordion;
