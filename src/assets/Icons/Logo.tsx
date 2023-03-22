import React from "react";

type Props = {
  size: string;
};

export default function Logo({ size }: Props) {
  return (
    <svg
      width={size}
      viewBox="0 0 452 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 59C0 26.4152 26.4152 0 59 0H381C413.585 0 440 26.4152 440 59V375C440 407.585 413.585 434 381 434H59C26.4152 434 0 407.585 0 375V59Z"
        fill="#192939"
      />
      <g filter="url(#filter0_d_8_946)">
        <rect x="46" y="41" width="394" height="394" rx="59" fill="white" />
        <path
          d="M197.852 332H135.636L205.733 119.636H284.54L354.636 332H292.42L245.966 178.119H244.307L197.852 332ZM186.239 248.216H303.205V291.352H186.239V248.216Z"
          fill="#192939"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_8_946"
          x="34"
          y="29"
          width="418"
          height="418"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8_946"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_8_946"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
