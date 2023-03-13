/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const usePagesCounter = (props) => {
  const [priceList, setPriceList] = useState({
    label: {
      name: "",
      price: "",
    },
    arrayOfServices: [],
  });

  const { dependencies = [], neededNumberOfPages, currentPrice } = props;

  const depArr = [...dependencies];

  useEffect(() => {
    const numberOfPages = Number(neededNumberOfPages);
    // ===
    const filterdArrLabel = currentPrice?.services?.filter(
      (el) => el.specialLabel === "special"
    );
    if (filterdArrLabel?.length) {
      setPriceList((prev) => ({
        ...prev,
        label: {
          name: filterdArrLabel[0].name,
          price: filterdArrLabel[0].price,
        },
      }));
    }
    // ===

    const filteredArrayWithoutLabel = currentPrice?.services?.filter(
      (el) => el.specialLabel === "common"
    );

    const fullNumberOfLists = Math.ceil(
      filteredArrayWithoutLabel?.length / numberOfPages
    );

    const priceList = [];

    for (let i = 0; i < fullNumberOfLists; i++) {
      const el = filteredArrayWithoutLabel.slice(
        i * numberOfPages,
        i * numberOfPages + numberOfPages
      );
      priceList.push(el);
    }

    setPriceList((prev) => ({
      ...prev,
      arrayOfServices: priceList,
    }));
  }, [...depArr]);

  return { priceList: priceList.arrayOfServices, label: priceList.label };
};

export default usePagesCounter;
