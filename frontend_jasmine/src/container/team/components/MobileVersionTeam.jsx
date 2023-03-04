import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import Text from "../../../components/typography/text/Text";
import CustomSelect from "../../../components/customSelect";
import styles from "../Team.module.scss";

SwiperCore.use([Pagination]);

const MobileVersionTeam = (props) => {
  const { currentOption, galleryTeam, onChangeOption } = props;

  const carouselSettingsMobile = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className={styles.mobileTeamWrapper}>
      <CustomSelect
        currentOption={currentOption}
        options={galleryTeam}
        setCurrentOption={onChangeOption}
        className={styles.customSelect}
      />
      <Swiper {...carouselSettingsMobile}>
        {currentOption.team.map(
          ({ src, alt, id, name, profession, experience }) => {
            return (
              <SwiperSlide key={`mobile_thumb${id}`}>
                <div className={styles.imageWrapper}>
                  <img className={styles.imageTeam} src={src} alt={alt} />
                </div>

                <div className={styles.descriptionTeamBlock}>
                  {name && (
                    <Text className={styles.teamName} color="green" size="m">
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
                      {experience}
                    </Text>
                  )}
                </div>
              </SwiperSlide>
            );
          }
        )}
        <div
          className={`${
            (!currentOption?.team.length || currentOption.team.length === 1) &&
            styles.paginationHidden
          } swiper-pagination`}
        />
      </Swiper>
    </div>
  );
};

export default MobileVersionTeam;
