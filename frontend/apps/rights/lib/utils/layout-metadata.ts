import { titleGenerator } from '@pw-fe-monorepo/configs';
import { Metadata } from 'next';

export const layoutMetadata: Metadata = {
  title: titleGenerator(
    'Licence your work for AI training | Buy a licence & train your model | Publiwrite 📚',
  ),
  description:
    'Licensing tool powered by PubliWrite to allow licensing of work for AI training',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/common/images/favicon-light.svg`,
        href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/common/images/favicon-light.svg`,
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/common/images/favicon-dark.svg`,
        href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/common/images/favicon-dark.svg`,
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://publiwrite.com/',
    siteName: 'PubliWrite',
    images: 'https://cdn.publiwrite.com/static/common/images/meta-logo.png',
  },
  twitter: {
    site: '@PubliWrite',
  },
};
