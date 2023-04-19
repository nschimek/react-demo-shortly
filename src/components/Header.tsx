import * as rr from 'react-responsive';
import MobileNavbar from './mobile/MobileNavbar';
import DesktopNavbar from './desktop/DesktopNavbar';

const Header = () => {
  // I went with a library for this query as it has a significant impact on the template and I wanted to be able to easily test it
  const isMobile = rr.useMediaQuery({ query: '(max-width: 577px)' });
  return (
    <header className="my-3 max-shorten mx-auto">
      {isMobile && <MobileNavbar />}
      {!isMobile && <DesktopNavbar />}
    </header>
  );
};

export default Header;
