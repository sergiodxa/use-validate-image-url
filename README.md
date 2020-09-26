# useValidateImageURL

Check if the URL of an image is valid.

## Usage

Install it

```sh
$ yarn add use-validate-image-url
```

Import it

```ts
import { useValidateImageURL } from "use-validate-image-url";
```

Use it inside a component

```tsx
function App() {
  const [url, setURL] = React.useState('');
  const status = useValidateImageURL(url);
  return (
    <div>
      {status === 'invalid' ? <p>Image URL is not valid.</p> : null}
      {status === 'valid' ? <p>Image URL is valid.</p> : null}
      {status === 'progress' ? <p>Image URL validity is in progress.</p> : null}
      <input value={url} onChange={event => setURL(event.target.value)} />
    </div>
  );
}
```

## How It Works

The Hook will create a instance of Image and assign the URL as the source. It will then wait for the image to load to check if it's valid (it loaded) or it's invalid (it failed). This way the URL could be anything and it doesn't need to end up with a image extension.

Everytime the URL change the Hook will re-create the Image instance with a new source. If the URL change in the middle of the process of loading another image it will ignore the previous result.

## Author

- Sergio Xalambrí ([sergiodxa.com](https://sergiodxa.com))

## License

MIT License
