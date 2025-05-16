import { twMerge } from 'tailwind-merge';
import { SingleIconProps } from './helpers/icon-props';

export const EmptyIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={twMerge('w-full', className)}
      width="270"
      height="146"
      viewBox="0 0 270 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_184_5117)">
        <rect
          x="33"
          y="1"
          width="232"
          height="80"
          rx="16"
          className="fill-white dark:fill-gray-dark-700"
        />
      </g>
      <g filter="url(#filter1_d_184_5117)">
        <circle
          cx="75"
          cy="41"
          r="18"
          className="fill-gray-200 dark:fill-gray-dark-500"
        />
        <circle
          cx="75"
          cy="41"
          r="16.5"
          className="stroke-white dark:stroke-gray-dark-700"
          strokeWidth="3"
        />
      </g>
      <rect
        x="113"
        y="23"
        width="126"
        height="12"
        rx="6"
        className="fill-gray-200 dark:fill-gray-dark-500"
      />
      <rect
        x="113"
        y="47"
        width="78"
        height="12"
        rx="6"
        className="fill-gray-200 dark:fill-gray-dark-500"
      />
      <g filter="url(#filter2_dd_184_5117)">
        <rect
          x="5"
          y="57"
          width="232"
          height="80"
          rx="16"
          className="fill-white dark:fill-gray-dark-700"
        />
      </g>
      <g filter="url(#filter3_d_184_5117)">
        <circle
          cx="47"
          cy="97"
          r="18"
          className="fill-gray-200 dark:fill-gray-dark-500"
        />
        <circle
          cx="47"
          cy="97"
          r="16.5"
          className="stroke-white dark:stroke-gray-dark-700"
          strokeWidth="3"
        />
      </g>
      <rect
        x="85"
        y="79"
        width="126"
        height="12"
        rx="6"
        className="fill-gray-200 dark:fill-gray-dark-500"
      />
      <rect
        x="85"
        y="103"
        width="78"
        height="12"
        rx="6"
        className="fill-gray-200 dark:fill-gray-dark-500"
      />
      <defs>
        <filter
          id="filter0_dd_184_5117"
          x="28"
          y="0"
          width="242"
          height="90"
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
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_184_5117"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_184_5117"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_184_5117"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_184_5117"
            result="effect2_dropShadow_184_5117"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_184_5117"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_184_5117"
          x="54"
          y="20"
          width="42"
          height="42"
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
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_184_5117"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.615686 0 0 0 0 0.2 0 0 0 0 0.854902 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_184_5117"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_184_5117"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_dd_184_5117"
          x="0"
          y="56"
          width="242"
          height="90"
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
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_184_5117"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_184_5117"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_184_5117"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_184_5117"
            result="effect2_dropShadow_184_5117"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_184_5117"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_184_5117"
          x="26"
          y="76"
          width="42"
          height="42"
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
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_184_5117"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.54902 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_184_5117"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_184_5117"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
