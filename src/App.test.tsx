import { render } from '@testing-library/react';
import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

jest.mock('./components/Header');
jest.mock('./components/Home');
jest.mock('./components/Footer');

describe('App', () => {
  it('should render and call the header, home, and footer components', () => {
    render(<App />);
    expect(Header).toHaveBeenCalled();
    expect(Home).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
  });
});
