import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Text from "../../../components/typography/text/Text";
import usePagesCounter from "../../../utils/usePagesCounter";
import isValidArrValue from "../../../utils/isValidArrValue";
import Heading from "../../../components/typography/heading/Heading";
import Accordion from "../../../components/accordion/Accordion";

import styles from "../Services.module.scss";

SwiperCore.use([Pagination]);

const DesktopVersionPrice = (props) => {
  const {
    mainServiceOptions,
    currentTab,
    onChangeTab,
    currentSrvice,
    currentPrice,
    onChangeService,
    onChangePrice,
  } = props;

  const { priceList } = usePagesCounter({
    dependencies: [currentTab, currentSrvice, currentPrice],
    neededNumberOfPages: 30,
    currentPrice,
  });

  const { attrs } = currentTab;

  const carouselPriceSettings = {
    spaceBetween: 60,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className={styles.desktopPriceWrapper}>
      {/* 1 part */}
      <div className={styles.accordionBlock}>
        <Heading size="l" transform="uppercase" weight="bold" color="green">
          НАШІ ПОСЛУГИ ТА ЦІНИ
        </Heading>

        <div className={styles.accordionWrapper}>
          {attrs && (
            <Accordion onSetService={onChangeService}>
              {attrs.map((data) => {
                const { _key, selectName, subCategories } = data;

                return (
                  <Accordion.Section key={_key}>
                    <Accordion.Title data={data} id={_key}>
                      {selectName}
                    </Accordion.Title>
                    {subCategories?.length && (
                      <Accordion.Panel id={_key}>
                        {subCategories.map((item) => {
                          const { subCategorie, _key } = item;

                          return (
                            <Text
                              key={_key}
                              onClick={() => {
                                onChangePrice(item);
                              }}
                              className={styles.accordionContent}
                            >
                              {subCategorie}
                            </Text>
                          );
                        })}
                      </Accordion.Panel>
                    )}
                  </Accordion.Section>
                );
              })}
            </Accordion>
          )}
        </div>
      </div>

      {/* 2 part */}

      <div className={styles.servicesBlock}>
        {isValidArrValue(mainServiceOptions) && (
          <div className={styles.mainCategoriesBlock}>
            {mainServiceOptions.map((el) => {
              const { _id, label } = el;
              return (
                <div
                  key={_id}
                  onClick={() => {
                    onChangeTab(el);
                  }}
                  className={styles.subMainOptionBlockDesktop}
                >
                  <Text size="xs" color="green" transform="uppercase">
                    {label}
                  </Text>
                  {currentTab.label === label && (
                    <div className={styles.underline} />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {isValidArrValue(priceList) && (
          <div className={styles.subservicesWrapper}>
            <Swiper {...carouselPriceSettings}>
              {priceList.map((item, index) => {
                const leftPartList = item?.slice(0, 15);
                const rightPartList = item?.slice(15, 30);

                return (
                  <SwiperSlide key={index}>
                    <div className={styles.pageDesktopPrice}>
                      <div>
                        {leftPartList.map(({ name, price, _key }) => {
                          return (
                            <div key={_key} className={styles.priceInfo}>
                              <Text>{name}</Text>
                              <Text>{price}</Text>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {rightPartList.map(({ name, price, _key }) => {
                          return (
                            <div key={_key} className={styles.priceInfo}>
                              <Text>{name}</Text>
                              <Text>{price}</Text>
                            </div>
                          );
                        })}
                      </div>
                    </div>
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
    </div>
  );
};

export default DesktopVersionPrice;
