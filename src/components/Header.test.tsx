import { render } from '@testing-library/react';
import * as rr from 'react-responsive';
import DesktopNavbar from './desktop/DesktopNavbar';
import Header from './Header';
import MobileNavbar from './mobile/MobileNavbar';

jest.mock('./desktop/DesktopNavbar');
jest.mock('./mobile/MobileNavbar');

describe('Header', () => {
  it('should render and display the mobile navbar when useMediaQuery is true', () => {
    jest.spyOn(rr, 'useMediaQuery').mockReturnValue(true);
    render(<Header />);
    expect(MobileNavbar).toHaveBeenCalled();
    expect(DesktopNavbar).not.toHaveBeenCalled();
  });

  it('should render and display the desktop navbar when useMediaQuery is false', () => {
    jest.spyOn(rr, 'useMediaQuery').mockReturnValue(false);
    render(<Header />);
    expect(MobileNavbar).not.toHaveBeenCalled();
    expect(DesktopNavbar).toHaveBeenCalled();
  });
});
