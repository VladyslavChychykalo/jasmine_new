import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import MobileVersionPrice from "./components/MobileVersionPrice";
import DesktopVersionPrice from "./components/DesktopVersionPrice";
import { wemanRoom } from "../../data/priceContainer";

import { mainServiceOptions } from "./utils/serviceOptions";
import styles from "./Services.module.scss";

SwiperCore.use([Pagination]);

const Services = () => {
  // first value by default
  const [currentTab, setCurrentTab] = useState(wemanRoom);
  const [currentSrvice, setCurrentService] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    setCurrentService(currentTab.attrs[0]);
  }, [currentTab]);

  useEffect(() => {
    setCurrentPrice(currentSrvice?.subCategories[0]);
  }, [currentSrvice]);

  return (
    <div id="price" className={styles.wrapper}>
      <MobileVersionPrice
        mainServiceOptions={mainServiceOptions}
        onChangeTab={setCurrentTab}
        onChangeService={setCurrentService}
        onChangePrice={setCurrentPrice}
        currentTab={currentTab}
        currentSrvice={currentSrvice}
        currentPrice={currentPrice}
      />

      <DesktopVersionPrice
        mainServiceOptions={mainServiceOptions}
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
