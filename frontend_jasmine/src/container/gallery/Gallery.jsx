import MobileVersionGallery from "./components/MobileVersionGallery";
import DesktopVersionGallery from "./components/DesktopVersionGallery";
import galleryImages from "../../data/galleryImages";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";
import { InstagramIcon } from "../../icons";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div id="gallery" className={styles.wrapper}>
      <Heading
        className={styles.galleryTitile}
        weight="bold"
        color="green"
        transform="uppercase"
      >
        Наші роботи
      </Heading>
      <div className={styles.textGalleryWrapper}>
        <Text color="green">Більше робіт дивіться у нашому INSTAGRAM</Text>
        <a href="https://www.instagram.com/salonejasmine_/?utm_medium=copy_link">
          <InstagramIcon width="36" height="36" />
        </a>
      </div>

      <MobileVersionGallery galleryImages={galleryImages} />
      <DesktopVersionGallery galleryImages={galleryImages} />
    </div>
  );
};

export default Gallery;
