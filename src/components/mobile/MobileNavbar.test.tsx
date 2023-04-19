import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderLogo from '../HeaderLogo';
import MobileNavbar from './MobileNavbar';

const MOBILE_MENU = 'mobile-menu';

// using a mock implementation for the mobile menu so we can track as the visibility changes
/* eslint-disable react/display-name -- mock component */
jest.mock('./MobileMenu', () => () => (
  <div data-testid={MOBILE_MENU}>MobileMenu</div>
));
jest.mock('../HeaderLogo');

describe('MobileNavbar', () => {
  it('should render with the header logo', () => {
    render(<MobileNavbar />);
    expect(HeaderLogo).toHaveBeenCalled();
  });

  it('should render and start with the menu closed', () => {
    render(<MobileNavbar />);
    expect(screen.queryByTestId(MOBILE_MENU)).not.toBeInTheDocument();
  });

  it('should open and close the menu when the menu button is clicked', async () => {
    render(<MobileNavbar />);

    const user = userEvent.setup();
    await user.click(screen.getByTestId('menu-button'));
    expect(screen.getByTestId(MOBILE_MENU)).toBeInTheDocument();

    await user.click(screen.getByTestId('menu-button'));
    expect(screen.queryByTestId(MOBILE_MENU)).not.toBeInTheDocument();
  });
});
