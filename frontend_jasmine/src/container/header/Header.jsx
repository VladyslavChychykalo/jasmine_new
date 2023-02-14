import React from "react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <Text letterSpacing="4" textWeights="light" size="xl" color="base">
        Краса у стилі
      </Text>
      <Heading
        letterSpacing="17"
        textWeights="bold"
        size="xxl"
        color="base"
        transform="uppercase"
        margin="18px 0 0 0"
        whiteSpace="nowrap"
      >
        Жасмін
      </Heading>
      <Text
        letterSpacing="2.9"
        lineHeight="19"
        margin="32px 0 0 0"
        textWeights="normal"
        color="base"
      >
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
  );
}

export default Header;
