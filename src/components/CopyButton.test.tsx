import { render, screen } from '@testing-library/react';
import CopyButton from './CopyButton';
import userEvent from '@testing-library/user-event';

const TEST_TEXT = 'test text';

describe('Copy Button', () => {
  it('should copy text to the clipboard', async () => {
    render(<CopyButton text={TEST_TEXT} />);
    const button = screen.getByRole('button');
    const user = userEvent.setup();

    expect(button).toHaveTextContent('Copy');
    expect(button).not.toBeDisabled();

    await user.click(button);

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe(TEST_TEXT);
    expect(button).toHaveTextContent('Copied!');
  });

  it('should disable the button if there is no text', () => {
    render(<CopyButton text={undefined} />);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
