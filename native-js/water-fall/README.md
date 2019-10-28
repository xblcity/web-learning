# 实现瀑布流

## 问题

- `append`以及`appendChild`方法参数如果不是Node节点而是字符串，则添加会被当作text而非node

- `new DOMParser().parseFromString(string, "text/xml").firstChild`会丢失一部分DOM节点属性，比如style属性

- 对于异步加载的图片，及时获取的`offsetHeight`以及`offsetTop`等DOM节点的属性值是不准确的，需要等到节点被加载之后再去计算

- 图片请求地址为`http://via.placeholder.com/宽x高/color/color`

## HOW