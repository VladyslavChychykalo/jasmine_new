import React from "react";

const CrossIcon = (props) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1.41431"
        width="33"
        height="2"
        transform="rotate(45 1.41431 0)"
        fill="white"
      />
      <rect
        y="23.3345"
        width="33"
        height="2"
        transform="rotate(-45 0 23.3345)"
        fill="white"
      />
    </svg>
  );
};

export default CrossIcon;
