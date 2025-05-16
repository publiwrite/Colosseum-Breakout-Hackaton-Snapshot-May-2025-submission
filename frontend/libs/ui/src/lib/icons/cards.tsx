import { VariantIconProps } from './helpers/icon-props';

export const CardsIcon = ({
  className,
  variant = 'twotone',
}: Partial<VariantIconProps>) => {
  const variants: { [key in VariantIconProps['variant']]: JSX.Element } = {
    twotone: (
      <svg
        className={className}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 25.2197H38"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 20.5596V34.8596C37.94 40.5596 36.3799 41.9996 30.4399 41.9996H11.5601C5.52006 41.9996 4 40.4996 4 34.5396V20.5596C4 15.1596 5.26 13.4196 10 13.1396C10.48 13.1196 11.0001 13.0996 11.5601 13.0996H30.4399C36.4799 13.0996 38 14.5996 38 20.5596Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M44 13.46V27.44C44 32.84 42.74 34.58 38 34.86V20.56C38 14.6 36.4799 13.1 30.4399 13.1H11.5601C11.0001 13.1 10.48 13.12 10 13.14C10.06 7.44 11.6201 6 17.5601 6H36.4399C42.4799 6 44 7.5 44 13.46Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M10.5 35.6201H13.9399"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M18.2207 35.6201H25.1007"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bulk: (
      <svg
        className={className}
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M32.1673 17.1337V29.0503C32.1173 33.8003 30.8173 35.0003 25.8673 35.0003H10.134C5.1007 35.0003 3.83398 33.7503 3.83398 28.7837V17.1337C3.83398 12.6337 4.88398 11.1837 8.83398 10.9503C9.23398 10.9337 9.66737 10.917 10.134 10.917H25.8673C30.9006 10.917 32.1673 12.167 32.1673 17.1337Z"
        />
        <path d="M37.1673 11.2167V22.8667C37.1673 27.3667 36.1173 28.8167 32.1673 29.05V17.1333C32.1673 12.1667 30.9006 10.9167 25.8673 10.9167H10.134C9.66737 10.9167 9.23398 10.9333 8.83398 10.95C8.88398 6.2 10.184 5 15.134 5H30.8673C35.9006 5 37.1673 6.25 37.1673 11.2167Z" />
        <path d="M12.0991 30.9336H9.23242C8.54909 30.9336 7.98242 30.3669 7.98242 29.6836C7.98242 29.0003 8.54909 28.4336 9.23242 28.4336H12.0991C12.7825 28.4336 13.3491 29.0003 13.3491 29.6836C13.3491 30.3669 12.7991 30.9336 12.0991 30.9336Z" />
        <path d="M21.4169 30.9336H15.6836C15.0003 30.9336 14.4336 30.3669 14.4336 29.6836C14.4336 29.0003 15.0003 28.4336 15.6836 28.4336H21.4169C22.1003 28.4336 22.6669 29.0003 22.6669 29.6836C22.6669 30.3669 22.1169 30.9336 21.4169 30.9336Z" />
        <path d="M32.1673 19.7666H3.83398V22.2666H32.1673V19.7666Z" />
      </svg>
    ),
  };

  return variants[variant];
};
