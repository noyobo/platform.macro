# platform.macro

用于执行编译时平台环境判断 [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros)

通过编译时环境变量 `PLATFORM` 判断, 将编译是时的引用 `isWechat` `isWeb` `isToutiao` 转换成 boolean 值, 构建出对应平台所需的代码(移除其他平台) 实现按需构建

## 安装

`npm install platform.macro --save`

## 示例

配合 `babel-plugin-macros` 插件使用

```js
// input.js
import { isWecaht } from 'platform.macro';

if (isWechat) {
  // 小程序环境执行
  wx.showToast('我是小程序');
} else {
  window.alert('我是 web 环境');
}
```

```bash
$ PLATFORM=wechat babel input.js -o output.js
```

```js
// output.js
'use strict';

// 小程序环境执行
wx.showToast('我是小程序');
```
