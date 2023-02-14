import React from "react";

const Marker = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 14.3438C15.364 14.3438 16.875 12.8327 16.875 10.9688C16.875 9.10479 15.364 7.59375 13.5 7.59375C11.636 7.59375 10.125 9.10479 10.125 10.9688C10.125 12.8327 11.636 14.3438 13.5 14.3438Z"
        stroke="#1B4332"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9375 10.9688C21.9375 18.5625 13.5 24.4688 13.5 24.4688C13.5 24.4688 5.0625 18.5625 5.0625 10.9688C5.0625 8.73099 5.95145 6.58487 7.53379 5.00254C9.11612 3.4202 11.2622 2.53125 13.5 2.53125C15.7378 2.53125 17.8839 3.4202 19.4662 5.00254C21.0486 6.58487 21.9375 8.73099 21.9375 10.9688V10.9688Z"
        stroke="#1B4332"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Marker;
