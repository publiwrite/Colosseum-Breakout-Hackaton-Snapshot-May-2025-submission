import { SingleIconProps } from './helpers/icon-props';

export const DocumentUploadIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M17.999 34V22L13.999 26"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 22L22 26"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M44.001 20.0001V30.0001C44.001 40.0001 40.001 44.0001 30.001 44.0001H18.001C8.00098 44.0001 4.00098 40.0001 4.00098 30.0001V18.0001C4.00098 8.00006 8.00098 4.00006 18.001 4.00006H28.001"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.001 20.0001H36.001C30.001 20.0001 28.001 18.0001 28.001 12.0001V4.00006L44.001 20.0001Z"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
