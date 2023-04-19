import { ShortenLinkModel } from '../models/ShortenLinkModel';
import CopyButton from './CopyButton';

interface ShortenLinkItemProps {
  item: ShortenLinkModel;
}

const ShortenLinkItem = (props: ShortenLinkItemProps) => {
  return (
    <div className="row mx-auto max-shorten bg-white rounded p-sm-2 p-1 mb-3">
      <div className="col-lg-6 py-2 link-border d-flex justify-content-lg-start justify-content-center align-items-center text-center text-lg-start link-border">
        <span data-testid="originalLink">
          <a
            href={props.item.originalLink}
            className="fw-bold short-link text-black"
            target="_blank"
            rel="noreferrer">
            {props.item.originalLink}
          </a>
        </span>
      </div>
      <div className="col-lg-5 py-2 d-flex justify-content-lg-end justify-content-center align-items-center">
        <span data-testid="fullShortLink">
          <a
            href={props.item.fullShortLink}
            className="text-primary fw-bold short-link text-primary"
            target="_blank"
            rel="noreferrer">
            {props.item.fullShortLink}
          </a>
        </span>
      </div>
      <div className="col-lg-1 d-grid px-1 py-2 gap-2 mx-auto">
        <CopyButton text={props.item.fullShortLink} />
      </div>
    </div>
  );
};

export default ShortenLinkItem;
