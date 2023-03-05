import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import usePagesCounter from "../../../utils/usePagesCounter";

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
        {mainServiceOptions.map(({ id, mainData, name }) => {
          return (
            <div
              key={id}
              onClick={() => {
                onChangeTab(mainData);
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
        setCurrentOption={onChangeService}
        className={styles.customSelect}
      />
      <div className={styles.subservicesWrapper}>
        {!!currentSrvice?.subCategories.filter((el) => el.subCategorie !== "")
          .length && (
          <Swiper {...carouselServicesSettings}>
            {currentSrvice.subCategories.map((item) => {
              const { id, subCategorie } = item;

              return (
                <SwiperSlide key={id}>
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

      {priceList.length && (
        <div className={styles.priceListWrapper}>
          <Swiper {...carouselPriceSettings}>
            {/* {label && } */}
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

export default MobileVersionPrice;
