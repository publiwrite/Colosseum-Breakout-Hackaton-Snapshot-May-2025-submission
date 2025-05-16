import { VariantIconProps } from './helpers/icon-props';

export const MessageTextIcon = ({
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
          d="M17 38H16C8 38 4 36 4 26V16C4 8 8 4 16 4H32C40 4 44 8 44 16V26C44 34 40 38 32 38H31C30.38 38 29.78 38.3 29.4 38.8L26.4 42.8C25.08 44.56 22.92 44.56 21.6 42.8L18.6 38.8C18.28 38.36 17.54 38 17 38Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M14 16H34"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M14 26H26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bulk: (
      <svg
        className={className}
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M3.83398 21.6163V11.6497C3.83398 7.04967 7.56732 3.33301 12.1673 3.33301H28.834C33.434 3.33301 37.1673 7.04967 37.1673 11.6497V23.283C37.1673 27.8663 33.434 31.583 28.834 31.583H26.334C25.8173 31.583 25.3173 31.833 25.0007 32.2497L22.5007 35.5663C21.4007 37.033 19.6007 37.033 18.5007 35.5663L16.0007 32.2497C15.734 31.883 15.134 31.583 14.6673 31.583H12.1673C7.56732 31.583 3.83398 27.8663 3.83398 23.283V21.6163Z"
        />
        <path d="M28.8327 14.583H12.166C11.4827 14.583 10.916 14.0163 10.916 13.333C10.916 12.6497 11.4827 12.083 12.166 12.083H28.8327C29.516 12.083 30.0827 12.6497 30.0827 13.333C30.0827 14.0163 29.516 14.583 28.8327 14.583Z" />
        <path d="M22.166 22.917H12.166C11.4827 22.917 10.916 22.3503 10.916 21.667C10.916 20.9837 11.4827 20.417 12.166 20.417H22.166C22.8493 20.417 23.416 20.9837 23.416 21.667C23.416 22.3503 22.8493 22.917 22.166 22.917Z" />
      </svg>
    ),
  };

  return variants[variant];
};
