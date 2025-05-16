import { SingleIconProps } from './helpers/icon-props';

export const AlignImageCenterIcon = ({ className }: SingleIconProps) => {
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
        <path d="M3 5h18v2H3V5zm0 14h18v-2H3v2zm5-4h8V9H8v6z" />
      </g>
    </svg>
  );
};
