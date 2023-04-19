import { ShortenLinkModel } from '../models/ShortenLinkModel';
import { SHORTEN_LINK_TEST_DATA } from '../models/ShortenLinkModel.test-data';
import { http } from './Http';
import {
  LINKS_KEY,
  ShortenLinkService,
  SHORTEN_ENDPOINT,
} from './ShortenLinkService';

jest.mock('./Http');

describe('ShortenLinkService', () => {
  const getSpy = jest.spyOn(http, 'get');
  const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

  it('should get a shortened link', async () => {
    const url = 'test';
    getSpy.mockResolvedValue({
      status: 200,
      data: SHORTEN_LINK_TEST_DATA.JSON,
    });
    await ShortenLinkService.shorten(url).then((data) => {
      expect(getSpy).toHaveBeenCalledWith(SHORTEN_ENDPOINT, {
        params: { url: url },
      });
      expect(data).toEqual(SHORTEN_LINK_TEST_DATA.ITEM);
    });
  });

  it('should return an error for an invalid response', async () => {
    getSpy.mockResolvedValue({
      status: 200,
      data: { test: 'invalid' },
    });
    await expect(ShortenLinkService.shorten('test')).rejects.toThrow();
  });

  it('should get all the links from localStorage', () => {
    getItemSpy.mockReturnValue(JSON.stringify([SHORTEN_LINK_TEST_DATA.ITEM]));

    expect(ShortenLinkService.getAll()).toEqual([SHORTEN_LINK_TEST_DATA.ITEM]);
  });

  it('should get an empty array if localStorage is empty', () => {
    getItemSpy.mockReturnValue(null);
    expect(ShortenLinkService.getAll()).toEqual([]);
  });

  it('should add a new item to localStorage to the existing links from localStorage', () => {
    getItemSpy.mockReturnValue(JSON.stringify([SHORTEN_LINK_TEST_DATA.ITEM]));

    const newItem = new ShortenLinkModel({
      originalLink: 'short_test',
      fullShortLink: 'full_test',
    });
    const result = ShortenLinkService.add(newItem);

    expect(setItemSpy).toHaveBeenCalledWith(
      LINKS_KEY,
      JSON.stringify([SHORTEN_LINK_TEST_DATA.ITEM, newItem])
    );
    expect(result).toEqual([SHORTEN_LINK_TEST_DATA.ITEM, newItem]);
  });
});
