import React, { useState, useEffect } from "react";
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
import { client } from "../../client";

import styles from "./Contacts.module.scss";

const initialContactValues = { title: "Наші контакти" };

const Contacts = () => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const query = '*[_type == "contacts"]';

    client.fetch(query).then((data) => {
      const {
        addressArray,
        contactsArray,
        title,
        socialMediaArray,
        workTimeArray,
      } = data[0];

      setContacts({
        addressArray,
        contactsArray,
        title,
        socialMediaArray,
        workTimeArray,
      });
    });
  }, []);

  const {
    title = "",
    addressArray = [],
    contactsArray = [],
    workTimeArray = [],
    socialMediaArray = [],
  } = contacts;

  const isValidArrValue = (arr) => {
    return Array.isArray(arr) && arr.length ? true : false;
  };

  const mapSocialMediaArr = () => {
    return socialMediaArray.map((el) => {
      let IconElement;

      switch (el.socialLinkName) {
        case "Instagram":
          IconElement = InstagramIcon;
          break;
        case "Viber":
          IconElement = ViberIcon;
          break;
        case "Telegram":
          IconElement = TelegramIcon;
          break;
        case "Facebook":
          IconElement = FacebookIcon;
          break;
        default:
          IconElement = null;
      }
      return { ...el, IconElement };
    });
  };
  
  return (
    <footer id="contacts" className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <Heading
          transform="uppercase"
          size="l"
          as="h4"
          color="green"
          weight="bold"
          className={styles.contactTitle}
        >
          {title ? title : initialContactValues.title}
        </Heading>
        <ul className={styles.listAddress}>
          <li className={styles.itemAddress}>
            <div>
              <MarkerIcon />
            </div>
            {isValidArrValue(addressArray) &&
              addressArray.map((el) => {
                return (
                  <Text size="m" color="green">
                    {el}
                  </Text>
                );
              })}
          </li>
          <li className={styles.itemAddress}>
            <div>
              <PhoneIcon />
            </div>

            <div className={styles.contactInfoBlock}>
              {isValidArrValue(contactsArray) &&
                contactsArray.map(({ contactName, contactLink }) => {
                  return (
                    <a className={styles.phoneLinks} href={contactLink}>
                      {contactName}
                    </a>
                  );
                })}
            </div>
          </li>

          <li className={styles.itemAddress}>
            <div>
              <ClockIcon />
            </div>

            <div>
              {isValidArrValue(workTimeArray) &&
                workTimeArray.map((el) => {
                  return (
                    <Text size="m" color="green">
                      {el}
                    </Text>
                  );
                })}
            </div>
          </li>
        </ul>
        <ul className={styles.socialMediaList}>
          {isValidArrValue(socialMediaArray) &&
            mapSocialMediaArr().map(
              ({ socialLinkName, socilaLinkUrl, IconElement }) => {
                return (
                  <li>
                    <a href={socilaLinkUrl}>
                      {socialLinkName === "Instagram" ? (
                        <IconElement width="32" height="32" />
                      ) : (
                        <IconElement />
                      )}
                    </a>
                  </li>
                );
              }
            )}
        </ul>
      </div>
      <div className={styles.mapWrapper}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.027626170004!2d30.43088551554299!3d50.44058607947398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc199da3ea95%3A0x29e3b72d9d1dcd8!2sHarmatna%20St%2C%2045%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2s!4v1641816229761!5m2!1sen!2s"
          width="100%"
          height="187"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          loading="lazy"
          tabIndex="0"
        />
      </div>
    </footer>
  );
};

export default Contacts;
