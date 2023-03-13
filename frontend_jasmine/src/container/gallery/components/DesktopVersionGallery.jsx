import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import isValidArrValue from "../../../utils/isValidArrValue";
import { urlFor } from "../../../client";

import { SideArrow } from "../../../icons";
import styles from "../Gallery.module.scss";

SwiperCore.use([Navigation]);

const DesktopVersionGallery = (props) => {
  const { galleryImages } = props;

  const carouselSettingsDesktop = {
    spaceBetween: 41,
    slidesPerView: 4,
    initialSlide: 1,
    navigation: {
      nextEl: `.swiper-next-arrow-gallery`,
      prevEl: `.swiper-prev-arrow-gallery`,
    },
  };

  return (
    <div className={styles.desktopSwiper}>
      <Swiper {...carouselSettingsDesktop}>
        {isValidArrValue(galleryImages) &&
          galleryImages.map(({ asset, _key }) => {
            return (
              <SwiperSlide key={_key}>
                <div className={styles.imageWrapper}>
                  <img className={styles.imageGallery} src={urlFor(asset)} alt="Gallery" />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div
        className={`swiper-prev-arrow-gallery ${styles.arrowNavigationLeft} ${styles.defaultPosition}`}
      >
        <SideArrow />
      </div>
      <div
        className={`swiper-next-arrow-gallery ${styles.arrowNavigationRight} ${styles.defaultPosition}`}
      >
        <SideArrow />
      </div>
    </div>
  );
};

export default DesktopVersionGallery;
