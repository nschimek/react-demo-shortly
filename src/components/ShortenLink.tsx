import React from 'react';
import { ShortenLinkModel } from '../models/ShortenLinkModel';
import { ShortenLinkService } from '../services/ShortenLinkService';
import ShortenLinkForm from './ShortenLinkForm';
import ShortenLinkItem from './ShortenLinkItem';

const ShortenLink = () => {
  const [links, setLinks] = React.useState(ShortenLinkService.getAll());

  const onCreateSuccess = (link: ShortenLinkModel): void =>
    setLinks(ShortenLinkService.add(link));

  return (
    <div>
      <div className="container-fluid py-2 bg-light-half">
        <ShortenLinkForm onSuccess={onCreateSuccess} />
      </div>
      <div className="container-fluid py-3 bg-light">
        {links &&
          links.map((link) => (
            <ShortenLinkItem key={link.fullShortLink} item={link} />
          ))}
      </div>
    </div>
  );
};

export default ShortenLink;
