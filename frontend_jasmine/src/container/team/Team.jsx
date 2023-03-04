import React, { useState } from "react";
import SwiperCore, { Pagination } from "swiper";

import MobileVersionTeam from "./components/MobileVersionTeam";
import DesktopVersionTeam from "./components/DesktopVersionTeam";
import galleryTeam from "../../data/galleryTeam";
import Heading from "../../components/typography/heading";

import styles from "./Team.module.scss";

SwiperCore.use([Pagination]);

const Team = () => {
  const [currentOption, setCurrentOption] = useState(galleryTeam[0]);

  const handleChangeOptions = (option) => {
    setCurrentOption(option);
  };

  return (
    <div id="team" className={styles.wrapper}>
      <Heading
        size="l"
        transform="uppercase"
        weight="bold"
        color="green"
        className={styles.header}
      >
        Майстри
      </Heading>

      <MobileVersionTeam
        currentOption={currentOption}
        galleryTeam={galleryTeam}
        onChangeOption={setCurrentOption}
      />

      <DesktopVersionTeam
        currentOption={currentOption}
        galleryTeam={galleryTeam}
        onChangeOption={handleChangeOptions}
      />
    </div>
  );
};

export default Team;
