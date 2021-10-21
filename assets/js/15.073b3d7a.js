(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{557:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍-js-的基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍-js-的基本数据类型"}},[t._v("#")]),t._v(" 介绍 js 的基本数据类型")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("js 一共有六种基本数据类型，分别是 Undefined、Null、Boolean、Number、String，\n还有在 ES6 中新增的 Symbol 和 ES10 中新增的 BigInt 类型。\nSymbol 代表创建后独一无二且不可变的数据类型，\n它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。\nBigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt \n可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。\n")])])]),s("h2",{attrs:{id:"undefined-与-undeclared-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined-与-undeclared-区别"}},[t._v("#")]),t._v(" undefined 与 undeclared 区别")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('已在作用域中声明但还没有赋值的变量，是 undefined 。\n相反，还没有在作用域中声明过的变量，是 undeclared。\n对于 undeclared 变量的引用，浏览器会报引用错误，\n如 ReferenceError: b is not defined 。但是我们可以使用typeof\n安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量\ntypeof 会返回 "undefined"。\n')])])]),s("h2",{attrs:{id:"javascript-原型-原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-原型-原型链"}},[t._v("#")]),t._v(" JavaScript 原型，原型链")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，\n这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。\n当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，\n这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。\n一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现了 __proto__ 属性来让我们访问这个属性，\n但是我们最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，\n我们可以通过这个方法来获取对象的原型。\n\n当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，\n这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。\n原型链的尽头一般来说都是 Object.prototype 所以这就是我们新建的对象为什么能够使用 toString() 等方法的原因。\n\n特点：\nJavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与\n之相关的对象也会继承这一改变。\n")])])]),s("h2",{attrs:{id:"isnan-和-number-isnan-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isnan-和-number-isnan-区别"}},[t._v("#")]),t._v(" isNaN 和 Number.isNaN 区别")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，\n因此非数字值传入也会返回 true ，会影响 NaN 的判断。\n\n函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，\n这种方法对于 NaN 的判断更为准确。\n")])])]),s("h2",{attrs:{id:"其他值到字符串的转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他值到字符串的转换规则"}},[t._v("#")]),t._v(" 其他值到字符串的转换规则")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(' (1）Null 和 Undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，\n\n（2）Boolean 类型，true 转换为 "true"，false 转换为 "false"。\n\n（3）Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。\n\n（4）Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。\n\n（5）对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（\n  Object.prototype.toString()）来返回内部属性 [[Class]] 的值，如"[object Object]"。\n  如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值。\n')])])]),s("h2",{attrs:{id:"和-的-valueof-和-tostring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和-的-valueof-和-tostring"}},[t._v("#")]),t._v(" {} 和 [] 的 valueOf 和 toString")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(' {} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"\n\n [] 的 valueOf 结果为 [] ，toString 的结果为 ""\n')])])]),s("h2",{attrs:{id:"parseint-和-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint-和-number"}},[t._v("#")]),t._v(" parseInt 和 Number")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" parseInt()中含有非数字字符，解析按从左到右的顺序，如果遇到非数字字符就停止。\n\n Number()不允许出现非数字字符，否则会失败并返回 NaN。\n")])])]),s("h2",{attrs:{id:"操作符的强制类型转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作符的强制类型转换规则"}},[t._v("#")]),t._v(" == 操作符的强制类型转换规则")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("（1）字符串和数字之间的相等比较，将字符串转换为数字之后再进行比较。\n\n（2）其他类型和布尔类型之间的相等比较，先将布尔值转换为数字后，再应用其他规则进行比较。\n\n（3）null 和 undefined 之间的相等比较，结果为真。其他值和它们进行比较都返回假值。\n\n（4）对象和非对象之间的相等比较，对象先调用 ToPrimitive 抽象操作后，再进行比较。\n\n（5）如果一个操作值为 NaN ，则相等比较返回 false（ NaN 本身也不等于 NaN ）。\n\n（6）如果两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true，否则，返回 false。\n\n")])])]),s("h2",{attrs:{id:"this对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this对象"}},[t._v("#")]),t._v(" this对象")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。\n\n 1.第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。\n\n  2.第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。\n\n  3.第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。\n\n  4.第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个\n  参数一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，\n  后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。\n  bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，\n  其他情况下都不会改变。\n\n  这四种方式，使用构造器调用模式的优先级最高，然后是 apply 、 call 和 bind 调用模式，然后是方法调用模式，\n  然后是函数调用模式。\n")])])]),s("h2",{attrs:{id:"事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到\n目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。\n\n使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。\n并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，\n它所发生的事件会交给父元素中的监听函数来处理。\n\n")])])]),s("h2",{attrs:{id:"什么是闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包"}},[t._v("#")]),t._v(" 什么是闭包")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，\n  创建的函数可以访问到当前函数的局部变量。\n\n\n  闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，\n  从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。\n\n  函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，\n  所以这个变量对象不会被回收。\n\n  其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFunctions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFunctions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9 ")]),t._v("\n  result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9 ")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"new-操作符具体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-操作符具体"}},[t._v("#")]),t._v(" new 操作符具体")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" （1）首先创建了一个新的空对象\n （2）设置原型，将对象的原型设置为函数的 prototype 对象。\n （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）\n （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);