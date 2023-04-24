import React from "react";

type Props = {};

export default function BannerBG({}: Props) {
  return (
    <div className="absolute top-0 left-0 hidden w-full lg:block">
      <svg
        width="1636px"
        height="1000px"
        className="mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_359_32)">
          <path
            opacity="0.11"
            d="M0 607.406C0 607.406 100.43 847.35 401.206 798.883C701.982 750.416 843.274 808.46 938.836 913.824C1034.4 1019.19 1290.93 1008.15 1519.82 966.198C1748.72 924.243 1882.99 1007.99 1920.18 1075.64C1920.2 1075.65 1919.81 0.0269775 1919.81 0.0269775L0.0440063 0L0 607.406Z"
            fill="url(#paint0_linear_359_32)"
          />
          <path
            d="M0.0581055 607.558C0.0581055 607.558 95.3271 811.751 401.268 768.705C707.209 725.659 820.924 736.605 945.456 865.597C1069.99 994.589 1289.43 973.137 1518.37 932.663C1747.3 892.189 1878.56 1000.82 1920.16 1075.63C1920.2 1073.23 1920.08 0.00997925 1920.08 0.00997925L0.0811157 0.0209961L0.0581055 607.558Z"
            fill="url(#paint1_linear_359_32)"
          />
          <mask
            id="mask0_359_32"
            // style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1921"
            height="1076"
          >
            <path
              d="M0.0581055 607.558C0.0581055 607.558 95.3271 811.751 401.268 768.705C707.209 725.659 820.924 736.605 945.456 865.597C1069.99 994.589 1289.43 973.137 1518.37 932.663C1747.3 892.189 1878.56 1000.82 1920.16 1075.63C1920.2 1073.23 1920.08 0.00997925 1920.08 0.00997925L0.0811157 0.0209961L0.0581055 607.558Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_359_32)">
            <path
              opacity="0.14"
              d="M25.7212 687.743C25.7212 687.743 199.963 295.697 843.154 432.711C1486.35 569.725 1712.57 510.178 1899.32 -31.271"
              stroke="#361CC1"
              stroke-width="128"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_359_32"
            x1="960.092"
            y1="0"
            x2="960.092"
            y2="1075.64"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFC700" />
            <stop offset="1" stop-color="#FFDE6B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_359_32"
            x1="960.111"
            y1="0.00997925"
            x2="960.111"
            y2="1075.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFC700" />
            <stop offset="1" stop-color="#FFDE6B" />
          </linearGradient>
          <clipPath id="clip0_359_32">
            <rect width="1920.18" height="1075.64" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
