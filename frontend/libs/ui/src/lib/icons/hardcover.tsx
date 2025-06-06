import { VariantIconProps } from './helpers/icon-props';

export const HardcoverIcon = ({
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
          d="M22 16.7402V4.67019C22 3.47019 21.02 2.58019 19.83 2.68019H19.77C17.67 2.86019 14.48 3.93019 12.7 5.05019L12.53 5.16019C12.24 5.34019 11.76 5.34019 11.47 5.16019L11.22 5.01019C9.44 3.90019 6.26 2.84019 4.16 2.67019C2.97 2.57019 2 3.47019 2 4.66019V16.7402C2 17.7002 2.78 18.6002 3.74 18.7202L4.03 18.7602C6.2 19.0502 9.55 20.1502 11.47 21.2002L11.51 21.2202C11.78 21.3702 12.21 21.3702 12.47 21.2202C14.39 20.1602 17.75 19.0502 19.93 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M12 5.49023V20.4902"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M7.75 8.49023H5.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M8.5 11.4902H5.5"
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
        <path
          opacity="0.4"
          d="M12 5.30019V21.3302C11.83 21.3302 11.65 21.3002 11.51 21.2202L11.47 21.2002C9.55 20.1502 6.2 19.0502 4.03 18.7602L3.74 18.7202C2.78 18.6002 2 17.7002 2 16.7402V4.66019C2 3.47019 2.97 2.57019 4.16 2.67019C6.26 2.84019 9.44 3.90019 11.22 5.01019L11.47 5.16019C11.62 5.25019 11.81 5.30019 12 5.30019Z"
        />
        <path d="M22 4.67003V16.74C22 17.7 21.22 18.6 20.26 18.72L19.93 18.76C17.75 19.05 14.39 20.16 12.47 21.22C12.34 21.3 12.18 21.33 12 21.33V5.30003C12.19 5.30003 12.38 5.25003 12.53 5.16003L12.7 5.05003C14.48 3.93003 17.67 2.86003 19.77 2.68003H19.83C21.02 2.58003 22 3.47003 22 4.67003Z" />
        <path d="M7.75 9.24023H5.5C5.09 9.24023 4.75 8.90023 4.75 8.49023C4.75 8.08023 5.09 7.74023 5.5 7.74023H7.75C8.16 7.74023 8.5 8.08023 8.5 8.49023C8.5 8.90023 8.16 9.24023 7.75 9.24023Z" />
        <path d="M8.5 12.2402H5.5C5.09 12.2402 4.75 11.9002 4.75 11.4902C4.75 11.0802 5.09 10.7402 5.5 10.7402H8.5C8.91 10.7402 9.25 11.0802 9.25 11.4902C9.25 11.9002 8.91 12.2402 8.5 12.2402Z" />
      </svg>
    ),
  };

  return variants[variant];
};
