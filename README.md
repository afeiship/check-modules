<p align="center">
  <a href="https://github.com/afeiship/check-modules">
    <img width="880" src="https://tva1.sinaimg.cn/large/006tNbRwly1ga6lp3ot8vj30oy078jsg.jpg">
  </a>
</p>

# check-modules
> Check node modules or log to user.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]


## installation
```shell
npm install -S @jswork/check-modules
```

## usage
```js
var checkModules = require('check-modules');

var res = checkModules(['gulp','react','react-dom','@jswork/react-ant-tree']);

// true
// false with warning
```

## license
Code released under [the MIT license](https://github.com/afeiship/check-modules/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/check-modules
[version-url]: https://npmjs.org/package/@jswork/check-modules

[license-image]: https://img.shields.io/npm/l/@jswork/check-modules
[license-url]: https://github.com/afeiship/check-modules/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/check-modules
[size-url]: https://github.com/afeiship/check-modules/blob/master/dist/check-modules.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/check-modules
[download-url]: https://www.npmjs.com/package/@jswork/check-modules

