import React from "react";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="34"
        height="34"
        rx="7.80054"
        fill="url(#paint0_linear_83_14)"
      />
      <path
        d="M17 22.9095H23.6482M20.2325 10.8113C20.5266 10.5172 20.9254 10.352 21.3413 10.352C21.7571 10.352 22.156 10.5172 22.45 10.8113C22.7441 11.1053 22.9093 11.5042 22.9093 11.92C22.9093 12.3359 22.7441 12.7347 22.45 13.0288L13.5784 21.9012C13.4027 22.0769 13.1854 22.2055 12.9468 22.275L10.8253 22.894C10.7617 22.9125 10.6944 22.9136 10.6302 22.8972C10.5661 22.8808 10.5075 22.8474 10.4607 22.8006C10.4139 22.7537 10.3805 22.6952 10.3641 22.6311C10.3477 22.5669 10.3488 22.4995 10.3673 22.436L10.9863 20.3145C11.0559 20.0761 11.1845 19.8592 11.3601 19.6836L20.2325 10.8113Z"
        stroke="white"
        stroke-width="1.06371"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_83_14"
          x1="17"
          y1="0"
          x2="17"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-color="#4E4E4E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
