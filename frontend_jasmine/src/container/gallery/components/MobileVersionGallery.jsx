import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import styles from "../Gallery.module.scss";

SwiperCore.use([Pagination]);

const MobileVersionGallery = (props) => {
  const { galleryImages } = props;

  const carouselSettingsMobile = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <div className={styles.mobileSwiper}>
      <Swiper {...carouselSettingsMobile}>
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

export default MobileVersionGallery;
