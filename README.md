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