import { VariantIconProps } from './helpers/icon-props';

export const EditIcon = ({
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
          opacity="0.4"
          d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.04 3.02L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96C22.34 6.6 22.98 5.02 20.98 3.02C18.98 1.02 17.4 1.66 16.04 3.02Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M14.91 4.15C15.58 6.54 17.45 8.41 19.85 9.09"
          strokeWidth="1.5"
          strokeMiterlimit="10"
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
          d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V8.52C21 5.06 18.93 3 15.48 3Z"
        />
        <path d="M21.02 2.98C19.23 1.18 17.48 1.14 15.64 2.98L14.51 4.1C14.41 4.2 14.38 4.34 14.42 4.47C15.12 6.92 17.08 8.88 19.53 9.58C19.56 9.59 19.61 9.59 19.64 9.59C19.74 9.59 19.84 9.55 19.91 9.48L21.02 8.36C21.93 7.45 22.38 6.58 22.38 5.69C22.38 4.79 21.93 3.9 21.02 2.98Z" />
        <path d="M17.86 10.42C17.59 10.29 17.33 10.16 17.09 10.01C16.89 9.89 16.69 9.76 16.5 9.62C16.34 9.52 16.16 9.37 15.98 9.22C15.96 9.21 15.9 9.16 15.82 9.08C15.51 8.83 15.18 8.49 14.87 8.12C14.85 8.1 14.79 8.04 14.74 7.95C14.64 7.84 14.49 7.65 14.36 7.44C14.25 7.3 14.12 7.1 14 6.89C13.85 6.64 13.72 6.39 13.6 6.13C13.47 5.85 13.37 5.59 13.28 5.34L7.89999 10.72C7.54999 11.07 7.20999 11.73 7.13999 12.22L6.70999 15.2C6.61999 15.83 6.78999 16.42 7.17999 16.81C7.50999 17.14 7.95999 17.31 8.45999 17.31C8.56999 17.31 8.67999 17.3 8.78999 17.29L11.76 16.87C12.25 16.8 12.91 16.47 13.26 16.11L18.64 10.73C18.39 10.65 18.14 10.54 17.86 10.42Z" />
      </svg>
    ),
  };

  return variants[variant];
};
