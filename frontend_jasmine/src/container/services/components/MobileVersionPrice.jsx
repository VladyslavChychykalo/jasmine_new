import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import usePagesCounter from "../../../utils/usePagesCounter";
import isValidArrValue from "../../../utils/isValidArrValue";

import Heading from "../../../components/typography/heading/Heading";
import { StripIcon } from "../../../icons";
import Text from "../../../components/typography/text/Text";
import CustomSelect from "../../../components/customSelect";
import styles from "../Services.module.scss";

SwiperCore.use([Pagination]);

const MobileVersionPrice = (props) => {
  const {
    mainServiceOptions,
    onChangeTab,
    currentTab,
    currentSrvice,
    onChangeService,
    onChangePrice,
    currentPrice,
  } = props;

  const { priceList, label } = usePagesCounter({
    dependencies: [currentTab, currentSrvice, currentPrice],
    neededNumberOfPages: 7,
    currentPrice,
  });

  const carouselServicesSettings = {
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode: true,
  };

  const carouselPriceSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className={styles.mobilePriceWrapper}>
      <Heading size="l" transform="uppercase" weight="bold" color="green">
        НАШІ ПОСЛУГИ ТА ЦІНИ
      </Heading>
      <div className={styles.mainOptionBlock}>
        {isValidArrValue(mainServiceOptions) &&
          mainServiceOptions.map((el) => {
            const { _id, label } = el;
            return (
              <div
                key={_id}
                onClick={() => onChangeTab(el)}
                className={styles.subMainOptionBlock}
              >
                <Text
                  size="xs"
                  color="green"
                  transform="uppercase"
                  letterSpacing="3"
                >
                  {label}
                </Text>
                {currentTab.label === label && (
                  <div className={styles.underline} />
                )}
              </div>
            );
          })}
      </div>
      <CustomSelect
        currentOption={currentSrvice}
        options={currentTab.attrs}
        setCurrentOption={onChangeService}
        className={styles.customSelect}
      />
      <div className={styles.subservicesWrapper}>
        {!!currentSrvice?.subCategories.filter((el) => el?.subCategorie)
          .length && (
          <Swiper {...carouselServicesSettings}>
            {currentSrvice.subCategories.map((item) => {
              const { _key, subCategorie } = item;

              return (
                <SwiperSlide key={_key}>
                  <div
                    onClick={() => {
                      onChangePrice(item);
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

      {isValidArrValue(priceList) && (
        <div className={styles.priceListWrapper}>
          <Swiper {...carouselPriceSettings}>
            {priceList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <table className={styles.tablePriceList}>
                    {label?.name && label?.price && (
                      <tr>
                        <td className={styles.tableDataName}>
                          <Text
                            color="green"
                            size="s"
                            weight={label ? "semibold" : "normal"}
                          >
                            {label.name.slice(0, 1).toUpperCase() +
                              label.name.slice(1)}
                          </Text>
                        </td>

                        <td className={styles.tableDataPrice}>
                          <Text
                            color="green"
                            size="s"
                            weight={label ? "semibold" : "normal"}
                          >
                            {label.price}
                          </Text>
                        </td>
                      </tr>
                    )}

                    {item.map((el) => {
                      const { name, price, specialLabel, _key } = el;
                      return (
                        <tr key={_key}>
                          <td className={styles.tableDataName}>
                            <Text
                              color="green"
                              size="s"
                              weight={
                                specialLabel === "special"
                                  ? "semibold"
                                  : "normal"
                              }
                            >
                              {name.slice(0, 1).toUpperCase() + name.slice(1)}
                            </Text>
                          </td>

                          <td className={styles.tableDataPrice}>
                            <Text
                              color="green"
                              size="s"
                              weight={
                                specialLabel === "special"
                                  ? "semibold"
                                  : "normal"
                              }
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

export default MobileVersionPrice;
