import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import MobileVersionPrice from "./components/MobileVersionPrice";
import DesktopVersionPrice from "./components/DesktopVersionPrice";
// import { wemanRoom } from "../../data/priceContainer";
import { client } from "../../client";

// import { mainServiceOptions } from "./utils/serviceOptions";
import styles from "./Services.module.scss";

SwiperCore.use([Pagination]);

const Services = () => {
  // first value by default
  const [price, setPrice] = useState([]);
  const [currentTab, setCurrentTab] = useState({});
  const [currentSrvice, setCurrentService] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    const query = '*[_type == "price"]';

    client.fetch(query).then((data) => {
      const initialValue = data.find((el) => el.label === "Жіночій зал");

      setPrice(data);
      setCurrentTab(initialValue);
      setCurrentService(initialValue?.attrs[0]);
      setCurrentPrice(initialValue?.attrs[0]?.subCategories[0]);
    });
  }, []);

  useEffect(() => {
    const isCurrentTub = currentTab?.attrs?.[0];
    if (isCurrentTub) setCurrentService(currentTab?.attrs[0]);
  }, [currentTab]);

  useEffect(() => {
    const isCurrentService = currentSrvice?.subCategories?.[0];
    if (isCurrentService) setCurrentPrice(currentSrvice?.subCategories[0]);
  }, [currentSrvice]);

  return (
    <div id="price" className={styles.wrapper}>
      <MobileVersionPrice
        mainServiceOptions={price}
        onChangeTab={setCurrentTab}
        onChangeService={setCurrentService}
        onChangePrice={setCurrentPrice}
        currentTab={currentTab}
        currentSrvice={currentSrvice}
        currentPrice={currentPrice}
      />

      <DesktopVersionPrice
        mainServiceOptions={price}
        onChangeTab={setCurrentTab}
        onChangeService={setCurrentService}
        onChangePrice={setCurrentPrice}
        currentTab={currentTab}
        currentSrvice={currentSrvice}
        currentPrice={currentPrice}
      />
    </div>
  );
};

export default Services;
