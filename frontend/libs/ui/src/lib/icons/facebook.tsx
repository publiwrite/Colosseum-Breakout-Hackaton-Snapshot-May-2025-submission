import { SingleIconProps } from './helpers/icon-props';

export const FacebookIcon = ({ className }: SingleIconProps) => {
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
        opacity="0.4"
        d="M14 9.29999V12.25H16.63C16.82 12.25 16.96 12.42 16.92 12.61L16.54 14.51C16.51 14.65 16.39 14.75 16.25 14.75H14V22H11V14.75H9.29999C9.12999 14.75 9 14.62 9 14.45V12.55C9 12.38 9.12999 12.25 9.29999 12.25H11V9C11 7.34 12.34 6 14 6H16.7C16.87 6 17 6.12999 17 6.29999V8.70001C17 8.87001 16.87 9 16.7 9H14.3C14.13 9 14 9.12999 14 9.29999Z"
        className="fill-[#0C0C0C] dark:fill-[#fff]"
      />
      <path
        d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
