import { VariantIconProps } from './helpers/icon-props';

export const ReceiptDiscountIcon = ({
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
          d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M6.26953 13.73L11.7295 8.27002"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M11.9242 13.5H11.9332"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M6.19373 8.5H6.20271"
          strokeWidth="2"
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
        <path d="M22 6.00008V8.42008C22 10.0001 21 11.0001 19.42 11.0001H16V4.01008C16 2.90008 16.91 1.99008 18.02 2.00008C19.11 2.01008 20.11 2.45008 20.83 3.17008C21.55 3.90008 22 4.90008 22 6.00008Z" />
        <path
          opacity="0.4"
          d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
        />
        <path d="M11.4316 12.0801C10.8816 12.0801 10.4316 12.5301 10.4316 13.0801C10.4316 13.6301 10.8816 14.0801 11.4316 14.0801C11.9816 14.0801 12.4316 13.6301 12.4316 13.0801C12.4316 12.5301 11.9816 12.0801 11.4316 12.0801Z" />
        <path d="M6.57031 10.0298C7.13031 10.0298 7.57031 9.57979 7.57031 9.02979C7.57031 8.47979 7.12031 8.02979 6.57031 8.02979C6.02031 8.02979 5.57031 8.47979 5.57031 9.02979C5.57031 9.57979 6.02031 10.0298 6.57031 10.0298Z" />
        <path d="M12.2609 7.73996C11.9709 7.44996 11.4909 7.44996 11.2009 7.73996L5.74094 13.2C5.45094 13.49 5.45094 13.97 5.74094 14.26C5.89094 14.41 6.08094 14.48 6.27094 14.48C6.46094 14.48 6.65094 14.41 6.80094 14.26L12.2609 8.79996C12.5509 8.50996 12.5509 8.02996 12.2609 7.73996Z" />
      </svg>
    ),
  };

  return variants[variant];
};
