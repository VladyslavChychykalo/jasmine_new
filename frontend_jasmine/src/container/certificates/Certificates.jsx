import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import certificateImages from "../../data/certificateImages";

import styles from "./Certificates.module.scss";

SwiperCore.use([Pagination]);

const Certificates = () => {
  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const descriptionArr = [
    {
      id: "1",
      description:
        "Подарунковий сертифікат салону краси Жасмін – це найкращий подарунок. Виможете придбати сертифікат на будь-яку суму або вибрати необхідну послугу.",
      weight: "normal",
    },
    {
      id: "2",
      description:
        " Сертифікатом можна скористатися будь-коли - головне, запишіться наперед до потрібного майстра.",
      weight: "normal",
    },
    {
      id: "3",
      description:
        "Ви даруєте не черговий банальний подарунок – Ви даруєте турботу, увагу та позитивні емоції.",
      weight: "normal",
    },
    {
      id: "4",
      description: "Термін дії сертифіката 3 місяці з дня покупки.",
      weight: "bold",
    },
  ];

  return (
    <div id="certificates" className={styles.wrapper}>
      <div className={styles.certificateTextBlock}>
        <Heading
          transform="uppercase"
          size="l"
          as="h4"
          color="green"
          weight="bold"
          className={styles.certificateTitle}
        >
          Подарунковий сертифікат
        </Heading>
        {descriptionArr.map(({ id, description, weight }) => {
          return (
            <Text
              color="green"
              weight={weight === "normal" ? "normal" : "semibold"}
              key={id}
              className={styles.descriptionItem}
            >
              {description}
            </Text>
          );
        })}
      </div>

      <div className={styles.swiperWrapper}>
        <Swiper {...carouselSettings}>
          {certificateImages.map(({ src, alt, id }) => {
            return (
              <SwiperSlide key={`mobile_thumb${id}`}>
                <img src={src} alt={alt} />
              </SwiperSlide>
            );
          })}
          {(!certificateImages.length || certificateImages.length !== 1) && (
            <div className={`${styles.swiperPagination} swiper-pagination`} />
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Certificates;
