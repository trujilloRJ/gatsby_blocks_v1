import React from "react"

export default function left_arrow({ width, height, color, strC, strW }) {
  return (
    <svg
      width={width || "105"}
      height={height || "128"}
      viewBox="0 0 105 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd)">
        <path
          d="M8.54793 67.5368C3.10655 63.9855 3.10654 56.0145 8.54792 52.4632L86.581 1.53433C92.5674 -2.37271 100.5 1.92263 100.5 9.07115L100.5 110.929C100.5 118.077 92.5674 122.373 86.581 118.466L8.54793 67.5368Z"
          fill={color || "#333333"}
        />
        <path
          d="M9.36775 53.7193L87.4009 2.79047C92.3895 -0.465392 99 3.11405 99 9.07115L99 110.929C99 116.886 92.3895 120.465 87.4009 117.21L9.36775 66.2807C4.83327 63.3212 4.83327 56.6788 9.36775 53.7193Z"
          stroke={strC || "white"}
          strokeWidth={strW || "3"}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="0.466888"
          y="0.0562592"
          width="104.033"
          height="127.887"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
