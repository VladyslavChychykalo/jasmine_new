import React from "react";

const SideArrow = (props) => {
  return (
    <svg
      width="11"
      height="37"
      viewBox="0 0 11 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="20"
        height="2"
        transform="matrix(0.422618 -0.906308 -0.906308 -0.422618 1.81261 18.9714)"
        fill="#1B4332"
      />
      <rect
        x="1.81264"
        y="17.4226"
        width="20"
        height="2"
        transform="rotate(65 1.81264 17.4226)"
        fill="#1B4332"
      />
    </svg>
  );
};

export default SideArrow;
