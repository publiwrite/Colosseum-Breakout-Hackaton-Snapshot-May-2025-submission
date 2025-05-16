'use client';

import {
  addPublicationListingsToBasketClientAction,
  BasketItemInput,
  basketItemsToGtagEcommerceItems,
  BroadcastChannelPolyfill,
  CART_ITEMS_COOKIE_NAME,
  createHelioOrderClientAction,
  createOrderClientAction,
  getMyBasketClientAction,
  GetMyBasketClientActionType,
  getTotalValueFromEcommerceItems,
  NON_SECURE_COOKIE_OPTIONS,
  removePublicationListingFromBasketClientAction,
  SHOW_CART_SEARCH_PARAM,
  updatePublicationListingFromBasketClientAction,
} from '@pw-fe-monorepo/configs';
import {
  CurrentUserContext,
  gtmEcommerceEvent,
  useCookie,
} from '@pw-fe-monorepo/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const broadcastChannelType = 'cart-update';

const channel = new BroadcastChannelPolyfill(broadcastChannelType);

export const CartContext = createContext<{
  isOpen: boolean;
  cartStep: number;
  cartItems?: GetMyBasketClientActionType;
  stripeClientSecret?: string;
  helioPaylinkId?: string;
  setIsOpen: (isOpen: boolean) => void;
  setCartStep: (step: number) => void;
  refetchCartItems: () => Promise<GetMyBasketClientActionType>;
  addToCart: (items: BasketItemInput[]) => Promise<void>;
  updateCountOnCart: (listingId: string, quantity: number) => Promise<void>;
  removeFromCart: (listingId: string) => Promise<void>;
  createOrder: () => Promise<void>;
  createHelioOrder: () => Promise<void>;
}>(null as any);

export const CartProvider = ({
  children,
  initialCartItems,
}: {
  children: React.ReactNode;
  initialCartItems: GetMyBasketClientActionType;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [cartStep, setCartStep] = useState(1);
  const [stripeClientSecret, setStripeClientSecret] = useState<string>();
  const [helioPaylinkId, setHelioPaylinkId] = useState<string>();
  const [cartItems, setCartItems] =
    useState<GetMyBasketClientActionType>(initialCartItems);
  const {
    value: cookieVal,
    updateCookie,
    deleteCookie,
  } = useCookie(CART_ITEMS_COOKIE_NAME);

  const cartItemsCookie = cookieVal || '[]';

  // after user logs in, if showCart is in search params, open the cart and set the cart step to 2
  useEffect(() => {
    const showCart = searchParams.get(SHOW_CART_SEARCH_PARAM);
    if (showCart === 'true' && !isOpen) {
      setIsOpen(true);
      if (user) {
        setTimeout(() => {
          setCartStep(2);
        }, 500);
      }

      _removeShowCartFromSearchParams();
    }
  }, [user, searchParams]);

  useEffect(() => {
    // Get cart items and send view_cart event to GTM
    if (isOpen) {
      async function handle() {
        const items = await refetchCartItems();

        const ecommerceItems = basketItemsToGtagEcommerceItems(items || []);
        const totalValue = getTotalValueFromEcommerceItems(ecommerceItems);

        gtmEcommerceEvent('view_cart', {
          currency: 'USD',
          value: totalValue,
          items: ecommerceItems,
        });
      }

      handle();
    } else {
      _cartCleanup();
    }
  }, [isOpen]);

  useEffect(() => {
    async function handle() {
      // Sync between cookie and user's basket when user logs in
      if (user && !!cookieVal) {
        await _syncCookieWithBasket();
      }

      refetchCartItems();
    }

    handle();
  }, [user]);

  // Sync between browser tabs by catching cart operations (add, update, delete etc.)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source !== self && event.data.type === broadcastChannelType) {
        console.log(
          'CartProvider: handleMessage refetching cart items',
          event.data,
        );
        refetchCartItems();
      }
    };
    channel.addEventListener('message', handleMessage);

    return () => {
      channel.removeEventListener('message', handleMessage);
    };
  }, []);

  async function refetchCartItems() {
    const items = await getMyBasketClientAction();
    setCartStep(1);
    setCartItems(items);
    return items;
  }

  async function addToCart(items: BasketItemInput[]) {
    if (user) {
      await addPublicationListingsToBasketClientAction(items);
      const updatedCartItems = await refetchCartItems();
      channel.postMessage({ type: broadcastChannelType });
      toast.success('Book added to cart');
      setIsOpen(true);

      const ecommerceItems = basketItemsToGtagEcommerceItems(updatedCartItems);
      const totalValue = getTotalValueFromEcommerceItems(ecommerceItems);

      gtmEcommerceEvent('add_to_cart', {
        currency: 'USD',
        value: totalValue,
        items: ecommerceItems,
      });
      return;
    }

    const existingItems: BasketItemInput[] = JSON.parse(cartItemsCookie);
    const updatedItems = items.reduce((acc, item) => {
      const existingItem = acc.find(
        (i) => i.publicationListingId === item.publicationListingId,
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
        return acc;
      }

      return [...acc, item];
    }, existingItems);

    updateCookie(JSON.stringify(updatedItems), NON_SECURE_COOKIE_OPTIONS);
    const updatedCartItems = await refetchCartItems();
    channel.postMessage({ type: broadcastChannelType });
    toast.success('Book added to cart');
    setIsOpen(true);

    const ecommerceItems = basketItemsToGtagEcommerceItems(updatedCartItems);
    const totalValue = getTotalValueFromEcommerceItems(ecommerceItems);

    gtmEcommerceEvent('add_to_cart', {
      currency: 'USD',
      value: totalValue,
      items: ecommerceItems,
    });
  }

  async function updateCountOnCart(listingId: string, quantity: number) {
    if (user) {
      await updatePublicationListingFromBasketClientAction(listingId, quantity);
      await refetchCartItems();
      channel.postMessage({ type: broadcastChannelType });
      return;
    }

    const existingItems: BasketItemInput[] = JSON.parse(cartItemsCookie);
    const updatedItems = existingItems.map((item) => {
      if (item.publicationListingId === listingId) {
        return { ...item, quantity };
      }

      return item;
    });

    updateCookie(JSON.stringify(updatedItems), NON_SECURE_COOKIE_OPTIONS);
    await refetchCartItems();
    channel.postMessage({ type: broadcastChannelType });
  }

  async function removeFromCart(listingId: string) {
    const itemToRemove = cartItems?.find(
      (item) => item.publicationListingId === listingId,
    );
    if (!itemToRemove) return;

    const ecommerceItems = basketItemsToGtagEcommerceItems([itemToRemove]);
    const totalValue = getTotalValueFromEcommerceItems(ecommerceItems);

    gtmEcommerceEvent('remove_from_cart', {
      currency: 'USD',
      value: totalValue,
      items: ecommerceItems,
    });

    if (user) {
      await removePublicationListingFromBasketClientAction(listingId);
      await refetchCartItems();
      channel.postMessage({ type: broadcastChannelType });
      toast.success('Item removed from cart');

      return;
    }

    const existingItems: BasketItemInput[] = JSON.parse(cartItemsCookie);
    const updatedItems = existingItems.filter(
      (item) => item.publicationListingId !== listingId,
    );

    updateCookie(JSON.stringify(updatedItems), NON_SECURE_COOKIE_OPTIONS);
    await refetchCartItems();
    channel.postMessage({ type: broadcastChannelType });
    toast.success('Item removed from cart');
  }

  async function createOrder() {
    const clientSecret = await createOrderClientAction();

    if (clientSecret) {
      setStripeClientSecret(clientSecret);
    }
  }

  async function createHelioOrder() {
    const paylinkId = await createHelioOrderClientAction();

    if (paylinkId) {
      setHelioPaylinkId(paylinkId);
    }
  }

  function _cartCleanup() {
    setCartStep(1);
    setStripeClientSecret(undefined);
    setHelioPaylinkId(undefined);
  }

  function setCartStepWithAnalytics(step: number) {
    setCartStep(step);

    // Trigger begin_checkout event when moving to checkout step
    if (step === 2) {
      const ecommerceItems = basketItemsToGtagEcommerceItems(cartItems || []);
      const totalValue = getTotalValueFromEcommerceItems(ecommerceItems);

      gtmEcommerceEvent('begin_checkout', {
        currency: 'USD',
        checkout_initiation_method: 'basket_sheet_checkout_clicked',
        value: totalValue,
        items: ecommerceItems,
      });
    }
  }

  function _removeShowCartFromSearchParams() {
    const url = new URL(window.location.href);
    url.searchParams.delete(SHOW_CART_SEARCH_PARAM);
    router.replace(url.toString());
  }

  async function _syncCookieWithBasket() {
    const listingItems = JSON.parse(cartItemsCookie);
    await addPublicationListingsToBasketClientAction(listingItems);
    deleteCookie(NON_SECURE_COOKIE_OPTIONS);
  }

  const value = {
    isOpen,
    cartStep,
    cartItems,
    stripeClientSecret,
    helioPaylinkId,
    setIsOpen,
    setCartStep: setCartStepWithAnalytics,
    refetchCartItems,
    addToCart,
    updateCountOnCart,
    removeFromCart,
    createOrder,
    createHelioOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
