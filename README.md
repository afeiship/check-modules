<p align="center">
  <a href="https://github.com/afeiship/check-modules">
    <img width="880" src="https://tva1.sinaimg.cn/large/006tNbRwly1ga6lp3ot8vj30oy078jsg.jpg">
  </a>
</p>

# check-modules
> Check node modules or log to user.

## installation
```shell
npm install -S @feizheng/check-modules
```

## usage
```js
var checkModules = require('check-modules');

var res = checkModules(['gulp','react','react-dom','@feizheng/react-ant-tree']);

// true
// false with warning
```
