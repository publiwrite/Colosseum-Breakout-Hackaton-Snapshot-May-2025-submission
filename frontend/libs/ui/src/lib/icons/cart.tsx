import { SingleIconProps } from './helpers/icon-props';

export const CartIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6H7.74001C8.82001 6 9.67 6.93 9.58 8L8.75 17.96C8.61 19.59 9.89999 20.99 11.54 20.99H22.19C23.63 20.99 24.89 19.81 25 18.38L25.54 10.88C25.66 9.22 24.4 7.87 22.73 7.87H9.82001"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M20.25 26C20.9404 26 21.5 25.4404 21.5 24.75C21.5 24.0596 20.9404 23.5 20.25 23.5C19.5596 23.5 19 24.0596 19 24.75C19 25.4404 19.5596 26 20.25 26Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M12.25 26C12.9404 26 13.5 25.4404 13.5 24.75C13.5 24.0596 12.9404 23.5 12.25 23.5C11.5596 23.5 11 24.0596 11 24.75C11 25.4404 11.5596 26 12.25 26Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M13 12H25"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
