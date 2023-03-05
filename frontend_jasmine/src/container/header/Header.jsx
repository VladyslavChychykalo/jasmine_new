import React from "react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import desktopImageFace from "../../assets/images/header/face.png";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.imageDesktopHeaderWrapper}>
        <img src={desktopImageFace} alt="Face" />
      </div>
      <div className={styles.textBlockHeader}>
        <Text className={styles.preTitle} weight="light" color="base">
          Краса у стилі
        </Text>
        <Heading
          className={styles.title}
          weight="bold"
          color="base"
          transform="uppercase"
          whiteSpace="nowrap"
        >
          Жасмін
        </Heading>
        <Text className={styles.subtitleList} textWeights="normal" color="base">
          <ul>
            <li>- Перукарські послуги</li>
            <li>- Нігтьовий сервіс</li>
            <li>- Косметологія</li>
            <li>- Масажи та SPA-послуги</li>
            <li>- Брови та вії</li>
            <li>- Макіяж/татуаж</li>
            <li>- Депіляція</li>
          </ul>
        </Text>
      </div>
    </header>
  );
}

export default Header;
