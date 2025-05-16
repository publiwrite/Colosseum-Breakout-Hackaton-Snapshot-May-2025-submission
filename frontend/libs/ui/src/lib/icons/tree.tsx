import { SingleIconProps } from './helpers/icon-props';

export const TreeIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.1194 26.8267H20.8794C17.7327 26.8267 16.6394 24.72 18.4794 22.16L29.5994 6.58671C30.9061 4.72004 33.0928 4.72004 34.3728 6.58671L45.4927 22.16C47.3594 24.72 46.2661 26.8267 43.1194 26.8267Z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.9062 48H17.1196C12.9063 48 11.4663 45.2 13.9463 41.7867L24.5863 26.8267H39.4396L50.0796 41.7867C52.5596 45.2 51.1196 48 46.9062 48Z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M32 58.6667V48"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
