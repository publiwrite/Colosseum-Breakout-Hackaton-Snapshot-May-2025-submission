import { SingleIconProps } from './helpers/icon-props';

export const HorizontalLayoutIcon = ({ className }: SingleIconProps) => {
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
        d="M7.50008 18.3332H12.5001C16.6667 18.3332 18.3334 16.6665 18.3334 12.4998V7.49984C18.3334 3.33317 16.6667 1.6665 12.5001 1.6665H7.50008C3.33341 1.6665 1.66675 3.33317 1.66675 7.49984V12.4998C1.66675 16.6665 3.33341 18.3332 7.50008 18.3332Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.4">
        <path
          d="M8.33325 1.6665V18.3332"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33325 7.08301H18.3333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33325 12.9165H18.3333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
