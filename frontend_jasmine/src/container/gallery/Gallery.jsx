import React, { useState, useEffect } from "react";
import MobileVersionGallery from "./components/MobileVersionGallery";
import DesktopVersionGallery from "./components/DesktopVersionGallery";
// import galleryImages from "../../data/galleryImages";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import { InstagramIcon } from "../../icons";
import styles from "./Gallery.module.scss";
import { client } from "../../client";

const Gallery = () => {
  const [gallery, setGallery] = useState({});

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client.fetch(query).then((data) => {
      const { title, postitle, instagramUrl, galleryArr } = data[0];

      setGallery({ title, postitle, instagramUrl, galleryArr });
    });
  }, []);

  const {
    title = "",
    postitle = "",
    instagramUrl = "",
    galleryArr = [],
  } = gallery;

  return (
    <div id="gallery" className={styles.wrapper}>
      <Heading
        className={styles.galleryTitile}
        weight="bold"
        color="green"
        transform="uppercase"
      >
        {title}
      </Heading>
      <div className={styles.textGalleryWrapper}>
        <Text color="green">{postitle}</Text>
        <a href={instagramUrl}>
          <InstagramIcon width="36" height="36" />
        </a>
      </div>

      <MobileVersionGallery galleryImages={galleryArr} />
      <DesktopVersionGallery galleryImages={galleryArr} />
    </div>
  );
};

export default Gallery;
