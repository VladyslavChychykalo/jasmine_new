import React, { useState, useEffect } from "react";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
// import image from "../../assets/images/aboutUs/aboutUs1.png";
import { client, urlFor } from "../../client";
import isValidArrValue from "../../utils/isValidArrValue";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      const { title, description, imageAbout } = data[0];

      setAbout({ title, description, imageAbout });
    });
  }, []);

  const { title = "", description = [], imageAbout = null } = about;

  return (
    <div id="main" className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <Heading
          className={styles.title}
          transform="uppercase"
          as="h4"
          weight="bold"
        >
          {title}
        </Heading>
        {isValidArrValue(description) &&
          description.map((el) => {
            return (
              <Text key={el} className={styles.description}>
                {el}
              </Text>
            );
          })}
      </div>

      {imageAbout?.asset && (
        <div>
          <img
            className={styles.aboutUsImage}
            src={urlFor(imageAbout?.asset)}
            alt="About"
          />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
