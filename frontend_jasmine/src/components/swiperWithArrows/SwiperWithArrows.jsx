import { Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SideArrow } from "../../icons";

import styles from "./SwiperWithArrows.module.scss";

SwiperCore.use([Navigation]);

const SwiperWithArrows = ({ children, swiperSwttings, navigationClasses }) => {
  const { next, prev } = navigationClasses;
  
  return (
    <>
      <Swiper {...swiperSwttings}>{children}</Swiper>
      <div
        className={`${prev} ${styles.arrowNavigationLeft} ${styles.defaultPosition}`}
      >
        <SideArrow />
      </div>
      <div
        className={`${next} ${styles.arrowNavigationRight} ${styles.defaultPosition}`}
      >
        <SideArrow />
      </div>
    </>
  );
};

export default SwiperWithArrows;
