import * as React from 'react';

export type Status = 'valid' | 'invalid' | 'progress';

export function useValidateImageURL(url: string): Status {
  const [status, setStatus] = React.useState<Status>('progress');
  React.useEffect(() => {
    setStatus('progress');
    let hasChangedURL = false;
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      if (!hasChangedURL) setStatus('valid');
    });
    image.addEventListener('error', () => {
      if (!hasChangedURL) setStatus('invalid');
    });
    return () => {
      hasChangedURL = false;
    };
  }, [url]);
  return status;
}
