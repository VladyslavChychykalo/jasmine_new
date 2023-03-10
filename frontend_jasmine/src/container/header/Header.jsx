import React, { useState, useEffect } from "react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import desktopImageFace from "../../assets/images/header/face.png";
import { client } from "../../client";

import styles from "./Header.module.scss";

const initialHeaderValue = {
  title: "Жасмін",
  pretitle: "Краса у стилі",
  servicesArr: [
    "Перукарські послуги",
    "Нігтьовий сервіс",
    "Косметологія",
    "Масажи та SPA-послуги",
    "Брови та вії",
    "Макіяж/татуаж",
    "Депіляція",
  ],
};

function Header() {
  const [headerInfo, setHeaderInfo] = useState({});

  useEffect(() => {
    const query = '*[_type == "header"]';

    client.fetch(query).then((data) => {
      const { pretitle, title, servicesArr } = data[0];

      setHeaderInfo({ pretitle, title, servicesArr });
    });
  }, []);

  return (
    <header className={styles.wrapper}>
      <div className={styles.imageDesktopHeaderWrapper}>
        <img src={desktopImageFace} alt="Face" />
      </div>
      <div className={styles.textBlockHeader}>
        <Text className={styles.preTitle} weight="light" color="base">
          {headerInfo?.pretitle
            ? headerInfo?.pretitle
            : initialHeaderValue.pretitle}
        </Text>
        <Heading
          className={styles.title}
          weight="bold"
          color="base"
          transform="uppercase"
          whiteSpace="nowrap"
        >
          {headerInfo?.title ? headerInfo?.title : initialHeaderValue.title}
        </Heading>
        <ul className={styles.subtitleList}>
          {headerInfo?.servicesArr &&
            headerInfo.servicesArr.map((el) => {
              return (
                <li>
                  <Text color="base">- {el}</Text>
                </li>
              );
            })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
