import { SingleIconProps } from './helpers/icon-props';

export const PageNumberIcon = ({ className }: SingleIconProps) => {
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
        d="M22 10.0004V15.0004C22 20.0004 20 22.0004 15 22.0004H9C4 22.0004 2 20.0004 2 15.0004V9.00037C2 4.00037 4 2.00037 9 2.00037H14"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10.0004H18C15 10.0004 14 9.00037 14 6.00037V2.00037L22 10.0004Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M8.32857 19.0004L9.52857 12.0004H10.2429L9.04286 19.0004H8.32857ZM5 17.059L5.11429 16.3754H10.5714L10.4571 17.059H5ZM5.75714 19.0004L6.95714 12.0004H7.67143L6.47143 19.0004H5.75714ZM5.42857 14.6254L5.54286 13.9418H11L10.8857 14.6254H5.42857Z"
        strokeWidth="0.5"
      />
    </svg>
  );
};
