import { titleGenerator } from '@pw-fe-monorepo/configs';
import { Newsletter } from '@pw-fe-monorepo/ui';
import { Cta } from '@rights/lib/components/home/cta';
import { Featured } from '@rights/lib/components/home/featured';
import { Hero } from '@rights/lib/components/home/hero';
import { List } from '@rights/lib/components/home/list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleGenerator(
    'Licence your work for AI training | Buy a licence & train your model',
  ),
  description:
    'Grant permision to your content for AI training and get rewarded for it while keeping your IP',
  // openGraph: {
  //   images:
  //     *TO BE ADDED*,
  // },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-10 bg-white dark:bg-transparent">
      <Hero />
      <Featured />
      <List />
      <Cta />
      <div className="pt-6 lg:pt-10">
        <Newsletter
          newsletterBody="Subscribe to our newsletter to learn more about licencing for AI training and the latest PubliWrite news."
          mailchimpGroup="licences"
        />
      </div>
    </div>
  );
}
