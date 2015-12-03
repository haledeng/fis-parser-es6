# fis-parser-es6
把typescript转化成js

### 安装
```
npm i -g fis-parser-es6
```

### 使用
```
fis.match('**.{js,ts}', {
    parser: _self,
    rExt: '.js'
});
```
