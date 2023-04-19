import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { SyntheticEvent } from 'react';
import { ShortenLinkModel } from '../models/ShortenLinkModel';
import { ShortenLinkService } from '../services/ShortenLinkService';

export const MISSING_ERROR_MESSAGE = 'Please specify a link.';
export const SERVICE_ERROR_MESSAGE =
  'Could not shorten. Check the link and try again.';

interface ShortenLinkFormProps {
  onSuccess: (link: ShortenLinkModel) => void;
}

const ShortenLinkForm = ({ onSuccess }: ShortenLinkFormProps) => {
  const [link, setLink] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isLinkValid()) {
      setLoading(true);
      ShortenLinkService.shorten(link)
        .then((model) => {
          setLoading(false);
          setLink('');
          onSuccess(model);
        })
        .catch(() => {
          setLoading(false);
          setError(SERVICE_ERROR_MESSAGE);
        });
    }
  };

  const isLinkValid = (): boolean => {
    if (link === '') {
      setError(MISSING_ERROR_MESSAGE);
      return false;
    } else {
      setError(undefined);
      return true;
    }
  };

  const onLinkChange = (event: React.FormEvent<HTMLInputElement>) =>
    setLink(event.currentTarget.value);

  return (
    <div className="container-fluid max-shorten shorten-background bg-secondary rounded p-sm-5 p-2">
      <form className="row" onSubmit={onSubmit} noValidate>
        <div className="col-sm-10 pb-3 pb-sm-0 px-3 px-sm-2 position-relative">
          <input
            type="text"
            name="link"
            value={link}
            onChange={onLinkChange}
            className={`form-control form-control-lg ${
              error ? 'border border-danger' : ''
            }`}
            placeholder="Shorten a link here..."
            required></input>
          {error ? (
            <div className="error-text pt-1 text-danger" data-testid="error">
              {error}
            </div>
          ) : null}
        </div>
        <div className="d-grid pt-3 pt-sm-0 col-sm-2 gap-2 mx-auto px-3 px-sm-1">
          <button
            type="submit"
            className="btn btn-primary text-white btn-lg rounded"
            disabled={loading}>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              'Shorten it!'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShortenLinkForm;
