import React, { useCallback, useRef, useState } from "react";
import styles from "./CustomAccordionItem.module.scss";
import { ArrowIcon } from "../../icons";

function CustomAccordionItem(props) {
  const {
    accordionTitle,
    id,
    children,
    key,
    initialActive = null,
    onSetService,
    data,
  } = props;

  const [active, setActive] = useState(initialActive);
  const contentEl = useRef();

  const onChangeService = useCallback(() => {
    onSetService(data);
  }, [onSetService, data]);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);

    onChangeService();
  };

  return (
    <div key={key} className={styles.accordionWrapper}>
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
        <div className={styles.accordionBody}>{children}</div>
      </div>
    </div>
  );
}

export default CustomAccordionItem;
