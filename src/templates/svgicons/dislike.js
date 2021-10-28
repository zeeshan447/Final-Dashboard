import React from "react";

const Dislike = ({ fill }) => {
  return (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2534 18.3188L15.3666 13.125C15.7087 12.7781 15.9029 12.3 15.9029 11.8031V2.4375C15.9029 1.40625 15.0707 0.5625 14.0536 0.5625H5.74122C5.00152 0.5625 4.33578 1.0125 4.04915 1.69688L1.03485 8.83125C0.248916 10.6875 1.58963 12.75 3.57759 12.75H8.80175L7.92335 17.0438C7.83088 17.5125 7.96958 17.9906 8.30245 18.3281C8.84798 18.8719 9.71713 18.8719 10.2534 18.3188Z"
        fill={fill ? fill : "#DFE1E6"}
      />
    </svg>
  );
};

export default Dislike;
