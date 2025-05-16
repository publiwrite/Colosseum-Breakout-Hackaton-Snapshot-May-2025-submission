import { SectionHeader } from '@pw-fe-monorepo/ui';
import { FeaturedBox } from './featured-box';

export const Featured = () => {
  return (
    <div className="bg-white dark:bg-transparent py-12 lg:py-24">
      <div className="container flex flex-col items-center gap-6 lg:gap-10">
        <div className="max-w-screen-md flex flex-col items-center gap-4">
          <SectionHeader className="text-center">
            Why licence a book for AI?
          </SectionHeader>
          <p className="text-center lg:text-lg text-gray-700 dark:text-gray-400">
            By granting permission for your content to be used in training
            advanced AI models, you help shape the future of AI-driven
            creativity while retaining control over your intellectual property.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <FeaturedBox
            className="flex-1"
            title="Passive income stream"
            description="Turn your published work into a long-term revenue stream by licensing it for AI training. Once listed, your book can generate income with no extra effort."
            image={`${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/rights/featured-1.png`}
          />
          <FeaturedBox
            className="flex-1"
            title="IP Protection"
            description="Protect your intellectual property while empowering AI innovation."
            image={`${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/rights/featured-2.png`}
          />
          <FeaturedBox
            className="flex-1"
            title="Global exposure"
            description="Expose your work to a new audience of AI developers and tech innovators"
            image={`${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/rights/featured-3.png`}
          />
        </div>
      </div>
    </div>
  );
};
