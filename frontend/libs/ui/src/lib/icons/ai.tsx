import { SingleIconProps } from './helpers/icon-props';

export const AiIcon = ({ className }: SingleIconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.93673 3.21217C7.07335 2.65876 7.86006 2.65876 7.99669 3.21217C8.57986 5.57437 10.4243 7.41874 12.7865 8.00187C13.3399 8.13848 13.3399 8.92522 12.7865 9.06184C10.4243 9.64497 8.57986 11.4893 7.99669 13.8515C7.86006 14.4049 7.07335 14.4049 6.93673 13.8515C6.35356 11.4893 4.50914 9.64497 2.14693 9.06184C1.59351 8.92522 1.59351 8.13848 2.14693 8.00187C4.50914 7.41874 6.35356 5.57437 6.93673 3.21217Z"
        fill="url(#paint0_linear_209_7213)"
      />
      <path
        d="M12.7633 0.868917C12.8186 0.644921 13.137 0.644921 13.1923 0.868917C13.4284 1.82505 14.1749 2.57158 15.131 2.80761C15.3551 2.8629 15.3551 3.18135 15.131 3.23664C14.1749 3.47267 13.4284 4.2192 13.1923 5.17533C13.137 5.39933 12.8186 5.39933 12.7633 5.17533C12.5272 4.2192 11.7807 3.47267 10.8246 3.23664C10.6006 3.18135 10.6006 2.8629 10.8246 2.80761C11.7807 2.57158 12.5272 1.82505 12.7633 0.868917Z"
        fill="url(#paint1_linear_209_7213)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_209_7213"
          x1="7.46671"
          y1="1.06543"
          x2="7.46671"
          y2="15.9983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D388FF" />
          <stop offset="1" stopColor="#3190FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_209_7213"
          x1="12.9778"
          y1="0"
          x2="12.9778"
          y2="6.04425"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D388FF" />
          <stop offset="1" stopColor="#3190FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
