import { Button } from '@pw-fe-monorepo/ui';

export const WalletSignInLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" className="skeleton-loader">
        Wallet
      </Button>
      <Button variant="secondary" className="skeleton-loader">
        Wallet
      </Button>
      <Button variant="secondary" className="skeleton-loader">
        Wallet
      </Button>
      <Button variant="secondary" className="skeleton-loader">
        Wallet
      </Button>
    </div>
  );
};
