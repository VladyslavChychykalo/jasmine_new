/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const usePagesCounter = (props) => {
  const [priceList, setPriceList] = useState([]);
  const [label, setLabel] = useState({ name: "", price: "" });

  const { dependencies = [], elementsPerPage, currentPrice } = props;

  const depArr = [...dependencies];

  useEffect(() => {
    const numberOfPages = Number(elementsPerPage);
    const filterdArrLabel = currentPrice?.services?.filter(
      (el) => el.specialLabel === "special"
    );

    if (filterdArrLabel?.length) {
      setLabel({
        name: filterdArrLabel[0].name,
        price: filterdArrLabel[0].price,
      });
    } else {
      setLabel({
        name: "",
        price: "",
      });
    }

    const filteredArrayWithoutLabel = currentPrice?.services?.filter(
      (el) => el.specialLabel === "common"
    );

    const fullNumberOfLists = Math.ceil(
      filteredArrayWithoutLabel?.length / numberOfPages
    );

    const priceListArr = [];

    for (let i = 0; i < fullNumberOfLists; i++) {
      const el = filteredArrayWithoutLabel.slice(
        i * numberOfPages,
        i * numberOfPages + numberOfPages
      );
      priceListArr.push(el);
    }

    setPriceList(priceListArr);
  }, [...depArr]);

  return { priceList: priceList, label };
};

export default usePagesCounter;
