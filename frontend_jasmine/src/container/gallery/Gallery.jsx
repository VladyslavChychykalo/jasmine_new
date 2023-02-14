import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import galleryImages from "../../data/galleryImages";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import { InstagramIcon } from "../../icons";

import styles from "./Gallery.module.scss";

SwiperCore.use([Pagination]);

const Gallery = () => {
  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div id="gallery" className={styles.wrapper}>
      <Heading
        letterSpacing="5"
        size="l"
        weight="bold"
        color="green"
        transform="uppercase"
      >
        Наші роботи
      </Heading>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "15px",
          marginBottom: "18px",
        }}
      >
        <Text
          margin="0px 15px 0px 0px"
          color="green"
          letterSpacing="3"
          lineHeight="20"
        >
          Більше робіт дивіться у нашому INSTAGRAM
        </Text>
        <a href="https://www.instagram.com/salonejasmine_/?utm_medium=copy_link">
          <InstagramIcon width="36" height="36" />
        </a>
      </div>
      <Swiper {...carouselSettings}>
        {galleryImages.map(({ src, alt, id }) => {
          return (
            <SwiperSlide key={`mobile_thumb${id}`}>
              <img src={src} alt={alt} />
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default Gallery;
