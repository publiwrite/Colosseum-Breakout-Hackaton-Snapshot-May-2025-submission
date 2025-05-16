import { VariantIconProps } from './helpers/icon-props';

export const RepeatIcon = ({
  className,
  variant = 'twotone',
}: Partial<VariantIconProps>) => {
  const variants: { [key in VariantIconProps['variant']]: JSX.Element } = {
    twotone: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g opacity=".4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M3.58 5.16h13.84c1.66 0 3 1.34 3 3v3.32"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M6.74 2L3.58 5.16l3.16 3.16"
          ></path>
        </g>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M20.42 18.84H6.58c-1.66 0-3-1.34-3-3v-3.32"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M17.26 22l3.16-3.16-3.16-3.16"
        ></path>
      </svg>
    ),
    bulk: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M17.42 4.41H5.39l1.88-1.88c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0L3.05 4.63a.776.776 0 00-.22.53.776.776 0 00.22.53l3.16 3.16c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L5.39 5.91h12.03c1.24 0 2.25 1.01 2.25 2.25v3.32c0 .41.34.75.75.75s.75-.34.75-.75V8.16c0-2.07-1.68-3.75-3.75-3.75z"></path>
        <path
          d="M21.17 18.84a.776.776 0 00-.22-.53l-3.16-3.16a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.88 1.88H6.58c-1.24 0-2.25-1.01-2.25-2.25v-3.32c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.32c0 2.07 1.68 3.75 3.75 3.75h12.03l-1.88 1.88c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.16-3.16a.776.776 0 00.22-.53z"
          opacity=".4"
        ></path>
      </svg>
    ),
  };

  return variants[variant];
};
