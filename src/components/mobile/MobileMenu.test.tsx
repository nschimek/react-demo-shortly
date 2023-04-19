import { render, screen } from '@testing-library/react';
import MobileMenu from './MobileMenu';

describe('MobileMenu', () => {
  // overkill testing here, but normally we would probably be checking for routes
  it('should render and display the menu items', () => {
    render(<MobileMenu />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('Features');
    expect(links[1]).toHaveTextContent('Pricing');
    expect(links[2]).toHaveTextContent('Resources');
  });

  it('should render with the buttons', () => {
    render(<MobileMenu />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('Login');
    expect(buttons[1]).toHaveTextContent('Sign Up');
  });
});
