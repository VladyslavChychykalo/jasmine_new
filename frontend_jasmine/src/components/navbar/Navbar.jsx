import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { LogoMobile, LogoDesktop, MenuIcon, CrossIcon } from "../../icons";
import navigationOptions from "./utils/navigationOptions";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const IconMenu = toggle ? CrossIcon : MenuIcon;

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle]);

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbarlogo}>
        <LogoMobile className={styles.logoMobile} />
        <LogoDesktop className={styles.logoDesktop} />
      </div>
      <ul className={styles.navbarLinks}>
        {navigationOptions.map(({ id, linkContainer, title }) => (
          <li key={id}>
            <a href={`#${linkContainer}`}>{title}</a>
          </li>
        ))}
      </ul>

      {/* mobile */}

      <div className={styles.navbarMenu}>
        <IconMenu
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setToggle((prev) => !prev);
          }}
        />

        {toggle && (
          <>
            <div
              className={styles.blurBackgound}
              onClick={() => setToggle(false)}
            />
            <motion.div
              className={styles.navbarSlide}
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <ul>
                {navigationOptions.map(({ id, linkContainer, title }) => (
                  <li key={id}>
                    <a
                      href={`#${linkContainer}`}
                      onClick={() => setToggle(false)}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                  marginTop: "32px",
                }}
              >
                <div
                  style={{
                    marginLeft: "20px",
                    color: "#fff",
                    border: "1px solid #fff",
                    width: "48px",
                    height: "48px",
                    fontSize: "12px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  UA
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
