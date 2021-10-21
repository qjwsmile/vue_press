---
title: css
sidebarDepth: 4
---

## 盒子模型
```html
 (1）有两种盒子模型：IE盒模型（border-box）、W3C标准盒模型（content-box）
（2）盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分

（1）W3C标准盒模型：属性width，height只包含内容content，不包含border和padding
（2）IE盒模型：属性width，height包含content、border和padding，指的是content+padding+border。

```

## CSS 选择符
```html
（1）id选择器（#myid）
（2）类选择器（.myclassname）
（3）标签选择器（div,h1,p）
（4）后代选择器（h1 p）
（5）相邻后代选择器（子）选择器（ul>li）
（6）兄弟选择器（li~a）
（7）相邻兄弟选择器（li+a）
（8）属性选择器（a[rel="external"]）
（9）伪类选择器（a:hover,li:nth-child）
（10）伪元素选择器（::before、::after）
（11）通配符选择器（*）
```

## 伪类 LVHA
```html
a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；

当链接未访问过时：

（1）当鼠标滑过a链接时，满足:link和:hover两种状态，要改变a标签的颜色，就必须将:hover伪类在:link伪
类后面声明；
（2）当鼠标点击激活a链接时，同时满足:link、:hover、:active三种状态，要显示a标签激活时的样式（:active），
必须将:active声明放到:link和:hover之后。因此得出LVHA这个顺序。

当链接访问过时，情况基本同上，只不过需要将:link换成:visited。

这个顺序能不能变？可以，但也只有:link和:visited可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，
也就不存在覆盖的问题。

```

## c3新增伪类
```html
（1）elem:nth-child(n)选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数值，也可以接受函数。

（2）elem:nth-last-child(n)作用同上，不过是从后开始查找。

（3）elem:last-child选中最后一个子元素。

（4）elem:only-child如果elem是父元素下唯一的子元素，则选中之。

（5）elem:nth-of-type(n)选中父元素下第n个elem类型元素，n可以接受具体的数值，也可以接受函数。

（6）elem:first-of-type选中父元素下第一个elem类型元素。

（7）elem:last-of-type选中父元素下最后一个elem类型元素。

（8）elem:only-of-type如果父元素下的子元素只有一个elem类型元素，则选中该元素。

（9）elem:empty选中不包含子元素和内容的elem类型元素。

（10）elem:target选择当前活动的elem元素。

（11）:not(elem)选择非elem元素的每个元素。

（12）:enabled 控制表单控件的禁用状态。

（13）:disabled	控制表单控件的禁用状态。

 (14):checked单选框或复选框被选中。

```

## display值
```html
block	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
none	元素不显示，并从文档流中移除。
inline	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
list-item	像块类型元素一样显示，并添加样式列表标记。
table	此元素会作为块级表格来显示。
inherit	规定应该从父元素继承display属性的值。
```

## position relative 和 absolute 定位原点
```html {17-19}
absolute
生成绝对定位的元素，相对于值不为static的第一个父元素的padding box进行定位，也可以理解为离自己这一级元素最近的
一级position设置为absolute或者relative的父元素的padding box的左上角为原点的。

fixed（老IE不支持）
生成绝对定位的元素，相对于浏览器窗口进行定位。

relative
生成相对定位的元素，相对于其元素本身所在正常位置进行定位。

static
默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。

inherit
规定从父元素继承position属性的值。

absolute定位的元素，是相对于它的第一个position值不为static的祖先元素的padding box来进行定位的。
这句话我们可以这样来理解，我们首先需要找到绝对定位元素的一个position的值不为static的祖先元素，
然后相对于这个祖先元素的padding box来定位，也就是说在计算定位距离的时候，padding的值也要算进去

```

## flex布局 容器

可以参考[《Flex 布局教程：语法篇》](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)[《Flex 布局教程：实例篇》](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

### flex-direction
决定主轴的方向（即项目的排列方向）
```css 
  .box {
    flex-direction: row | row-reverse | column | column-reverse;
  }
  row（默认值）：主轴为水平方向，起点在左端。
  row-reverse：主轴为水平方向，起点在右端。
  column：主轴为垂直方向，起点在上沿。
  column-reverse：主轴为垂直方向，起点在下沿
```

### flex-wrap
如果一条轴线排不下，如何换行。
```css 
  .box{
    flex-wrap: nowrap | wrap | wrap-reverse;
  }
  nowrap（默认）：不换行
  wrap：换行，第一行在上方
  wrap-reverse：换行，第一行在下方
```

### flex-flow
是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
```css 
  .box {
    flex-flow: <flex-direction> || <flex-wrap>;
  }
```

### justify-content
定义了项目在主轴上的对齐方式
```css 
  .box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
  }
  flex-start（默认值）：左对齐
  flex-end：右对齐
  center： 居中
  space-between：两端对齐，项目之间的间隔都相等。
  space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```

### align-items
属性定义项目在交叉轴上如何对齐
```css 
 .box {
    align-items: flex-start | flex-end | center | baseline | stretch;
  }
  flex-start：交叉轴的起点对齐。
  flex-end：交叉轴的终点对齐。
  center：交叉轴的中点对齐。
  baseline: 项目的第一行文字的基线对齐。
  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```

### align-content
属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```css 
 .box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }
  flex-start：与交叉轴的起点对齐。
  flex-end：与交叉轴的终点对齐。
  center：与交叉轴的中点对齐。
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  stretch（默认值）：轴线占满整个交叉轴。
```

## flex布局 项目
### order
定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css 
  .item {
    order: <integer>;
  }
```

### flex-grow
定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
```css 
  .item {
    flex-grow: <number>; /* default 0 */
  }
  如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，
  其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
```

### flex-shrink
定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```css 
  .item {
    flex-shrink: <number>; /* default 1 */
  }
  如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，
  其他项目都为1，则空间不足时，前者不缩小。
```

### flex-basis
定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
```css 
 .item {
    flex-basis: <length> | auto; /* default auto */
  }
  它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
```

### flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
```css 
 .item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  }
  该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
  建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
```

### align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```css 
 .item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
  flex-start：交叉轴的起点对齐。
  flex-end：交叉轴的终点对齐。
  center：交叉轴的中点对齐。
  baseline: 项目的第一行文字的基线对齐。
  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```
