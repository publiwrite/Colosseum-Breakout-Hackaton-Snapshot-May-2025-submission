import { buttonVariants, PwImage, PwLink } from '@pw-fe-monorepo/ui';
import { ColouredBackground } from '../../shared/coloured-background';
import { RegisterButton } from './register-button';

export const Hero = () => {
  return (
    <ColouredBackground>
      <div className="max-w-screen-xl container flex flex-col md:flex-row items-center gap-8 lg:gap-10 py-4 lg:py-8">
        <div className="flex-1 flex flex-col gap-4 lg:gap-6">
          <h1 className="text-4xl font-semibold">Welcome to PubliRights</h1>
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-400">
            Get started with registering and licensing your books for AI
            training.
          </p>

          <div className="flex flex-col lg:flex-row gap-3">
            <PwLink
              href={`${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/explore/licenses`}
              className={buttonVariants({ variant: 'primary' })}
            >
              Buy a license
            </PwLink>

            <RegisterButton />
          </div>
        </div>

        <div className="flex-1">
          <PwImage
            src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/rights/hero-image.png`}
            alt="Hero Image"
            width={1138}
            height={768}
            className="max-h-[384px] w-full object-contain"
          />
        </div>
      </div>
    </ColouredBackground>
  );
};
