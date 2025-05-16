import {
  LAYOUT_COOKIE_NAME,
  type GetCurrentUserQuery,
} from '@pw-fe-monorepo/configs';
import { GetMyBasketServerActionType } from '@pw-fe-monorepo/configs/server';
import { Session } from 'next-auth';
import { cookies } from 'next/headers';
import { ScrollFix } from '../components';
import { Toaster } from '../primitives/sonner';
import { ApolloProvider } from './apollo';
import { AuthModalProvider } from './auth-modal';
import { BookEditionsProvider } from './book-editions';
import { BookGenresProvider } from './book-genres';
import { BookTagsProvider } from './book-tags';
import { CartProvider } from './cart';
import { CheckoutSuccessModalProvider } from './checkout-success-modal';
import { ConfirmationDialogProvider } from './confirmation-dialog';
import { CurrentUserProvider } from './current-user';
import { ExploreButtonProvider } from './explore-button';
import { HeaderMenuProvider } from './header-menu';
import { LayoutProvider } from './layout';
import { ManuscriptPaperSizesProvider } from './manuscript-paper-sizes';
import { ManuscriptTextStocksProvider } from './manuscript-text-stocks';
import { MyOwnedPublicationsMinimalProvider } from './my-owned-publications-minimal';
import { PrintLaminationProvider } from './print-lamination';
import { SessionProvider } from './session';
import { SolanaProvider } from './solana';
import { ThemeProvider } from './theme';
import { ViewModeSelectDialogProvider } from './view-mode-select-dialog';
import { WishlistProvider } from './wishlist';

export const GlobalProviders = ({
  children,
  initialSession,
  initialCartItems,
  user,
}: {
  children: React.ReactNode;
  initialSession: Session | null;
  initialCartItems: GetMyBasketServerActionType;
  user?: GetCurrentUserQuery['currentUser'];
}) => {
  const layoutCookie = cookies().get(LAYOUT_COOKIE_NAME)?.value;

  return (
    <SolanaProvider>
      <SessionProvider>
        <ApolloProvider initialSession={initialSession}>
          <LayoutProvider layoutCookie={layoutCookie}>
            <CurrentUserProvider initialUser={user}>
              <ViewModeSelectDialogProvider>
                <ManuscriptTextStocksProvider>
                  <ManuscriptPaperSizesProvider>
                    <BookGenresProvider>
                      <BookTagsProvider>
                        <PrintLaminationProvider>
                          <BookEditionsProvider>
                            <ConfirmationDialogProvider>
                              <HeaderMenuProvider>
                                <WishlistProvider>
                                  <CartProvider
                                    initialCartItems={initialCartItems}
                                  >
                                    <MyOwnedPublicationsMinimalProvider>
                                      <AuthModalProvider>
                                        <CheckoutSuccessModalProvider>
                                          <ExploreButtonProvider>
                                            <ThemeProvider>
                                              {children}

                                              <Toaster />
                                              {/* 
                                                Dirty fix for scroll restoration
                                                TODO: Check gradually if nextjs fixes this
                                                https://github.com/vercel/next.js/issues/45187 
                                              */}
                                              <ScrollFix />
                                            </ThemeProvider>
                                          </ExploreButtonProvider>
                                        </CheckoutSuccessModalProvider>
                                      </AuthModalProvider>
                                    </MyOwnedPublicationsMinimalProvider>
                                  </CartProvider>
                                </WishlistProvider>
                              </HeaderMenuProvider>
                            </ConfirmationDialogProvider>
                          </BookEditionsProvider>
                        </PrintLaminationProvider>
                      </BookTagsProvider>
                    </BookGenresProvider>
                  </ManuscriptPaperSizesProvider>
                </ManuscriptTextStocksProvider>
              </ViewModeSelectDialogProvider>
            </CurrentUserProvider>
          </LayoutProvider>
        </ApolloProvider>
      </SessionProvider>
    </SolanaProvider>
  );
};
