import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import galleryImages from "../../data/galleryImages";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import { InstagramIcon, SideArrow } from "../../icons";
import styles from "./Gallery.module.scss";

SwiperCore.use([Pagination, Navigation]);

const Gallery = () => {
  const carouselSettingsMobile = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const carouselSettingsDesktop = {
    spaceBetween: 41,
    slidesPerView: 4,
    initialSlide: 1,
    navigation: {
      nextEl: `.swiper-next-arrow`,
      prevEl: `.swiper-prev-arrow`,
    },
  };

  return (
    <div id="gallery" className={styles.wrapper}>
      <Heading
        className={styles.galleryTitile}
        weight="bold"
        color="green"
        transform="uppercase"
      >
        Наші роботи
      </Heading>
      <div className={styles.textGalleryWrapper}>
        <Text color="green">Більше робіт дивіться у нашому INSTAGRAM</Text>
        <a href="https://www.instagram.com/salonejasmine_/?utm_medium=copy_link">
          <InstagramIcon width="36" height="36" />
        </a>
      </div>
      <div className={styles.mobileSwiper}>
        <Swiper {...carouselSettingsMobile}>
          {galleryImages.map(({ src, alt, id }, index) => {
            return (
              <SwiperSlide key={`mobile_thumb${id}`}>
                <img src={src} alt={alt} />
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination" />
        </Swiper>
      </div>

      {/* desktop */}

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
          className={`swiper-prev-arrow ${styles.arrowNavigationLeft} ${styles.defaultPosition}`}
        >
          <SideArrow />
        </div>
        <div
          className={`swiper-next-arrow ${styles.arrowNavigationRight} ${styles.defaultPosition}`}
        >
          <SideArrow />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
