import React from "react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import {
  MarkerIcon,
  PhoneIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  ViberIcon,
  TelegramIcon,
} from "../../icons";

import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div id="contacts" className={styles.wrapper}>
      <Heading
        transform="uppercase"
        size="l"
        as="h4"
        letterSpacing="5"
        color="green"
        weight="bold"
      >
        Наші контакти
      </Heading>
      <ul className={styles.listAddress}>
        <li className={styles.itemAddress}>
          <MarkerIcon />
          <Text
            lineHeight="20"
            margin="0 0 0 20px"
            letterSpacing="3"
            size="m"
            color="green"
          >
            Солом'янський район, вул. Гарматна 45
          </Text>
        </li>
        <li className={styles.itemAddress}>
          <PhoneIcon />
          <Text
            lineHeight="20"
            margin="0 0 0 20px"
            letterSpacing="3"
            size="m"
            color="green"
          >
            <a className={styles.phoneLinks} href="tel:+380937390044">
              (093) 739-00-44
            </a>
            <br />
            <a className={styles.phoneLinks} href="tel:+380968118456">
              (096) 811-84-56
            </a>
          </Text>
        </li>
        <li className={styles.itemAddress}>
          <ClockIcon />
          <div>
            <Text
              margin="0 0 5px 20px"
              letterSpacing="3"
              size="m"
              color="green"
            >
              Пн-Пт: 09:00-20:00
            </Text>
            <Text
              margin="0 0 0 20px"
              letterSpacing="3"
              size="m"
              color="green"
            >
              Сб-Нд: 10:00-20:00
            </Text>
          </div>
        </li>
      </ul>
      <ul className={styles.socialMediaList}>
        <li>
          <a href="https://www.instagram.com/salonejasmine_/?utm_medium=copy_link">
            <InstagramIcon width="32" height="32" />
          </a>
        </li>
        <li>
          <a href="https://t.me/salonejasmine">
            <TelegramIcon />
          </a>
        </li>
        <li>
          <a href="viber://chat?number=%2B380937390044">
            <ViberIcon />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/salonejasminekiev/">
            <FacebookIcon />
          </a>
        </li>
      </ul>
      <div>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.027626170004!2d30.43088551554299!3d50.44058607947398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc199da3ea95%3A0x29e3b72d9d1dcd8!2sHarmatna%20St%2C%2045%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2s!4v1641816229761!5m2!1sen!2s"
          width="100%"
          height="187"
          style={{ border: 0, marginTop: "20px" }}
          allowFullScreen=""
          aria-hidden="false"
          loading="lazy"
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export default Contacts;
