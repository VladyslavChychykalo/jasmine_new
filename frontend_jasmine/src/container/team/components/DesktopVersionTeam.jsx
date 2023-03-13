import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "../../../client";
import Text from "../../../components/typography/text/Text";
import { StripIcon, SideArrow } from "../../../icons";
import isValidArrValue from "../../../utils/isValidArrValue";

import styles from "../Team.module.scss";

const DesktopVersionTeam = (props) => {
  const { currentOption, galleryTeam, onChangeOption } = props;
  const teamArray = currentOption?.team?.length ? currentOption.team : null;

  const carouselSettingsDesktop = {
    spaceBetween: 68,
    slidesPerView: 3,
    navigation: {
      nextEl: `.swiper-next-arrow-team`,
      prevEl: `.swiper-prev-arrow-team`,
    },
  };

  const carouselSettingsDesktopCategories = {
    spaceBetween: 93,
    slidesPerView: "auto",
    freeMode: true,
  };

  return (
    <div className={styles.desktopTeamWrapper}>
      <div className={styles.swiperProfessionBlock}>
        {isValidArrValue(galleryTeam) && (
          <Swiper {...carouselSettingsDesktopCategories}>
            {galleryTeam.map((teamItem) => {
              const { selectName, _id } = teamItem;
              const isActiveOption = _id === currentOption?._id;

              return (
                <SwiperSlide key={_id}>
                  <div
                    onClick={() => onChangeOption(teamItem)}
                    className={styles.currentServiceLine}
                  >
                    {isActiveOption && (
                      <StripIcon className={styles.stripIconStyles} />
                    )}

                    <Text
                      size="m"
                      className={`${styles.professionText} ${
                        isActiveOption && styles.active
                      }`}
                    >
                      {selectName}
                    </Text>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {teamArray && (
        <div className={styles.swiperTeamBlock}>
          <Swiper {...carouselSettingsDesktop}>
            {teamArray.map(
              ({ src: { asset }, _key, experience, name, profession }) => {
                return (
                  <SwiperSlide key={_key}>
                    <div className={styles.imageWrapper}>
                      <img
                        className={styles.imageTeam}
                        src={urlFor(asset)}
                        alt="Team"
                      />
                    </div>

                    <div className={styles.descriptionTeamBlock}>
                      {name && (
                        <Text
                          className={styles.teamName}
                          color="green"
                          size="m"
                        >
                          {name}
                        </Text>
                      )}
                      {profession && (
                        <Text
                          className={styles.teamDescription}
                          color="green"
                          size="xs"
                        >
                          {profession}
                        </Text>
                      )}
                      {experience && (
                        <Text
                          className={styles.teamDescription}
                          color="green"
                          size="xs"
                        >
                          Досвід роботи в роках: {experience}
                        </Text>
                      )}
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
          <div
            className={`swiper-prev-arrow-team ${styles.arrowNavigationLeft} ${styles.defaultPosition}`}
          >
            <SideArrow />
          </div>
          <div
            className={`swiper-next-arrow-team ${styles.arrowNavigationRight} ${styles.defaultPosition}`}
          >
            <SideArrow />
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopVersionTeam;
