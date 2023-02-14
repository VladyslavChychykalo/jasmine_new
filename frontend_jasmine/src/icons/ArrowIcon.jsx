import React from "react";

const ArrowIcon = (props) => {
  const { isSelected } = props;
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={isSelected ? "rotate(180)" : undefined}
      {...props}
    >
      <rect
        x="14"
        y="1.06421"
        width="9.78161"
        height="1.50486"
        rx="0.752432"
        transform="rotate(135 14 1.06421)"
        fill="#1B4332"
      />
      <rect
        width="9.78161"
        height="1.50486"
        rx="0.752432"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 7.98071 6.9165)"
        fill="#1B4332"
      />
    </svg>
  );
};

export default ArrowIcon;
