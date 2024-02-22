import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import { LayoutWrapper } from './LayoutWrapper';

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};
