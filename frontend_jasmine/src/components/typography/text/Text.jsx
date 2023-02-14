import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./scss/Text.module.scss";

const Text = (props) => {
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
    whiteSpace,
  } = props;

  const textClass = clsx(
    styles[`${Element}`],
    styles[`textSize_${size}`],
    styles[`weight_${weight}`],
    styles[`text_${transform}`],
    styles[`text_color_${color}`],
    styles[`align_${align}`],
    styles[`white_space_${whiteSpace}`],
    className
  );

  const textInline = {
    ...inlineStyles,
    letterSpacing: letterSpacing ? letterSpacing + "px" : "normal",
    lineHeight: lineHeight ? lineHeight + "px" : "normal",
    margin: `${margin}`,
  };

  return (
    <Element style={textInline} className={textClass}>
      {children}
    </Element>
  );
};

Text.propTypes = {
  as: PropTypes.oneOf(["div", "p", "span", "small", "code"]),
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "xxl"]),
  weight: PropTypes.oneOf(["normal", "light", "semibold", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  transform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize", "none"]),
  children: PropTypes.node,
  letterSpacing: PropTypes.string,
  color: PropTypes.oneOf(["base", "green", "grey", "none"]),
  margin: PropTypes.string,
  lineHeight: PropTypes.string,
  whiteSpace: PropTypes.string,
};

Text.defaultProps = {
  as: "p",
  size: "m",
  children: "",
  weight: "normal",
  align: "start",
  transform: "none",
  letterSpacing: "",
  color: "",
  margin: "0",
  lineHeight: "normal",
  whiteSpace: "none",
};

export default Text;
