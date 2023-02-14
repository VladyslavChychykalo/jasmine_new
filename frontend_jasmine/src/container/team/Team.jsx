import React, { useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomSelect from "../../components/customSelect";
import galleryTeam from "../../data/galleryTeam";
import Heading from "../../components/typography/heading";
import Text from "../../components/typography/text";

import styles from "./Team.module.scss";

SwiperCore.use([Pagination]);

const Team = () => {
  const [currentOption, setCurrentOption] = useState(galleryTeam[0]);

  const carouselSettings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div id="team" className={styles.wrapper}>
      <Heading
        size="l"
        letterSpacing="4"
        transform="uppercase"
        margin="0 0 20px 0"
        weight="bold"
        color="green"
      >
        Майстри
      </Heading>
      <CustomSelect
        currentOption={currentOption}
        options={galleryTeam}
        setCurrentOption={setCurrentOption}
        className={styles.customSelect}
      />
      <Swiper {...carouselSettings}>
        {currentOption.team.map(
          ({ src, alt, id, name, profession, experience }) => {
            return (
              <SwiperSlide key={`mobile_thumb${id}`}>
                <div className={styles.imageWrapper}>
                  <img className={styles.imageTeam} src={src} alt={alt} />
                </div>

                <div className={styles.descriptionTeamBlock}>
                  <Text color="green" letterSpacing="4" size="m">
                    {name}
                  </Text>
                  <Text
                    color="green"
                    letterSpacing="2"
                    margin="12px 0 0 0"
                    size="xs"
                  >
                    {profession}
                  </Text>
                  <Text
                    color="green"
                    letterSpacing="2"
                    margin="5px 0 0 0"
                    size="xs"
                  >
                    {experience}
                  </Text>
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

export default Team;
