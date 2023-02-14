import React from "react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import image from "../../assets/images/aboutUs/aboutUs1.png";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div id="main" className={styles.wrapper}>
      <Heading
        transform="uppercase"
        size="l"
        as="h4"
        letterSpacing="5"
        color="green"
        weight="bold"
      >
        Про нас
      </Heading>
      <Text
        margin="23px 0 0 0"
        color="green"
        letterSpacing="2"
        lineHeight="20"
      >
        Вже як 10 років ми знайшли в нашому салоні формулу краси.
      </Text>
      <Text
        margin="10px 0 0 0"
        letterSpacing="2"
        color="green"
        lineHeight="20"
      >
        ЖАСМІН - твій порятунок перед важливою зустріччю, довгоочікуваним
        побаченням або насиченим вікендом.
      </Text>
      <img className={styles.aboutUsImage} src={image} alt="about" />
    </div>
  );
};

export default AboutUs;
