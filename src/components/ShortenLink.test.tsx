import { render, screen } from '@testing-library/react';
import ShortenLink from './ShortenLink';
import userEvent from '@testing-library/user-event';
import { ShortenLinkService } from '../services/ShortenLinkService';
import { SHORTEN_LINK_TEST_DATA } from '../models/ShortenLinkModel.test-data';
import { ShortenLinkModel } from '../models/ShortenLinkModel';
import ShortenLinkItem from './ShortenLinkItem';

jest.mock('../services/ShortenLinkService');
jest.mock('./ShortenLinkItem');

const TEST_ITEM = SHORTEN_LINK_TEST_DATA.ITEM;

describe('ShortenLink', () => {
  const getAllSpy = jest.spyOn(ShortenLinkService, 'getAll');
  const shortenSpy = jest.spyOn(ShortenLinkService, 'shorten');
  const addSpy = jest.spyOn(ShortenLinkService, 'add');

  /* I don't love this test, but getting onCreateSuccess to run in a unit test was proving otherwise incredibly challenging.  
    Most solutions to this involved using enzyme's shallow method on the child component and calling the prop.  
    Enzyme only supports up to React 16 and has been dead for 3 years now. */
  it('should call ShortenLinkService.add on successful create', async () => {
    render(<ShortenLink />);
    getAllSpy.mockReturnValue([] as ShortenLinkModel[]);
    shortenSpy.mockResolvedValue(TEST_ITEM);

    const linkTextBox = screen.getByRole('textbox');
    const shortenButton = screen.getByRole('button');

    const user = userEvent.setup();
    await user.type(linkTextBox, 'http://www.test.com/');
    await user.click(shortenButton);

    expect(addSpy).toHaveBeenCalledWith(TEST_ITEM);
  });

  it('should pass the shortened links into ShortenLinkItems', () => {
    getAllSpy.mockReturnValue([TEST_ITEM]);
    render(<ShortenLink />);

    expect(ShortenLinkItem).toHaveBeenCalledWith(
      {
        item: TEST_ITEM,
      },
      expect.anything()
    );
  });
});
