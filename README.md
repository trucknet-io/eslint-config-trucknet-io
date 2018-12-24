# eslint-config-trucknet-io

Eslint Preset based on JavaScript Standard Style with comma-dangles, semi and more

## Fast install

- `npm remove eslint babel-eslint eslint*`
- `npm i -D eslint-config-trucknet-io`

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
npm install -D eslint-config-trucknet-io
```

Then, add this to your .eslintrc file:

```
{
  "extends": "trucknet-io"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT
