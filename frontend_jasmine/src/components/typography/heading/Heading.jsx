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
    letterSpacing,
    lineHeight,
    color,
    margin,
    className,
    inlineStyles,
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

  // const headingInline = {
  //   ...inlineStyles,
  //   letterSpacing: letterSpacing ? letterSpacing + "px" : "normal",
  //   lineHeight: lineHeight ? lineHeight + "px" : "normal",
  //   margin: `${margin}`,
  // };

  return (
    <Element
      //  style={headingInline}
      className={headingClass}
    >
      {children}
    </Element>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.oneOf(["s", "m", "l", "xl", "xxl"]),
  weight: PropTypes.oneOf(["normal", "light", "semibold", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  transform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize", "none"]),
  children: PropTypes.node,
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.oneOf(["base", "green", "grey", "none"]),
  margin: PropTypes.string,
};

Heading.defaultProps = {
  as: "h1",
  size: "m",
  children: "",
  weight: "normal",
  align: "start",
  transform: "none",
  letterSpacing: "",
  lineHeight: "",
  color: "none",
  margin: "0",
};

export default Heading;
