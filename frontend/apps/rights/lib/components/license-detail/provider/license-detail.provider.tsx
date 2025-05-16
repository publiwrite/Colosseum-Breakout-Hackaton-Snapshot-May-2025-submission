'use client';

import Fireworks from '@fireworks-js/react';
import {
  fetchWithRetry,
  getBookLicenseByIdClientAction,
  GetBookLicenseByIdClientActionType,
  getBookLicenseOrderByIdClientAction,
  getBookLicenseSalesClientAction,
  GetBookLicenseSalesClientActionType,
} from '@pw-fe-monorepo/configs';
import {
  MyBookLicensesContext,
  PurchasedBookLicensesContext,
} from '@rights/lib/providers';
import { useSession } from 'next-auth/react';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export const LicenseDetailContext = createContext<{
  license: GetBookLicenseByIdClientActionType;
  bookLicenseSales?: GetBookLicenseSalesClientActionType;
  solanaPNftAddress?: string;
  orderId?: string;
  loading: boolean;
  isUserAlreadyPurchased: boolean;
  isUserOwnsThisLicense: boolean;
  isSuccessModalOpen: boolean;
  setIsSuccessModalOpen: Dispatch<SetStateAction<boolean>>;
}>(null as any);

export const LicenseDetailProvider = ({
  initialLicense,
  children,
}: {
  initialLicense: GetBookLicenseByIdClientActionType;
  children: React.ReactNode;
}) => {
  const abortControllerRef = useRef<AbortController>();
  const { data: session, status } = useSession();

  const {
    licenses: purchasedLicenses,
    loading: purchasedLicensesLoading,
    fetchPurchasedBookLicenses,
  } = useContext(PurchasedBookLicensesContext);
  const {
    licenses: myLicenses,
    loading: myLicensesLoading,
    fetchMyBookLicenses,
  } = useContext(MyBookLicensesContext);

  const [license, setLicense] =
    useState<GetBookLicenseByIdClientActionType>(initialLicense);
  const [solanaPNftAddress, setSolanaPNftAddress] = useState<string>();
  const [bookLicenseSales, setBookLicenseSales] =
    useState<GetBookLicenseSalesClientActionType>();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const loading = useMemo(() => {
    return (
      purchasedLicensesLoading || myLicensesLoading || status === 'loading'
    );
  }, [purchasedLicensesLoading, myLicensesLoading, status]);

  const isUserAlreadyPurchased = useMemo(() => {
    return purchasedLicenses.some((l) => l.id === license.id);
  }, [purchasedLicenses, license.id]);

  const isUserOwnsThisLicense = useMemo(() => {
    return myLicenses.some((l) => l.id === license.id);
  }, [myLicenses, license.id]);

  const orderId = useMemo(() => {
    return purchasedLicenses.find((l) => l.id === license.id)?.orders?.[0]?.id;
  }, [purchasedLicenses, license.id]);

  const _makeSureBtcInscriptionIsReady = async () => {
    const res = await fetchWithRetry(
      () => getBookLicenseByIdClientAction(license.id),
      (res) => !('message' in res) && !res.btcInscriptionId,
      { maxRetries: 60, signal: abortControllerRef.current?.signal },
    );

    setLicense({
      ...license,
      btcInscriptionId: res.btcInscriptionId || 'N/A',
      btcInscriptionStatus: res.btcInscriptionStatus,
    });
  };

  const _makeSureSolanaInscriptionIsReady = async () => {
    if (!orderId) {
      return;
    }

    const res = await fetchWithRetry(
      () => getBookLicenseOrderByIdClientAction(orderId),
      (res) => !('message' in res) && !res.solanaPNftAddress,
      { maxRetries: 60, signal: abortControllerRef.current?.signal },
    );

    setSolanaPNftAddress(res.solanaPNftAddress || 'N/A');
  };

  const _makeSureBookLicenseSalesIsReady = async () => {
    if (!license.id) {
      return;
    }

    const res = await fetchWithRetry(
      () => getBookLicenseSalesClientAction(license.id),
      (res) => true,
      {
        maxRetries: 60,
        retryDelay: 10000,
        signal: abortControllerRef.current?.signal,
        onRetry: (attempt, responseOrError) => {
          if (responseOrError !== null && !(responseOrError instanceof Error)) {
            setBookLicenseSales(responseOrError);
          }
        },
      },
    );

    setBookLicenseSales(res);
  };

  // make sure the btc inscription is ready
  useEffect(() => {
    if (!license) return;

    if (!license.btcInscriptionId) {
      _makeSureBtcInscriptionIsReady();
    }
  }, [license]);

  // make sure the solana inscription is ready
  useEffect(() => {
    if (!license) return;

    if (isUserAlreadyPurchased) {
      _makeSureSolanaInscriptionIsReady();
    }
  }, [license, isUserAlreadyPurchased]);

  // make sure the book license sales is ready
  useEffect(() => {
    if (!license) return;

    if (isUserOwnsThisLicense) {
      _makeSureBookLicenseSalesIsReady();
    }
  }, [license, isUserOwnsThisLicense]);

  useEffect(() => {
    if (!session?.user.id) return;

    fetchPurchasedBookLicenses();
    fetchMyBookLicenses();
  }, [session?.user.id]);

  // close the success modal after 10 seconds
  useEffect(() => {
    if (isSuccessModalOpen) {
      setTimeout(() => {
        setIsSuccessModalOpen(false);
      }, 10000);
    }
  }, [isSuccessModalOpen]);

  useEffect(() => {
    abortControllerRef.current = new AbortController();
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const value = {
    license,
    bookLicenseSales,
    solanaPNftAddress,
    orderId,
    loading,
    isUserAlreadyPurchased,
    isUserOwnsThisLicense,
    isSuccessModalOpen,
    setIsSuccessModalOpen,
  };

  return (
    <LicenseDetailContext.Provider value={value}>
      {children}

      {isSuccessModalOpen && <Fireworks className="fixed inset-0 z-[99999]" />}
    </LicenseDetailContext.Provider>
  );
};
