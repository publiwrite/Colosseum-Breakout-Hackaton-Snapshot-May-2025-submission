import { SingleIconProps } from './helpers/icon-props';

export const TextIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66992 7.17113V5.35113C2.66992 4.20113 3.59992 3.28113 4.73992 3.28113H19.2599C20.4099 3.28113 21.3299 4.21113 21.3299 5.35113V7.17113"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M12 20.7211V4.11108"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.06006 20.7211H15.9401"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
