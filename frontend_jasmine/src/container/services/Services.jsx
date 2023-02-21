import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { wemanRoom } from "../../data/priceContainer";
import CustomSelect from "../../components/customSelect";

import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import { StripIcon } from "../../icons";
import { mainServiceOptions } from "./utils/serviceOptions";
import styles from "./Services.module.scss";

SwiperCore.use([Pagination]);

const Services = () => {
  // first value by default
  const [currentTab, setCurrentTab] = useState(wemanRoom);

  const [currentSrvice, setCurrentService] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    setCurrentService(currentTab.attrs[0]);
  }, [currentTab]);

  useEffect(() => {
    setCurrentPrice(currentSrvice?.subCategories[0]);
  }, [currentSrvice]);

  useEffect(() => {
    const fullNumberOfLists = Math.ceil(
      currentPrice?.services.attributes.length / 7
    );

    const priceList = [];

    for (let i = 0; i < fullNumberOfLists; i++) {
      const el = currentPrice?.services.attributes.slice(i * 7, i * 7 + 7);
      priceList.push(el);
    }

    setPriceList(priceList);
  }, [currentTab, currentSrvice, currentPrice]);

  const carouselSettings = {
    spaceBetween: 20,
    // slidesPerView: 1.5,
    slidesPerView: "auto",
  };

  const carouselSettingsPrice = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div id="price" className={styles.wrapper}>
      <Heading
        size="l"
        letterSpacing="5"
        transform="uppercase"
        margin="0 0 36px 0"
        weight="bold"
        color="green"
      >
        НАШІ ПОСЛУГИ ТА ЦІНИ
      </Heading>
      <div className={styles.mainOptionBlock}>
        {mainServiceOptions.map(({ id, mainData, name }) => {
          return (
            <div
              key={id}
              onClick={() => {
                setCurrentTab(mainData);
              }}
              className={styles.subMainOptionBlock}
            >
              <Text
                size="xs"
                color="green"
                transform="uppercase"
                letterSpacing="3"
              >
                {name}
              </Text>
              {currentTab.label === name && (
                <div className={styles.underline} />
              )}
            </div>
          );
        })}
      </div>
      <CustomSelect
        currentOption={currentSrvice}
        options={currentTab.attrs}
        setCurrentOption={setCurrentService}
        className={styles.customSelect}
      />
      <div className={styles.subservicesWrapper}>
        {!!currentSrvice?.subCategories.filter((el) => el.subCategorie !== "")
          .length && (
          <Swiper {...carouselSettings} freeMode>
            {currentSrvice.subCategories.map((item) => {
              const { id, subCategorie } = item;

              return (
                <SwiperSlide key={id}>
                  <div
                    onClick={() => {
                      setCurrentPrice(item);
                    }}
                    className={styles.currentServiceLine}
                  >
                    <StripIcon className={styles.stripIconStyles} />
                    <Text
                      size="s"
                      letterSpacing="2"
                      color="green"
                      whiteSpace="nowrap"
                    >
                      {subCategorie}
                    </Text>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {priceList.length && (
        <div className={styles.priceListWrapper}>
          <Swiper {...carouselSettingsPrice}>
            {priceList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <table className={styles.tablePriceList}>
                    {item.map(({ name, price, label }) => {
                      return (
                        <tr>
                          <td className={styles.tableDataName}>
                            <Text
                              color="green"
                              size="s"
                              weight={label ? "semibold" : "normal"}
                            >
                              {name.slice(0, 1).toUpperCase() + name.slice(1)}
                            </Text>
                          </td>

                          <td className={styles.tableDataPrice}>
                            <Text
                              color="green"
                              size="s"
                              weight={label ? "semibold" : "normal"}
                            >
                              {price}
                            </Text>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </SwiperSlide>
              );
            })}
            <div
              className={`${
                (!priceList.length || priceList.length === 1) &&
                styles.paginationHidden
              } swiper-pagination`}
            />
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Services;
