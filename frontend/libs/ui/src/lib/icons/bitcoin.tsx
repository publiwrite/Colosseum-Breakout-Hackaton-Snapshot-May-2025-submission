import { VariantIconProps } from './helpers/icon-props';

export const BitcoinIcon = ({
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
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <g opacity="0.4">
          <path
            d="M17.5586 15.3398H28.3986C30.7986 15.3398 32.7386 17.4998 32.7386 19.6798C32.7386 22.0798 30.7986 24.0198 28.3986 24.0198H17.5586V15.3398Z"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5586 24H29.9386C32.6786 24 34.8986 25.94 34.8986 28.34C34.8986 30.74 32.6786 32.68 29.9386 32.68H17.5586V24Z"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.1406 32.6602V37.0002"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.7402 32.6602V37.0002"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.1406 11V15.34"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.7402 11V15.34"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6796 15.3398H14.0996"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6796 32.6602H14.0996"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
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
          d="M20.5007 36.6663C29.7054 36.6663 37.1673 29.2044 37.1673 19.9997C37.1673 10.7949 29.7054 3.33301 20.5007 3.33301C11.2959 3.33301 3.83398 10.7949 3.83398 19.9997C3.83398 29.2044 11.2959 36.6663 20.5007 36.6663Z"
        />
        <path d="M27.9833 19.3503C28.6167 18.5337 29.0167 17.5003 29.0167 16.3837C29.0167 13.8003 26.75 11.517 24.15 11.517H22.6833V9.16699C22.6833 8.48366 22.1167 7.91699 21.4333 7.91699C20.75 7.91699 20.1833 8.48366 20.1833 9.16699V11.5337H18.55H18.1667V9.16699C18.1667 8.48366 17.6 7.91699 16.9167 7.91699C16.2333 7.91699 15.7 8.48366 15.7 9.16699V11.5337H15.1333H12.25C11.5667 11.5337 11 12.1003 11 12.7837C11 13.467 11.5667 14.0337 12.25 14.0337H13.8833V20.0003V25.967H12.25C11.5667 25.967 11 26.5337 11 27.217C11 27.9003 11.5667 28.467 12.25 28.467H15.1333H15.6833V30.8337C15.6833 31.517 16.25 32.0837 16.9333 32.0837C17.6167 32.0837 18.1833 31.517 18.1833 30.8337V28.467H18.5667H20.2V30.8337C20.2 31.517 20.7667 32.0837 21.45 32.0837C22.1333 32.0837 22.7 31.517 22.7 30.8337V28.467H25.45C28.4167 28.467 30.8333 26.2837 30.8333 23.6003C30.8333 21.767 29.6667 20.167 27.9833 19.3503ZM18.5667 14.0337H24.1667C25.5 14.0337 26.5333 15.3003 26.5333 16.4003C26.5333 17.7003 25.4667 18.767 24.1667 18.767H16.3833V14.0337H18.5667ZM25.45 25.967H18.5667H16.3833V21.2503H24.1667H25.45C27.0333 21.2503 28.3333 22.317 28.3333 23.617C28.3333 24.917 27.0333 25.967 25.45 25.967Z" />
      </svg>
    ),
  };

  return variants[variant];
};
