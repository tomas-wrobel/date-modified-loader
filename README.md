# Date Modified Loader
Webpack loader for the date of the last change
## Instalation
``` powershell
npm i date-modified-loader
```

## Usage
### Inline

``` js
import version from "!!date-modified-loader!./App";
```
### Via config
This is not recommended — usually, your app needs both data (text, image) and date.

**webpack.config.js**
```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.jpg$/i,
				use: 'date-modified-loader',
			},
		],
	},
};
```
**test.js**
``` js
import date from "./img.jpg";

console.log(date.constructor.name) // Date
console.log(date.toString()) // 11/02/2021
```

## TypeScript
The package uses declaration; these imports
```ts
import house from "date-modified-loader!./House.png";
import source from "!date-modified-loader!./App.png";
import data from "!!date-modified-loader!./datas.json";
```
should return imported date (uses CommonJS)

If you use config above, add to your typings:
``` ts
declare module "*.png" {
	const modified: Date;
	export = modified;
}
```

## Tips
With `require.context`, you can use two loaders as bellow:
``` js
const importDate = require.context("!!date-modified-loader!../assets");

const importAssets = require.context("../assets");

const assetData = importAssets.keys().map(key => ({
	date: importDate(key),
	src: importAssets(key)
}));
```