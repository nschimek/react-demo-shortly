import { ApiModel, ApiJson } from './Api';

export class ShortenLinkModel implements ApiModel<ShortenLinkModel> {
  readonly fullShortLink?: string;
  readonly originalLink?: string;

  // the partial here is really not necessary for such a small response object, but for larger ones, this is a nice feature.
  constructor(init?: Omit<ShortenLinkModel, 'adapt'>) {
    Object.assign(this, init);
  }

  adapt(json: ApiJson): ShortenLinkModel | undefined {
    const ok = json.ok as boolean;
    const result = json.result as ApiJson;
    if (ok && isShortCodeResult(result)) {
      return new ShortenLinkModel({
        fullShortLink: result.full_short_link,
        originalLink: result.original_link,
      });
    }
    return undefined;
  }
}

// only defining the fields we need here from the Shrt Code Result object.  this could be easily expanded.
interface ShortenLinkResult {
  full_short_link: string;
  original_link: string;
}

/* quick user-defined type guard to ensure we are getting the expected result from the API 
   this is probably overkill, but third party APIs make me nervous :) 
   this could be made more generic if necessary */
const isShortCodeResult = (
  json: ApiJson | ShortenLinkResult
): json is ShortenLinkResult => {
  return json.full_short_link !== undefined && json.original_link !== undefined;
};
