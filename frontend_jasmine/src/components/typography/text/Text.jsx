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
    color,
    className,
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

  return <Element className={textClass}>{children}</Element>;
};

Text.propTypes = {
  as: PropTypes.oneOf(["div", "p", "span", "small", "code"]),
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl", "xxl"]),
  weight: PropTypes.oneOf(["normal", "light", "semibold", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  transform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize", "none"]),
  children: PropTypes.node,
  color: PropTypes.oneOf(["base", "green", "grey", "none"]),
  whiteSpace: PropTypes.string,
};

Text.defaultProps = {
  as: "p",
  size: "m",
  children: "",
  weight: "normal",
  align: "start",
  transform: "none",
  color: "",
  whiteSpace: "none",
};

export default Text;
