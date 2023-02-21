import React from "react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import image from "../../assets/images/aboutUs/aboutUs1.png";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div id="main" className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <Heading
          className={styles.title}
          transform="uppercase"
          as="h4"
          weight="bold"
        >
          Про нас
        </Heading>
        <Text className={styles.description}>
          Вже як 10 років ми знайшли в нашому салоні формулу краси.
        </Text>
        <Text className={styles.description}>
          ЖАСМІН - твій порятунок перед важливою зустріччю, довгоочікуваним
          побаченням або насиченим вікендом.
        </Text>
      </div>

      <div>
        <img className={styles.aboutUsImage} src={image} alt="about" />
      </div>
    </div>
  );
};

export default AboutUs;
