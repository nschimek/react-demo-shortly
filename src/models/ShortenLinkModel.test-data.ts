import { ShortenLinkModel } from './ShortenLinkModel';

const API_JSON = {
  ok: true,
  result: {
    code: 'KCveN',
    short_link: 'shrtco.de/KCveN',
    full_short_link: 'https://shrtco.de/KCveN',
    short_link2: '9qr.de/KCveN',
    full_short_link2: 'https://9qr.de/KCveN',
    share_link: 'shrtco.de/share/KCveN',
    full_share_link: 'https://shrtco.de/share/KCveN',
    original_link: 'http://example.org/very/long/link.html',
  },
};

export const SHORTEN_LINK_TEST_DATA = {
  JSON: API_JSON,
  ITEM: new ShortenLinkModel({
    fullShortLink: API_JSON.result.full_short_link,
    originalLink: API_JSON.result.original_link,
  }),
};
