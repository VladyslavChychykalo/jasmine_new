import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import { client } from "../../client";

import MobileVersionTeam from "./components/MobileVersionTeam";
import DesktopVersionTeam from "./components/DesktopVersionTeam";
// import galleryTeam from "../../data/galleryTeam";
import Heading from "../../components/typography/heading";

import styles from "./Team.module.scss";

SwiperCore.use([Pagination]);

const Team = () => {
  const [team, setTeam] = useState({});
  const [currentOption, setCurrentOption] = useState({});

  useEffect(() => {
    const query = '*[_type == "team"]';

    client.fetch(query).then((data) => {
      setTeam(data);
      setCurrentOption(data[0]);
    });
  }, []);

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
        galleryTeam={team}
        onChangeOption={setCurrentOption}
      />

      <DesktopVersionTeam
        currentOption={currentOption}
        galleryTeam={team}
        onChangeOption={handleChangeOptions}
      />
    </div>
  );
};

export default Team;
