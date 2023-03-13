import { createContext, useContext } from "react";

export const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion compound components cannot be rendered outside the Accordion component"
    );
  }
  return context;
};
