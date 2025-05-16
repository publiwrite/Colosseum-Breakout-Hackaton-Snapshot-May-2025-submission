import { SingleIconProps } from './helpers/icon-props';

export const DangerIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 7.5V11.6667"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99986 17.8417H4.94986C2.0582 17.8417 0.849863 15.775 2.24986 13.25L4.84986 8.56665L7.29986 4.16665C8.7832 1.49165 11.2165 1.49165 12.6999 4.16665L15.1499 8.57498L17.7499 13.2583C19.1499 15.7833 17.9332 17.85 15.0499 17.85H9.99986V17.8417Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99561 14.1667H10.0031"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
