import { SingleIconProps } from './helpers/icon-props';

export const BoxIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M8.45312 19.84L31.9998 33.4666L55.3864 19.9199"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 57.6266V33.4399"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.4801 6.61334L12.2402 14.5334C9.01349 16.3201 6.37354 20.8 6.37354 24.48V39.5468C6.37354 43.2268 9.01349 47.7067 12.2402 49.4934L26.4801 57.4135C29.5201 59.0935 34.5068 59.0935 37.5468 57.4135L51.7869 49.4934C55.0135 47.7067 57.6535 43.2268 57.6535 39.5468V24.48C57.6535 20.8 55.0135 16.3201 51.7869 14.5334L37.5468 6.61334C34.4801 4.90668 29.5201 4.90668 26.4801 6.61334Z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M45.3325 35.3066V25.5467L20.0259 10.9333"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
