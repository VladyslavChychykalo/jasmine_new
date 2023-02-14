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

  return (
    <div id="certificates" className={styles.wrapper}>
      <Heading
        transform="uppercase"
        size="l"
        as="h4"
        letterSpacing="4"
        color="green"
        weight="bold"
        lineHeight="24"
      >
        Подарунковий сертифікат
      </Heading>
      <Text
        margin="17px 0 0 0"
        color="green"
        letterSpacing="2"
        lineHeight="20"
      >
        Подарунковий сертифікат салону краси Жасмін – це найкращий подарунок. Ви
        можете придбати сертифікат на будь-яку суму або вибрати необхідну
        послугу.
      </Text>
      <Text
        margin="29px 0 0 0"
        letterSpacing="2"
        color="green"
        lineHeight="20"
      >
        Сертифікатом можна скористатися будь-коли - головне, запишіться наперед
        до потрібного майстра.
      </Text>
      <Text
        margin="21px 0 0 0"
        letterSpacing="2"
        color="green"
        lineHeight="20"
      >
        Ви даруєте не черговий банальний подарунок – Ви даруєте турботу, увагу
        та позитивні емоції.
      </Text>

      <Text
        margin="21px 0 0 0"
        letterSpacing="2"
        color="green"
        lineHeight="20"
        weight="semibold"
      >
        Термін дії сертифіката 3 місяці з дня покупки.
      </Text>
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
