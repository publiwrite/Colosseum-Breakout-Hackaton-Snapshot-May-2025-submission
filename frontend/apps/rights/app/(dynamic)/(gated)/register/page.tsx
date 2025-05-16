import { Button } from '@pw-fe-monorepo/ui';
import { LicenseForm } from '@rights/lib/components/license-form';
import { ColouredBackground } from '@rights/lib/components/shared/coloured-background';
import { IPFS_URL } from '@rights/lib/constants/urls';

export default function Register() {
  return (
    <div className="flex flex-col">
      <ColouredBackground className="py-14 lg:py-28">
        <div className="container max-w-3xl mx-auto flex flex-col items-center gap-4">
          <h1 className="text-2xl lg:text-5xl text-center">
            Selling license rights on PubliRights
          </h1>
          <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-dark-400">
            By granting permission for your content to be used in training
            advanced AI models, you help shape the future of AI-driven
            creativity while retaining control over your intellectual property.
            Easily track your content’s usage and receive compensation for its
            contribution to AI development.
          </p>
        </div>
      </ColouredBackground>

      <div className="container py-14 lg:py-28">
        <div className="flex flex-col gap-6 lg:gap-14">
          <h1 className="text-2xl lg:text-5xl text-center">
            Register your book
          </h1>

          <LicenseForm />
        </div>
      </div>

      <ColouredBackground className="py-14 lg:py-28">
        <div className="container max-w-3xl mx-auto flex flex-col items-center gap-4">
          <h2 className="text-2xl lg:text-5xl text-center">Licence terms</h2>
          <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-dark-400">
            This is the official agreement issued to the buyer outlining the
            terms of the license you grant. It includes the scope of use,
            duration, attribution (if applicable), and any restrictions.
          </p>
          <a
            href={`${IPFS_URL}bafkreicg7zzn44jybpdvl2oswvymmc2hxcljbc446anexdhyfqfjhem62i`}
            target={'_blank'}
            rel={'noreferrer'}
          >
            <Button type="button">Download license agreement</Button>
          </a>
        </div>
      </ColouredBackground>
    </div>
  );
}
