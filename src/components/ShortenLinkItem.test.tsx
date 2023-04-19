import { render, screen } from '@testing-library/react';
import { SHORTEN_LINK_TEST_DATA } from '../models/ShortenLinkModel.test-data';
import CopyButton from './CopyButton';
import ShortenLinkItem from './ShortenLinkItem';

jest.mock('./CopyButton');

const TEST_ITEM = SHORTEN_LINK_TEST_DATA.ITEM;

describe('ShortenLinkItem', () => {
  it('should render with the item props and copy button', () => {
    render(<ShortenLinkItem item={TEST_ITEM} />);
    expect(screen.getByTestId('fullShortLink')).toHaveTextContent(
      TEST_ITEM.fullShortLink as string
    );
    expect(screen.getByTestId('originalLink')).toHaveTextContent(
      TEST_ITEM.originalLink as string
    );
    expect(CopyButton).toHaveBeenCalledWith(
      { text: TEST_ITEM.fullShortLink },
      expect.anything()
    );
  });
});
