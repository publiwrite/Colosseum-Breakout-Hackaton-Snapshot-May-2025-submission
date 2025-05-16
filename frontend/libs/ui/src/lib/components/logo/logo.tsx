import { twMerge } from 'tailwind-merge';
import { PwLink } from '../pw-link';

export const Logo = () => {
  return (
    <PwLink
      href="/"
      style={{
        ['--logo' as any]: `url(${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/common/images/logo-web-light.svg)`,
        ['--logo-dark' as any]: `url(${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/common/images/logo-web-dark.svg)`,
      }}
      className={twMerge(
        'block w-screen h-screen max-w-[90px] max-h-[20px] lg:max-w-[140px] lg:max-h-[32px]',
        'bg-[image:var(--logo)] dark:bg-[image:var(--logo-dark)] bg-no-repeat bg-cover bg-left-top',
      )}
    />
  );
};
