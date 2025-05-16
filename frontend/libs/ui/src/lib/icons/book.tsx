import { VariantIconProps } from './helpers/icon-props';

export const BookIcon = ({
  className,
  variant = 'twotone',
}: Partial<VariantIconProps>) => {
  const variants: { [key in VariantIconProps['variant']]: JSX.Element } = {
    twotone: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 16.742V4.672c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15c-1.78-1.11-4.96-2.17-7.06-2.34-1.19-.1-2.16.8-2.16 1.99v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity=".4"
          d="M12 5.488v15M7.75 8.488H5.5M8.5 11.488h-3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    bulk: (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          opacity=".4"
          d="M12 5.302v16.03c-.17 0-.35-.03-.49-.11l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04c-.96-.12-1.74-1.02-1.74-1.98V4.662c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.15.09.34.14.53.14Z"
        ></path>
        <path d="M22 4.67v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.13.08-.29.11-.47.11V5.3c.19 0 .38-.05.53-.14l.17-.11c1.78-1.12 4.97-2.19 7.07-2.37h.06c1.19-.1 2.17.79 2.17 1.99ZM7.75 9.238H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.5 12.238h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path>
      </svg>
    ),
  };

  return variants[variant];
};
