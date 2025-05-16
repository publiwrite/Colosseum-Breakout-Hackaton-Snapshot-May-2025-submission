import { SingleIconProps } from './helpers/icon-props';

export const SortIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 7H21" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 12H18" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 17H14" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
