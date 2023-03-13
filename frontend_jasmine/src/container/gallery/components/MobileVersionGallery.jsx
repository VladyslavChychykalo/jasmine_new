import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { urlFor } from "../../../client";
import isValidArrValue from "../../../utils/isValidArrValue";

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
        {isValidArrValue(galleryImages) &&
          galleryImages.map(({ asset, _key }) => {
            return (
              <SwiperSlide key={`mobile_thumb${_key}`}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageGallery}
                    src={urlFor(asset)}
                    alt="Gallery"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default MobileVersionGallery;
