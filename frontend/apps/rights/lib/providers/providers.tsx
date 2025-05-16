import { MyBookLicensesProvider } from './my-book-licenses';
import { PurchasedBookLicensesProvider } from './purchased-book-licenses';
export const RightsProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <MyBookLicensesProvider>
      <PurchasedBookLicensesProvider>{children}</PurchasedBookLicensesProvider>
    </MyBookLicensesProvider>
  );
};
