import { ApiJson } from '../models/Api';
import { ShortenLinkModel } from '../models/ShortenLinkModel';
import { http } from './Http';

export const SHORTEN_ENDPOINT = '/shorten';
export const LINKS_KEY = 'shortenedLinks';

export const ShortenLinkService = {
  shorten: (url: string): Promise<ShortenLinkModel> => {
    return http
      .get<ApiJson>(SHORTEN_ENDPOINT, { params: { url: url } })
      .then((response) => {
        const shortenLink = new ShortenLinkModel().adapt(response.data);
        if (shortenLink) {
          return shortenLink;
        } else {
          throw new Error('Could not parse response object');
        }
      });
  },

  getAll: (): ShortenLinkModel[] => {
    const links = localStorage.getItem(LINKS_KEY);
    return links ? JSON.parse(links) : [];
  },

  /* Add to the existing links in the LocalStorage and then return the array, so we don't have to call getall() again. */
  add: (link: ShortenLinkModel): ShortenLinkModel[] => {
    const links = ShortenLinkService.getAll();
    links.push(link);
    localStorage.setItem(LINKS_KEY, JSON.stringify(links));
    return links;
  },
};
