import { VariantIconProps } from './helpers/icon-props';

export const BagIcon = ({
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
          d="M1.66699 6.54167C1.66699 5 2.49199 4.875 3.51699 4.875H16.4837C17.5087 4.875 18.3337 5 18.3337 6.54167C18.3337 8.33333 17.5087 8.20833 16.4837 8.20833H3.51699C2.49199 8.20833 1.66699 8.33333 1.66699 6.54167Z"
          strokeWidth="1.5"
        />
        <g opacity="0.4">
          <path
            d="M7.34089 1.66669L4.32422 4.69169"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6572 1.66669L15.6739 4.69169"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.13281 11.6667V14.625"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11.9658 11.6667V14.625"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M2.91699 8.33331L4.09199 15.5333C4.35866 17.15 5.00033 18.3333 7.38366 18.3333H12.4087C15.0003 18.3333 15.3837 17.2 15.6837 15.6333L17.0837 8.33331"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
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
        <path
          opacity=".4"
          d="M19.24 5.579h-.4l-3.38-3.38a.706.706 0 0 0-.99 0c-.27.27-.27.71 0 .99l2.39 2.39H7.14l2.39-2.39c.27-.27.27-.71 0-.99a.706.706 0 0 0-.99 0l-3.37 3.38h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03.24.25.53.38.84.45.29.07.6.08.9.08h15.28c.31 0 .6-.02.88-.08.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56Z"
        ></path>
        <path d="M19.65 10.701H4.36c-.3 0-.61-.01-.9-.08l1.26 7.68c.28 1.72 1.03 3.7 4.36 3.7h5.61c3.37 0 3.97-1.69 4.33-3.58l1.51-7.8c-.28.06-.58.08-.88.08Zm-9.04 6.46c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-3.3c0-.39.31-.7.7-.7.39 0 .7.31.7.7v3.3Zm4.28 0c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-3.3c0-.39.31-.7.7-.7.39 0 .7.31.7.7v3.3Z"></path>
      </svg>
    ),
  };

  return variants[variant];
};
