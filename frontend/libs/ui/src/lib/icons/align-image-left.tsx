import { SingleIconProps } from './helpers/icon-props';

export const AlignImageLeftIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" fill="none" width="24" height="24" />

      <g>
        <path d="M3 5h18v2H3V5zm0 14h18v-2H3v2zm0-4h8V9H3v6zm10 0h8v-2h-8v2zm0-4h8V9h-8v2z" />
      </g>
    </svg>
  );
};
