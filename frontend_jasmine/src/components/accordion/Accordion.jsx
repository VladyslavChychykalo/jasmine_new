import React, { useCallback, useState, useEffect } from "react";
import { AccordionContext } from "./useAccordionContext";

import AccordionTitle from "./components/AccordionTitle";
import styles from "./Accordion.module.scss";
import AccordionPanel from "./components/AccordionPanel";
import AccordionSection from "./components/AccordionSection";

const Accordion = (props) => {
  const { children, initialActive = null, onSetService } = props;

  const [activeValue, setActiveValue] = useState(initialActive);

  useEffect(() => {
    setActiveValue(initialActive);
  }, [initialActive]);

  const onChangeService = useCallback(
    (data) => {
      onSetService(data);
    },
    [onSetService]
  );

  const handleToggle = (index, data) => {
    setActiveValue(activeValue === index ? null : index);

    onChangeService(data);
  };

  const contextValue = { handleToggle, activeValue };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={styles.accordionWrapper}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Title = AccordionTitle;
Accordion.Panel = AccordionPanel;
Accordion.Section = AccordionSection;

export default Accordion;
