import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import { SideArrow } from "../../../icons";
import styles from "../Gallery.module.scss";

SwiperCore.use([Navigation]);

const DesktopVersionGallery = (props) => {
  const {galleryImages} = props;
  
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
        {galleryImages.map(({ src, alt, id }) => {
          console.log(galleryImages);
          return (
            <SwiperSlide key={id}>
              <img src={src} alt={alt} />
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
