import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useValidateImageURL } from '../src';

function Validator({ url }: { url: string }) {
  const status = useValidateImageURL(url);
  return (
    <>
      {status === 'invalid' ? <p>Image URL is not valid.</p> : null}
      {status === 'valid' ? <p>Image URL is valid.</p> : null}
      {status === 'progress' ? <p>Image URL validity is in progress.</p> : null}
    </>
  );
}

function App() {
  const [url, setURL] = React.useState('');
  return (
    <div>
      {url ? <Validator url={url} /> : null}
      <input value={url} onChange={event => setURL(event.target.value)} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
