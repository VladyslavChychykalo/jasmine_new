import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Text from "../../../components/typography/text/Text";
import usePagesCounter from "../../../utils/usePagesCounter";
import Heading from "../../../components/typography/heading/Heading";
import CustomAccordionItem from "../../../components/customAccordionItem/CustomAccordion";
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

        <div>
          {attrs &&
            attrs.map((data) => {
              const { id, selectName, subCategories } = data;

              return (
                <CustomAccordionItem
                  key={id}
                  accordionTitle={selectName}
                  id={id}
                  onSetService={onChangeService}
                  data={data}
                >
                  {subCategories.map((item) => {
                    const { subCategorie, id } = item;

                    return (
                      <div
                        onClick={() => {
                          onChangePrice(item);
                        }}
                        key={id}
                      >
                        <Text>{subCategorie}</Text>
                      </div>
                    );
                  })}
                </CustomAccordionItem>
              );
            })}
        </div>
      </div>

      {/* 2 part */}

      <div className={styles.servicesBlock}>
        <div className={styles.mainCategoriesBlock}>
          {mainServiceOptions.map(({ id, mainData, name }) => {
            return (
              <div
                key={id}
                onClick={() => {
                  onChangeTab(mainData);
                }}
                className={styles.subMainOptionBlockDesktop}
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

        {priceList?.length && (
          <div className={styles.subservicesWrapper}>
            <Swiper {...carouselPriceSettings}>
              {priceList.map((item, index) => {
                // const startValue = index * 15;
                // const endValue = startValue + 15;

                const leftPartList = item?.slice(0, 15);
                const rightPartList = item?.slice(15, 30);

                return (
                  <SwiperSlide key={index}>
                    <div className={styles.pageDesktopPrice}>
                      <div>
                        {leftPartList.map(({ name, price }) => {
                          return (
                            <div className={styles.priceInfo}>
                              <Text>{name}</Text>
                              <Text>{price}</Text>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {rightPartList.map(({ name, price }) => {
                          return (
                            <div>
                              <div className={styles.priceInfo}>
                                <Text>{name}</Text>
                                <Text>{price}</Text>
                              </div>
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
