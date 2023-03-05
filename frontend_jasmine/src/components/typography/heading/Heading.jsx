import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./scss/Heading.module.scss";

const Heading = (props) => {
  const {
    as: Element,
    size,
    weight,
    align,
    transform,
    children,
    color,
    className,
  } = props;

  const headingClass = clsx(
    styles[`${Element}`],
    styles[`textSize_${size}`],
    styles[`weight_${weight}`],
    styles[`text_${transform}`],
    styles[`text_color_${color}`],
    styles[`align_${align}`],
    className
  );

  return <Element className={headingClass}>{children}</Element>;
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.oneOf(["s", "m", "l", "xl", "xxl"]),
  weight: PropTypes.oneOf(["normal", "light", "semibold", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  transform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize", "none"]),
  children: PropTypes.node,
  color: PropTypes.oneOf(["base", "green", "grey", "none"]),
};

Heading.defaultProps = {
  as: "h1",
  size: "m",
  children: "",
  weight: "normal",
  align: "start",
  transform: "none",
  color: "none",
};

export default Heading;
