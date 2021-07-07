# 实现瀑布流

## 问题

- `append`以及`appendChild`方法参数如果不是Node节点而是DOMString字符串，前者会被当作innerText，后者会直接报错

- `new DOMParser().parseFromString(string, "text/xml").firstChild`会丢失一部分DOM节点属性，比如style属性

- `document.createTextNode('字符串')`与`append`效果一样，都是innerHTML，`document.createElement()`只能创建节点

- 对于异步加载的图片，及时获取的`offsetHeight`以及`offsetTop`等DOM节点的属性值是不准确的，需要等到节点被加载之后再去计算

- 图片请求地址为`http://via.placeholder.com/宽x高/color/color`

## HOW

## 可以参考

- [原生 JS 实现一个瀑布流插件](https://juejin.cn/post/6844903557699731464)
- [waterfall](https://github.com/MuYunyun/waterfall)