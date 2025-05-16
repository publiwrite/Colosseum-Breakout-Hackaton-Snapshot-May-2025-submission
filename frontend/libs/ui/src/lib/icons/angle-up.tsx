import { VariantIconProps } from './helpers/icon-props';

export const AngleUpIcon = ({
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
        <path d="M19 16C18.744 16 18.488 15.9021 18.293 15.7071L12 9.4141L5.70707 15.7071C5.31607 16.0981 4.68401 16.0981 4.29301 15.7071C3.90201 15.3161 3.90201 14.684 4.29301 14.293L11.293 7.29301C11.684 6.90201 12.3161 6.90201 12.7071 7.29301L19.7071 14.293C20.0981 14.684 20.0981 15.3161 19.7071 15.7071C19.5121 15.9021 19.256 16 19 16Z" />
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
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        />
        <path d="M15.53 14.21C15.34 14.21 15.15 14.14 15 13.99L12 10.99L9 13.99C8.71 14.28 8.23 14.28 7.94 13.99C7.65 13.7 7.65 13.22 7.94 12.93L11.47 9.4C11.76 9.11 12.24 9.11 12.53 9.4L16.06 12.93C16.35 13.22 16.35 13.7 16.06 13.99C15.91 14.14 15.72 14.21 15.53 14.21Z" />
      </svg>
    ),
  };

  return variants[variant];
};
