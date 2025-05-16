import { VariantIconProps } from './helpers/icon-props';

export const MoonIcon = ({
  className,
  variant = 'twotone',
}: Partial<VariantIconProps>) => {
  const variants: { [key in VariantIconProps['variant']]: JSX.Element } = {
    twotone: (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.03 12.42C2.39 17.57 6.76 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 9 11.97 8.98 7.14C8.97 5.84 9.24 4.61 9.73 3.49C10.27 2.25 9.62 1.66 8.37 2.19C4.41 3.86 1.7 7.85 2.03 12.42Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bulk: (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 19C9 19.84 9.13 20.66 9.37 21.42C5.53 20.09 2.63 16.56 2.33 12.43C2.03 8.03999 4.56 3.93999 8.65 2.21999C9.71 1.77999 10.25 2.09999 10.48 2.32999C10.7 2.54999 11.01 3.07999 10.57 4.08999C10.12 5.12999 9.9 6.22999 9.9 7.36999C9.91 9.40999 10.71 11.3 12.01 12.75C10.18 14.21 9 16.47 9 19Z" />
        <path
          opacity="0.4"
          d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z"
        />
      </svg>
    ),
  };

  return variants[variant];
};
