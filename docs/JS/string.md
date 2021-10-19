---
title: 字符串方法
---

  ## length
``` js
  // length获取字符串的长度
  let str = "hello";
  console.log(str.length) // 5
```

 ## indexOf
``` js
  // 字符串中查找子字符串,如果存在则返回指定的子字符串值在字符串中首次出现的位置，否则返回-1
  // 第二个参数可选 默认是0
  let str = "hello";
  console.log(str.indexOf('llo')); // 2
  console.log(str.indexOf('Hello')); // -1 区分大小写
  console.log(str.indexOf('hello')); // 0
  console.log(str.indexOf('hello',3)); // 1 初始位置是3
```

 ## lastIndexOf
``` js
  // 字符串中查找子字符串,如果存在则返回一个指定的字符串值最后出现的位置，否则返回-1
  // 第二个参数可选 默认是0
  let str = "hello";
  console.log(str.indexOf('llo')); // 2
  console.log(str.indexOf('Hello')); // -1 区分大小写
  console.log(str.indexOf('hello')); // 0
  console.log(str.indexOf('hello',3)); // 1 初始位置是3
```

 ## slice
``` js
  // 字符串中查找子字符串,如果存在则返回一个指定的字符串值最后出现的位置，否则返回-1
  // 第二个参数可选 默认最后 包头不包尾  负数就从后往前数
  let str = "hello word";
  console.log(str.slice(0,5));    // hello 
  console.log(str.slice(6,8));    // word
  console.log(str.slice(3,-1));   // lo wor
  console.log(str.slice(-7,10));  // lo word
```

 ## substring
``` js
  // 字方法用于提取字符串中介于两个指定下标之间的字符
  // 第二个参数可选 默认是最后 包头不包尾  
  let str = "hello word";
  console.log(str.substring(0,5));  // hello 
  console.log(str.substring(2));    // llo word
  
```

 ## charAt
``` js
  // 返回字符串中的指定字符:
  let str = "hello word";
  console.log(str.charAt(0));  // h
  console.log(str.charAt(1));  // e
```

 ## concat
``` js
  // 返回合并后的字符串:
  let str1 = "hello";
  let str2 = " ";
  let str3 = "word";
  console.log(str1.concat(str2));       // "hello " 
  console.log(str1.concat(str2,str3));  // hello word
```

 ## split
``` js
  // 转换数组
  let str = "hello word";
  console.log(str.split(''));   // "["h","e","l","l","o"," ","w","o","r","d"]" 
  console.log(str.split(' '));  // ["hello" "word"]
  console.log(str.split('',2)); // ["h" "e"]
```

 ## replace
``` js
  // 替换  默认替换第一个 g全替换
  let str = "hello word hello";
  console.log(str.replace(/hello/,"world"));   // world word hello
  console.log(str.replace(/hello/g,"world"));  //world word world
```

 ## match
``` js
  // 匹配 匹配不上返回null
  let str = "hello word";
  console.log(str.match('hello'));   // hello
  console.log(str.match('Hello'));   // null
```


 ## toUpperCase
``` js
  // 转换大写
  let str = "hello word";
  console.log(str.toUpperCase('hello'));   // HELLO WORD
```

 ## toUpperCase
``` js
  // 转换大写
  let str = "hello word";
  console.log(str.toUpperCase('hello'));   // HELLO WORD
```