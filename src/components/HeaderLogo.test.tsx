import { render, screen } from '@testing-library/react';
import HeaderLogo from './HeaderLogo';

describe('HeaderLogo', () => {
  it('should render with an image', () => {
    render(<HeaderLogo />);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'logo.svg');
  });
});
