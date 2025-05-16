import { VariantIconProps } from './helpers/icon-props';

export const SolanaIcon = ({
  className,
  variant = 'twotone',
}: Partial<VariantIconProps>) => {
  const variants: { [key in VariantIconProps['variant']]: JSX.Element } = {
    twotone: (
      <svg
        className={className}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.0003 7H11.0003C10.3803 7 9.78036 7.3 9.40036 7.8L6.40036 11.8C5.42036 13.12 6.36033 15 8.00033 15H37.0003C37.6203 15 38.2203 14.7 38.6003 14.2L41.6003 10.2C42.5803 8.88 41.6403 7 40.0003 7Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.4"
          d="M8.00033 20H37.0003C37.6203 20 38.2203 20.3 38.6003 20.8L41.6003 24.8C42.5803 26.12 41.6403 28 40.0003 28H11.0003C10.3803 28 9.78036 27.7 9.40036 27.2L6.40036 23.2C5.42036 21.88 6.36033 20 8.00033 20Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M40.0003 33H11.0003C10.3803 33 9.78036 33.3 9.40036 33.8L6.40036 37.8C5.42036 39.12 6.36033 41 8.00033 41H37.0003C37.6203 41 38.2203 40.7 38.6003 40.2L41.6003 36.2C42.5803 34.88 41.6403 33 40.0003 33Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </svg>
    ),
    bulk: (
      <svg
        className={className}
        width="41"
        height="32"
        viewBox="0 0 41 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2213_4499)">
          <path
            d="M6.99743 24.0164C7.23882 23.7741 7.57073 23.6328 7.92275 23.6328H39.8463C40.4297 23.6328 40.7213 24.3395 40.309 24.7534L34.0027 31.0831C33.7613 31.3253 33.4294 31.4667 33.0774 31.4667H1.15383C0.570479 31.4667 0.278802 30.76 0.691173 30.3461L6.99743 24.0164Z"
            fill="url(#paint0_linear_2213_4499)"
          />
          <path
            d="M6.99743 0.383617C7.24888 0.141332 7.58079 0 7.92275 0H39.8463C40.4297 0 40.7213 0.706662 40.309 1.12056L34.0027 7.45024C33.7613 7.69252 33.4294 7.83386 33.0774 7.83386H1.15383C0.570479 7.83386 0.278802 7.12719 0.691173 6.71329L6.99743 0.383617Z"
            fill="url(#paint1_linear_2213_4499)"
          />
          <path
            d="M34.0027 12.1239C33.7613 11.8816 33.4294 11.7402 33.0774 11.7402H1.15383C0.570479 11.7402 0.278802 12.4469 0.691173 12.8608L6.99743 19.1905C7.23882 19.4328 7.57073 19.5741 7.92275 19.5741H39.8463C40.4297 19.5741 40.7213 18.8674 40.309 18.4535L34.0027 12.1239Z"
            fill="url(#paint2_linear_2213_4499)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2213_4499"
            x1="36.7967"
            y1="-3.78118"
            x2="14.5741"
            y2="38.6266"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00FFA3" />
            <stop offset="1" stopColor="#DC1FFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2213_4499"
            x1="27.1361"
            y1="-8.84352"
            x2="4.91353"
            y2="33.5643"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00FFA3" />
            <stop offset="1" stopColor="#DC1FFF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2213_4499"
            x1="31.9357"
            y1="-6.32892"
            x2="9.71305"
            y2="36.0789"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00FFA3" />
            <stop offset="1" stopColor="#DC1FFF" />
          </linearGradient>
          <clipPath id="clip0_2213_4499">
            <rect
              width="40"
              height="31.4667"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return variants[variant];
};
