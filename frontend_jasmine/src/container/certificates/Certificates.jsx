import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
// import certificateImages from "../../data/certificateImages";
import { client, urlFor } from "../../client";
import isValidArrValue from "../../utils/isValidArrValue";

import styles from "./Certificates.module.scss";

SwiperCore.use([Pagination]);

// const descriptionArr = [
//   {
//     id: "1",
//     description:
//       "Подарунковий сертифікат салону краси Жасмін – це найкращий подарунок. Виможете придбати сертифікат на будь-яку суму або вибрати необхідну послугу.",
//     weight: "normal",
//   },
//   {
//     id: "2",
//     description:
//       " Сертифікатом можна скористатися будь-коли - головне, запишіться наперед до потрібного майстра.",
//     weight: "normal",
//   },
//   {
//     id: "3",
//     description:
//       "Ви даруєте не черговий банальний подарунок – Ви даруєте турботу, увагу та позитивні емоції.",
//     weight: "normal",
//   },
//   {
//     id: "4",
//     description: "Термін дії сертифіката 3 місяці з дня покупки.",
//     weight: "bold",
//   },
// ];

const Certificates = () => {
  const [certificates, setCertificates] = useState({});

  useEffect(() => {
    const query = '*[_type == "certificate"]';

    client.fetch(query).then((data) => {
      const { title, certificatesArr, descriptionArr } = data[0];

      setCertificates({ title, certificatesArr, descriptionArr });
    });
  }, []);

  const {
    title = "",
    certificatesArr = [],
    descriptionArr = [],
  } = certificates;

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
      <div className={styles.certificateTextBlock}>
        <Heading
          transform="uppercase"
          size="l"
          as="h4"
          color="green"
          weight="bold"
          className={styles.certificateTitle}
        >
          {title}
        </Heading>
        {isValidArrValue(descriptionArr) &&
          descriptionArr.map(({ descriptionItem, fontWeight, _key }) => {
            return (
              <Text
                key={_key}
                color="green"
                weight={fontWeight === "normal" ? "normal" : "semibold"}
                className={styles.descriptionItem}
              >
                {descriptionItem}
              </Text>
            );
          })}
      </div>

      {isValidArrValue(certificatesArr) && (
        <div className={styles.swiperWrapper}>
          <Swiper {...carouselSettings}>
            {certificatesArr.map(({ asset, _key }) => {
              return (
                <SwiperSlide key={`mobile_thumb${_key}`}>
                  <img src={urlFor(asset)} alt="Certificate" />
                </SwiperSlide>
              );
            })}
            {(!certificatesArr.length || certificatesArr.length !== 1) && (
              <div className={`${styles.swiperPagination} swiper-pagination`} />
            )}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Certificates;
