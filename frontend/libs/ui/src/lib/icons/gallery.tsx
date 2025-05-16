import { SingleIconProps } from './helpers/icon-props';

export const GalleryIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 29.3337H20C26.6667 29.3337 29.3334 26.667 29.3334 20.0003V12.0003C29.3334 5.33366 26.6667 2.66699 20 2.66699H12C5.33335 2.66699 2.66669 5.33366 2.66669 12.0003V20.0003C2.66669 26.667 5.33335 29.3337 12 29.3337Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.3333C13.4727 13.3333 14.6666 12.1394 14.6666 10.6667C14.6666 9.19391 13.4727 8 12 8C10.5272 8 9.33331 9.19391 9.33331 10.6667C9.33331 12.1394 10.5272 13.3333 12 13.3333Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.55988 25.2661L10.1332 20.8528C11.1865 20.1461 12.7065 20.2261 13.6532 21.0394L14.0932 21.4261C15.1332 22.3194 16.8132 22.3194 17.8532 21.4261L23.3999 16.6661C24.4399 15.7728 26.1199 15.7728 27.1599 16.6661L29.3332 18.5328"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
