import { SingleIconProps } from './helpers/icon-props';

export const CheckIcon = ({ className }: SingleIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2559 4.41058C17.5814 4.73602 17.5814 5.26366 17.2559 5.58909L8.08926 14.7558C7.76382 15.0812 7.23618 15.0812 6.91074 14.7558L2.74408 10.5891C2.41864 10.2637 2.41864 9.73602 2.74408 9.41058C3.06951 9.08514 3.59715 9.08514 3.92259 9.41058L7.5 12.988L16.0774 4.41058C16.4028 4.08514 16.9305 4.08514 17.2559 4.41058Z"
      />
    </svg>
  );
};
