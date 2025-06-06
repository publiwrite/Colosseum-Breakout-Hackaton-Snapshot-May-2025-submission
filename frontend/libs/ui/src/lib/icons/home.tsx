import { VariantIconProps } from './helpers/icon-props';

export const HomeIcon = ({
  className,
  variant = 'twotone',
}: Partial<VariantIconProps>) => {
  const variants: { [key in VariantIconProps['variant']]: JSX.Element } = {
    twotone: (
      <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.80006 16.0334C3.00006 17.2167 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2084 17.2001 16.0334L18.3084 9.40005C18.4417 8.58338 18.0251 7.49169 17.3834 6.97502L11.6084 2.35837C10.7167 1.64171 9.27506 1.6417 8.39173 2.35003L2.61673 6.97502C1.96673 7.49169 1.55006 8.58338 1.69172 9.40005L2.2584 12.8084"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99984 8.75C8.84984 8.75 7.9165 9.68333 7.9165 10.8333C7.9165 11.9833 8.84984 12.9167 9.99984 12.9167C11.1498 12.9167 12.0832 11.9833 12.0832 10.8333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bulk: (
      <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M8.70428 2.74025L8.70453 2.74006C9.40411 2.17908 10.5854 2.17761 11.2951 2.74802L11.2962 2.74885L17.0698 7.36442C17.07 7.36458 17.0702 7.36475 17.0704 7.36491C17.3053 7.55426 17.5247 7.87398 17.6694 8.2532C17.814 8.63229 17.8639 9.01831 17.8151 9.31861C17.815 9.31888 17.815 9.31915 17.8149 9.31941L16.7071 15.9494C16.7071 15.9496 16.7071 15.9499 16.707 15.9501C16.5475 16.8853 15.6136 17.675 14.6667 17.675H5.33339C4.37765 17.675 3.45268 16.8931 3.29313 15.9504C3.29311 15.9502 3.29309 15.9501 3.29307 15.95L2.18489 9.31758L2.1849 9.31758L2.18437 9.31452C2.13256 9.01589 2.18023 8.63136 2.32451 8.2532C2.46875 7.87512 2.6896 7.55577 2.92785 7.36639L2.92928 7.36524L8.70428 2.74025Z"
        />
        <path d="M11.5837 10.8333C11.5837 11.7078 10.8748 12.4167 10.0003 12.4167C9.12587 12.4167 8.41699 11.7078 8.41699 10.8333C8.41699 9.95888 9.12587 9.25 10.0003 9.25C10.8748 9.25 11.5837 9.95888 11.5837 10.8333Z" />
      </svg>
    ),
  };

  return variants[variant];
};
