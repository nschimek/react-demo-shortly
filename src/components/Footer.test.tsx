import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render with links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(14);
    expect(links[0]).toHaveTextContent('Link Shortening');
    expect(links[1]).toHaveTextContent('Branded Links');
    expect(links[2]).toHaveTextContent('Analytics');
    expect(links[3]).toHaveTextContent('Blog');
    expect(links[4]).toHaveTextContent('Developers');
    expect(links[5]).toHaveTextContent('Support');
    expect(links[6]).toHaveTextContent('About');
    expect(links[7]).toHaveTextContent('Our Team');
    expect(links[8]).toHaveTextContent('Careers');
    expect(links[9]).toHaveTextContent('Contact');
  });
});
