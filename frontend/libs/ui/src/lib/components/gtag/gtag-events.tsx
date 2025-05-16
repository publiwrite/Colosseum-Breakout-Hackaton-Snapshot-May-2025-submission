'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { PublicationFormat } from '@pw-fe-monorepo/configs';

export type EcommerceItem = {
  item_id: string; // this will be the bookEditionId
  item_sub_id?: string; // this will be the publicationId
  item_name: string;
  item_author: string;
  item_author2?: string;
  item_author3?: string;
  item_variant?: PublicationFormat;
  item_language?: string;
  price: number;
  quantity?: number;
  // item_category?: string;
  // item_category2?: string;
  // item_category3?: string;
  // item_category4?: string;
  // item_publication_date: string;
  // item_edition?: string;
};

type GTMEcommerceEvents = {
  add_to_cart: {
    currency: 'USD';
    value: number;
    items: EcommerceItem[];
  };
  remove_from_cart: {
    currency: 'USD';
    value: number;
    items: EcommerceItem[];
  };
  view_cart: {
    currency: 'USD';
    value: number;
    items: EcommerceItem[];
  };
  view_item_list: {
    currency: 'USD';
    item_list_name: string;
    items: EcommerceItem[];
  };
  select_item: {
    currency: 'USD';
    item_list_name: string;
    value: number;
    items: EcommerceItem[];
  };
  search: {
    search_term: string;
  };
  begin_checkout: {
    currency: 'USD';
    checkout_initiation_method:
      | 'buy_now_clicked'
      | 'basket_sheet_checkout_clicked';
    value: number;
    items: EcommerceItem[];
  };
  add_payment_info: {
    currency: 'USD';
    payment_type: 'stripe' | 'helio';
    value: number;
    items: EcommerceItem[];
  };
  purchase: {
    transaction_id: string;
    payment_type: 'stripe' | 'helio';
    currency: 'USD';
    value: number;
    items: EcommerceItem[];
  };
  view_item: {
    currency: 'USD';
    value: number;
    items: EcommerceItem[];
  };
};

type GTMEvents = {
  request_demo_clicked: {
    button_location:
      | 'homepage_slideshow'
      | 'authors_page_slideshow'
      | 'authors_page_creative_freedom_cta';
  };
  explore_books_clicked: {
    button_location:
      | 'homepage_slideshow'
      | 'get_started_cta'
      | 'homepage_books_carousel'
      | 'readers_page_slideshow'
      | 'readers_page_start_exploring_cta';
  };
  sign_up_clicked: {
    button_location:
      | 'header'
      | 'homepage_slideshow'
      | 'homepage_features_section'
      | 'get_started_cta'
      | 'authors_page_slideshow'
      | 'authors_page_creative_freedom_cta';
    button_text: 'Sign up' | 'Start writing';
  };
  sign_up_method_selected: {
    method: 'email_password' | 'google';
    source: 'modal' | 'page';
  };
  sign_up_confirmed: {
    method: 'solana_wallet' | 'email_password' | 'google';
    wallet_name?: string;
  };
  faq_question_toggled: {
    faq_question: string;
    faq_action: 'expand' | 'collapse';
  };
  faq_tab_clicked: {
    faq_tab: 'Authors' | 'Readers' | 'All';
  };
};

type AllGTMEventProperties = {
  [K in keyof GTMEvents]: GTMEvents[K] extends Record<string, any>
    ? keyof GTMEvents[K]
    : never;
}[keyof GTMEvents];

const defaultEmptyEvents: { ecommerce: null } & Record<
  AllGTMEventProperties,
  null
> = {
  ecommerce: null,
  button_location: null,
  button_text: null,
  method: null,
  source: null,
  wallet_name: null,
  faq_question: null,
  faq_action: null,
  faq_tab: null,
};

export function gtmEvent<T extends keyof GTMEvents>(
  event: T,
  payload: GTMEvents[T],
) {
  sendGTMEvent({ ...defaultEmptyEvents });

  sendGTMEvent({
    event,
    ...payload,
  });
}

export function gtmEcommerceEvent<T extends keyof GTMEcommerceEvents>(
  event: T,
  payload: GTMEcommerceEvents[T],
) {
  sendGTMEvent({ ...defaultEmptyEvents });

  sendGTMEvent({
    event,
    ecommerce: {
      ...payload,
    },
  });
}
