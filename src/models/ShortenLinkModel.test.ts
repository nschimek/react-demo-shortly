import { ShortenLinkModel } from './ShortenLinkModel';
import { SHORTEN_LINK_TEST_DATA } from './ShortenLinkModel.test-data';

describe('ShortenLinkModel', () => {
  it('should adapt from valid API JSON', () => {
    const result = new ShortenLinkModel().adapt(SHORTEN_LINK_TEST_DATA.JSON);
    expect(result?.fullShortLink).toBe('https://shrtco.de/KCveN');
    expect(result?.originalLink).toBe('http://example.org/very/long/link.html');
  });

  it('should not adapt when ok is false', () => {
    expect(new ShortenLinkModel().adapt({ ok: false })).toBeUndefined();
  });

  it('should not adapt if the result is not a valid type', () => {
    expect(
      new ShortenLinkModel().adapt({ ok: true, result: { test: 123 } })
    ).toBeUndefined();
  });
});
