import {
  buttonVariants,
  PwImage,
  PwLink,
  SectionHeader,
} from '@pw-fe-monorepo/ui';
import { ColouredBackground } from '../../shared/coloured-background';
import { RegisterButton } from './register-button';

export const Cta = () => {
  return (
    <ColouredBackground>
      <div className="max-w-screen-xl container flex flex-col md:flex-row items-center gap-8 lg:gap-10 py-4 lg:py-8">
        <div className="flex-1 flex flex-col gap-4 lg:gap-6">
          <SectionHeader>Register your book</SectionHeader>
          <p className="lg:text-xl text-gray-700 dark:text-gray-400">
            Fill in a few details to start the process of registering your book
            for AI training
          </p>

          <div className="flex flex-col lg:flex-row gap-3">
            <RegisterButton />

            <PwLink
              href={`${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/explore/licenses`}
              className={buttonVariants({ variant: 'secondary' })}
            >
              Explore licences
            </PwLink>
          </div>
        </div>

        <div className="flex-1">
          <PwImage
            src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/rights/cta.png`}
            alt="Hero Image"
            width={865}
            height={550}
            className="max-h-[275px] w-full object-contain"
          />
        </div>
      </div>
    </ColouredBackground>
  );
};
