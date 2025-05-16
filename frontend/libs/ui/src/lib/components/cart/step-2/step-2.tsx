'use client';

import {
  basketItemsToGtagEcommerceItems,
  downloadBookAsset,
  getOrdersClientAction,
  getTotalValueFromEcommerceItems,
  PublicationFormat,
} from '@pw-fe-monorepo/configs';
import {
  buttonVariants,
  Checkout,
  CheckoutSuccessModalContext,
  gtmEcommerceEvent,
  MyOwnedPublicationsMinimalContext,
  PwLink,
} from '@pw-fe-monorepo/ui';
import { useCallback, useContext, useState } from 'react';
import { CartContext } from '../../../providers/cart';
import { CartSummary } from '../cart-summary/cart-summary';

export const Step2 = () => {
  const {
    cartItems,
    setIsOpen: setCartIsOpen,
    refetchCartItems,
    stripeClientSecret,
    helioPaylinkId,
    createOrder,
    createHelioOrder,
  } = useContext(CartContext);
  const { refetch: refetchMyBooks } = useContext(
    MyOwnedPublicationsMinimalContext,
  );
  const { setIsOpen: setSuccessModalOpen } = useContext(
    CheckoutSuccessModalContext,
  );

  const [cartItemsBeforePurchase] = useState(cartItems);

  async function sendPurchaseEvent(option: 'stripe' | 'helio') {
    const order = await getOrdersClientAction({
      offset: 0,
      limit: 1,
    });

    const ecommerceItems = basketItemsToGtagEcommerceItems(cartItems || []);
    const totalValue = getTotalValueFromEcommerceItems(ecommerceItems);

    gtmEcommerceEvent('purchase', {
      transaction_id: order.items[0].id,
      payment_type: option,
      currency: 'USD',
      value: totalValue,
      items: ecommerceItems,
    });
  }

  const ModalContent = useCallback(() => {
    const BUTTON_TITLE = 'Let’s Go Read!';

    const isDashboardProject = window.location.href.includes(
      `${process.env.NEXT_PUBLIC_DASHBOARD_PROJECT_URL}`,
    );
    const isHomePage = window.location.pathname === '/';
    const cartCountBeforePurchase = cartItemsBeforePurchase?.length || 0;

    if (isDashboardProject && isHomePage) {
      const formatOfFirstItem =
        cartItemsBeforePurchase?.[0].publicationsListing.publication.format;

      const isEbookReadyToReadOnUrl =
        cartCountBeforePurchase === 1 &&
        formatOfFirstItem === PublicationFormat.Ebook;

      return (
        <PwLink
          className={buttonVariants({ variant: 'primary' })}
          href={
            isEbookReadyToReadOnUrl
              ? `${process.env.NEXT_PUBLIC_DASHBOARD_PROJECT_URL}/read/${cartItemsBeforePurchase?.[0].publicationsListing.publication.id}`
              : '#'
          }
          onClick={async () => {
            if (isEbookReadyToReadOnUrl) {
              setSuccessModalOpen({ isOpen: false });
              return;
            }

            if (formatOfFirstItem === PublicationFormat.Pdf) {
              await downloadBookAsset({
                publicationId:
                  cartItemsBeforePurchase?.[0].publicationsListing.publication
                    .id!,
                format: formatOfFirstItem,
              });
              setSuccessModalOpen({ isOpen: false });
              return;
            }

            setSuccessModalOpen({ isOpen: false });
            window.location.reload();
          }}
        >
          {BUTTON_TITLE}
        </PwLink>
      );
    }

    return (
      <PwLink
        className={buttonVariants({ variant: 'primary' })}
        href={
          cartCountBeforePurchase > 1
            ? `${process.env.NEXT_PUBLIC_DASHBOARD_PROJECT_URL}`
            : `${process.env.NEXT_PUBLIC_DASHBOARD_PROJECT_URL}/read/${cartItemsBeforePurchase?.[0].publicationsListing.publication.id}`
        }
      >
        {BUTTON_TITLE}
      </PwLink>
    );
  }, []);

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-8">
        <CartSummary />

        <Checkout
          stripeClientSecret={stripeClientSecret}
          helioPaylinkId={helioPaylinkId}
          onOptionChange={(option) => {
            if (option === 'stripe') {
              createOrder();
            }

            if (option === 'helio') {
              createHelioOrder();
            }
          }}
          onPaymentStarted={(option) => {
            const ecommerceItems = basketItemsToGtagEcommerceItems(
              cartItems || [],
            );
            const totalValue = getTotalValueFromEcommerceItems(ecommerceItems);

            gtmEcommerceEvent('add_payment_info', {
              currency: 'USD',
              payment_type: option,
              value: totalValue,
              items: ecommerceItems,
            });
          }}
          onPaymentSuccess={async (option) => {
            setCartIsOpen(false);
            setSuccessModalOpen({ isOpen: true, content: <ModalContent /> });

            setTimeout(() => {
              refetchCartItems();
              refetchMyBooks();
              sendPurchaseEvent(option);
            }, 400);
          }}
        />
      </div>
    </div>
  );
};
