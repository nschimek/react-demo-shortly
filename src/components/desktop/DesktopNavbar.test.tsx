import { render, screen } from '@testing-library/react';
import HeaderLogo from '../HeaderLogo';
import DesktopNavbar from './DesktopNavbar';

jest.mock('../HeaderLogo');

describe('DesktopNavbar', () => {
  it('should render with the header logo', () => {
    render(<DesktopNavbar />);
    expect(HeaderLogo).toHaveBeenCalled();
  });

  // overkill testing here, but normally we would probably be checking for routes
  it('should render with the menu items', () => {
    render(<DesktopNavbar />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('Features');
    expect(links[1]).toHaveTextContent('Pricing');
    expect(links[2]).toHaveTextContent('Resources');
  });

  it('should render with the buttons', () => {
    render(<DesktopNavbar />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('Login');
    expect(buttons[1]).toHaveTextContent('Sign Up');
  });
});
