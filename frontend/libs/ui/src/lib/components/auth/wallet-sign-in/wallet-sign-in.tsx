'use client';

import { useLazyQuery } from '@apollo/client';
import {
  GET_WALLET_MESSAGE_QUERY,
  NextAuthProviders,
} from '@pw-fe-monorepo/configs';
import {
  Button,
  buttonVariants,
  PwImage,
  useMounted,
} from '@pw-fe-monorepo/ui';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { getCsrfToken, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { WalletSignInLoading } from './wallet-sign-in-loading';

export const WalletSignIn = ({ callbackUrl }: { callbackUrl?: string }) => {
  const mounted = useMounted();
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const [getWalletMessage] = useLazyQuery(GET_WALLET_MESSAGE_QUERY);
  const wallet = useWallet();

  const detectedWallets = wallet.wallets.filter(
    ({ readyState }) => readyState === 'Installed' || readyState === 'Loadable',
  );
  const undetectedWallets = wallet.wallets.filter(
    ({ readyState }) => readyState === 'NotDetected',
  );

  /**
   * Keep the loading state clean, some `Loadable` wallets does not fall into
   * callback function, it only changes the `connected` property hence
   * we handle all loading state via here
   */
  useEffect(() => {
    if (!wallet.disconnecting && !wallet.connected && !wallet.connecting) {
      setLoading({});
    }
  }, [wallet.disconnecting, wallet.connected, wallet.connecting]);

  useEffect(() => {
    const signMessage = async () => {
      if (!wallet.connected || !wallet.publicKey) {
        return;
      }

      if (!(await getCsrfToken())) {
        toast.error('CSRF There is a problem, try again later');
        setLoading({});
        return;
      }

      const { data: walletMessageData } = await getWalletMessage();
      if (!walletMessageData) {
        setLoading({});
        return;
      }

      const publicKey = wallet.publicKey?.toBase58();
      const domain = window.location.host;

      /**
       * If new way of signing in is supported by the selected wallet
       */
      if (wallet.signIn) {
        const input = {
          address: wallet.publicKey.toBase58(),
          statement: walletMessageData.walletMessage.statement,
          nonce: walletMessageData.walletMessage.nonce,
          domain,
        };

        try {
          const output = await wallet.signIn(input);

          const signInResponse = await signIn(NextAuthProviders.SOLANA_WALLET, {
            redirect: !!callbackUrl,
            serializedSignature: bs58.encode(output.signature),
            serializedSignedMessage: bs58.encode(output.signedMessage),
            publicKey: bs58.encode(output.account.publicKey),
            chains: output.account.chains,
            features: output.account.features,
            domain,
            callbackUrl,
          });

          if (!signInResponse || !signInResponse.ok) {
            toast.error('There is a problem');
            await wallet.disconnect();
            setLoading({});
            return;
          }

          await wallet.disconnect();
        } catch (err) {
          const error = err as Error;
          await wallet.disconnect();
          setLoading({});
          toast.warning(`${error.message}`);
        }

        return;
      }

      /**
       * If new method has not been supported by the selected wallet,
       * fallback to legacy method
       */
      if (wallet.signMessage) {
        const encodedMessage = new TextEncoder().encode(
          walletMessageData.walletMessage.message,
        );

        try {
          const signedMessage = await wallet.signMessage(encodedMessage);
          const serializedSignedMessage = bs58.encode(signedMessage);

          const signInResponse = await signIn(
            NextAuthProviders.SOLANA_WALLET_LEGACY,
            {
              redirect: !!callbackUrl,
              serializedSignedMessage,
              publicKey,
              callbackUrl,
            },
          );

          if (!signInResponse || !signInResponse.ok) {
            toast.error('There is a problem');
            await wallet.disconnect();
            setLoading({});
            return;
          }

          await wallet.disconnect();
        } catch (err) {
          const error = err as Error;
          await wallet.disconnect();
          setLoading({});
          toast.error(error.message);
        }

        return;
      }
    };

    signMessage();
  }, [wallet.connected]);

  if (!mounted) {
    return <WalletSignInLoading />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {detectedWallets.map((walletOption) => (
          <Button
            key={walletOption.adapter.name}
            type="button"
            variant="secondary"
            onClick={() => {
              wallet.select(walletOption.adapter.name);
              setLoading({ [walletOption.adapter.name]: true });
            }}
            loading={!!loading?.[walletOption.adapter.name]}
          >
            <PwImage
              width={30}
              height={30}
              className="w-6 h-6 lg:w-[26px] lg:h-[26px]"
              src={walletOption.adapter.icon}
              alt={walletOption.adapter.name}
            />
            {walletOption.adapter.name}
          </Button>
        ))}
      </div>

      {!!undetectedWallets.length && (
        <div className="flex flex-col gap-4">
          <span className="text-lg font-medium text-black dark:text-white">
            Undetected
          </span>
          {undetectedWallets.map((walletOption) => (
            <a
              key={walletOption.adapter.name}
              className={`${buttonVariants({ variant: 'secondary' })} `}
              href={walletOption.adapter.url}
              target="_blank"
              rel="noreferrer"
            >
              <PwImage
                width={30}
                height={30}
                className="w-6 h-6 lg:w-[26px] lg:h-[26px]"
                src={walletOption.adapter.icon}
                alt={walletOption.adapter.name}
              />
              {walletOption.adapter.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
