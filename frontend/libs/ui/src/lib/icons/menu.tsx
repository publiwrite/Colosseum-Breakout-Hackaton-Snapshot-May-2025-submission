import { SingleIconProps } from './helpers/icon-props';

export const MenuIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.5 5.83337H17.5" strokeWidth="1.5" strokeLinecap="round" />
      <path
        opacity="0.34"
        d="M2.5 10H17.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M2.5 14.1666H17.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
