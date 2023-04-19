import { render, screen } from '@testing-library/react';
import { ShortenLinkService } from '../services/ShortenLinkService';
import ShortenLinkForm, {
  MISSING_ERROR_MESSAGE,
  SERVICE_ERROR_MESSAGE,
} from './ShortenLinkForm';
import userEvent from '@testing-library/user-event';
import { SHORTEN_LINK_TEST_DATA } from '../models/ShortenLinkModel.test-data';

jest.mock('../services/ShortenLinkService');

const TEST_ITEM = SHORTEN_LINK_TEST_DATA.ITEM;

describe('ShortenLinkForm', () => {
  let linkTextBox: HTMLInputElement;
  let shortenButton: HTMLButtonElement;

  const serviceSpy = jest.spyOn(ShortenLinkService, 'shorten');
  const onSuccessSpy = jest.fn();

  const setup = () => {
    render(<ShortenLinkForm onSuccess={onSuccessSpy} />);
    linkTextBox = screen.getByRole('textbox');
    shortenButton = screen.getByRole('button');
  };

  it('should submit a valid link', async () => {
    setup();
    serviceSpy.mockResolvedValue(TEST_ITEM);

    const url = 'http://www.test.com/';
    const user = userEvent.setup();
    await user.type(linkTextBox, url);

    expect(linkTextBox).toHaveValue(url);

    await user.click(shortenButton);

    expect(serviceSpy).toHaveBeenCalledWith(url);
    expect(onSuccessSpy).toHaveBeenCalledWith(TEST_ITEM);
    expect(linkTextBox).toHaveValue('');
  });

  it('should display an error for no link', async () => {
    setup();
    const user = userEvent.setup();

    await user.click(shortenButton);

    expect(serviceSpy).not.toHaveBeenCalled();
    expect(screen.getByTestId('error')).toHaveTextContent(
      MISSING_ERROR_MESSAGE
    );
  });

  it('should display an error for an invalid link', async () => {
    setup();
    serviceSpy.mockRejectedValue(new Error('Nope'));

    const url = 'invalid';
    const user = userEvent.setup();
    await user.type(linkTextBox, url);

    await user.click(shortenButton);

    expect(serviceSpy).toHaveBeenCalledWith(url);
    expect(screen.getByTestId('error')).toHaveTextContent(
      SERVICE_ERROR_MESSAGE
    );
  });
});
