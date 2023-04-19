import React from 'react';

interface CopyButtonProps {
  text: string | undefined;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = React.useState(false);

  const onClick = () => {
    // button is disabled unless string is defined
    navigator.clipboard.writeText(text as string);
    setCopied(true);
  };

  return (
    <button
      type="button"
      className={`btn rounded btn-sm text-white ${
        copied ? 'btn-secondary' : 'btn-primary'
      }`}
      onClick={onClick}
      disabled={!text}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyButton;
