import { render } from '@testing-library/react';
import Home from './Home';
import ShortenLink from './ShortenLink';

jest.mock('./ShortenLink');

describe('Home', () => {
  it('should render with ShortenLink', () => {
    render(<Home />);
    expect(ShortenLink).toHaveBeenCalled();
  });
});
