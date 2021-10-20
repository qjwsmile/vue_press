---
title: 数组方法
---

  ## join

``` js
  // 数组转换成字符串，然后给他规定个连接字符，默认的是逗号(  ，) 
  let arr = [1,2,3];
  console.log(arr.join()); 　　　　// 1,2,3
  console.log(arr.join("-")); 　　// 1-2-3
  console.log(arr); 　　　　　　　　// [1, 2, 3]（原数组不变）
```

------------------


  ## push

``` js
  // 把里面的内容添加到数组末尾，并返回修改后的长度。
  let arr = ["1","2","3"];
  let count = arr.push("4","5");
  console.log(count); 　　　　　　　　　　// 5
  console.log(arr); 　　　　　　　　　　　// ["1", "2", "3", "4", "5"]
```

  ## pop
``` js
// 移除数组最后一项，返回移除的那个值，减少数组的length。
  let arr = ["1","2","3"];
  let item = arr.pop();
  console.log(item); 　　　　　　　　　　 // "3"
  console.log(arr);                   // "1", "2"
```

  ## unshift
``` js
// 将参数添加到原数组开头，并返回数组的长度  。
  let arr = ["1","2","3"];
  let count = arr.unshift("4","5");
  console.log(count); 　　　　　　　　　　// 5
  console.log(arr); 　                 // [ "4", "5", "1", "2", "3"]
```

  ## shift
``` js
// 将删除原数组第一项，并返回删除元素的值  。
  let arr = ["1","2","3"];
  let count = arr.shift();
  console.log(count); 　　　　　　　　　　// "1"
  console.log(arr); 　                 // ["2", "3"]
```

  ## sort
``` js
// sort()方法比较的是字符串，没有按照数值的大小对数字进行排序
  let arr =["a", "d", "c", "b"];
  console.log(arr.sort()); 　　　　　　　　　　// ["a", "b", "c", "d"]

  let arr = [1, 3, 2, 4]; 
  console.log(arr.sort( (a,b) => {          // ["1", "2", "3", "4"]
    return a - b                            // a - b 从小到大  b - a 从大到小
    } 
    ) ); 　　
```

  ## reverse
``` js
// reverse()方法会改变原数组
  let arr = [1, 2, 3, 4];
  console.log(arr.reverse()); 　　　　　　　　//[4, 3, 2, 1]
  console.log(arr); 　
```

  ## concat
``` js
// concat()数组合并
  let arr = [1, 2, 3, 4];
  let arr1 = arr.concat([5，6]);
  console.log(arr1); 　　　　　　　　//[1, 2, 3, 4, 5, 6]
  console.log(arr); 　            // [1, 2, 3, 4]
```

  ## slice
``` js
// slice()数组删除
  let arr = [1, 2, 3, 4，5, 6];
  let arrCopy1 = arr.slice(1);        // 返回的数组为下标1（包括下标1）开始到数组最后。
  let arrCopy2 = arr.slice(1,4);      // 返回起始下标（包括1）开始到终止下标（不包括4）的子数组。
  let arrCopy3 = arr.slice(1,-2);     // 当出现负数时，将负数加上数组长度的值 返回起始下标（包括1）开始到终止下标（不包括-2+6）的子数组。
  let arrCopy4 = arr.slice(-4,-1);    // 当出现负数时，将负数加上数组长度的值 返回起始下标（包括2）开始到终止下标（不包括-1+6）的子数组。
  console.log(arr); 　　　　　　　　　　　// [1, 2, 3, 4，5, 6](原数组没变)
  console.log(arrCopy); 　　　　　　　　 // [2, 3, 4，5, 6]
  console.log(arrCopy2); 　　　　　　　　// [2, 3, 4]
  console.log(arrCopy3); 　　　　　　　　// [2, 3, 4]
  console.log(arrCopy4); 　　　　　　　　// [3, 4，5]
```

  ## splice
``` js
// splice()数组删除 插入 替换
  let arr = [1,2,3,4,5,6];
  let arrRemoved = arr.splice(0,2);          // 从第0个开始删 删两个
  console.log(arr); 　　　　　　　　　　　　　　　// [3, 4, 5, 6]
  console.log(arrRemoved); 　　　　　　　　　　 // [1, 2]
  let arrRemoved2 = arr.splice(2,0,4,6);    // 从第2开始删 删0个 加两个 4，6
  console.log(arr); 　　　　　　　　　　　　　　　// [3, 4, 4, 6, 5, 6]
  console.log(arrRemoved2); 　　　　　　　　　　// []
  let arrRemoved3 = arr.splice(1,1,2,4);     // 从第1开始删 删1个 加两个 2，4
  console.log(arr); 　　　　　　　　　　　　　　　// [3, 2, 4, 4, 6, 5, 6]
  console.log(arrRemoved3); 　　　　　　　　　　//[4]
```

  ## indexOf
``` js
// indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。
  let arr = [1,2,3,4,5,6,6,7,8,9,8];
  console.log(arr.indexOf(6)); 　　　　　　// 5
  console.log(arr.indexOf(6,2)); 　　　　 // 5
  console.log(arr.indexOf("6")); 　　　　 // -1
```

  ## lastIndexOf
``` js
// lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。 
  let arr = [1,2,3,4,5,6,6,7,8,9,8];
  console.log(arr.lastIndexOf(6)); 　　　　　　// 6
  console.log(arr.lastIndexOf(6,2)); 　　　　 // -1
  console.log(arr.lastIndexOf(6,10)); 　　　　// 6
  console.log(arr.lastIndexOf("6")); 　　　　 // -1
```

  ## forEach
``` js
// 这个方法没有返回值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身。 
  var arr = [1, 2, 3, 4, 5];
  arr.forEach(function(item, index, list){
  console.log(item + '|' + index );
  });
  // 输出为：
  // 1|0
  // 2|1
  // 3|2
  // 4|3
  // 5|4
```

  ## map
``` js
// 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr.map(function(item){
    return item + 10;
  });
  console.log(arr); 　　　　　　　　//[1, 2, 3, 4, 5]
  console.log(arr2); 　　　　　　　　//[11, 12, 13, 14, 15]
```

  ## filter
``` js
// 过滤数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
  let arr = [1, 2, 3, 4, 5, 6];
  let arr2 = arr.filter(function(item, index) {
  return item % 3 === 0 || item >= 5;
  }); 
  console.log(arr); 　　　　　　　　//[1, 2, 3, 4, 5, 6]
  console.log(arr2);             //[3, 5, 6]
```


  ## every
``` js
// 判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true
  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr.every(function(item) {
    return item < 10;
  }); 
  console.log(arr2); 　　　　　　　　//true
  let arr3 = arr.every(function(item) {
    return item < 3;
  }); 
  console.log(arr3); 　　　　　　　　// false
```

  ## some
``` js
// 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true 反之false
  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr.some(function(item) {
    return item < 2;
  }); 
  console.log(arr2); 　　　　　　　　// false
  let arr3 = arr.some(function(item) {
    return item  > 5;
  }); 
  console.log(arr3); 　　　　　　　　// true
```

  ## reduce
``` js
  // reduce方法有两个参数：在每一项上调用的函数和（可选的）作为归并基础的初始值
  // reduce方法的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象
  // 这个函数返回的任何值都会作为第一个参数自动传给下一项
  let arr = [1, 2, 3, 2, 5];
  let sum1 = arr.reduce(function(pre, cur, index, array) {
    return pre + cur;
  })
  let sum2= arr.reduce(function(pre, cur, index, array) {
    return pre + cur;
  },5)
  console.log(arr); // (5) [1, 2, 3, 2, 5]
  console.log(sum1); // 13
  console.log(sum1); // 18
```

  ## reduceRight
``` js
  // reduceRight方法有两个参数：在每一项上调用的函数和（可选的）作为归并基础的初始值
  // reduceRight方法的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象
  // 这个函数返回的任何值都会作为第一个参数自动传给下一项
  // 从最后往前
  let arr = [1, 2, 3, 2, 5];
  let sum1 = arr.reduce(function(pre, cur, index, array) {
    return pre + cur;
  })
  let sum2= arr.reduce(function(pre, cur, index, array) {
    return pre + cur;
  },5)
  console.log(arr); // (5) [1, 2, 3, 2, 5]
  console.log(sum1); // 13
  console.log(sum1); // 18
```

  ## fill
``` js
  // arr.fill(value, start, end)
  let arr = [1, 2, 3, 4, 5];
  arr.fill(1,2,4); // 用1填充数组中从起始索引到终止索引内的全部元素 包头不包尾
  console.log(arr); // (5) [1, 2, 1, 1, 5]
```

  ## find
``` js
  // 返回数组中满足提供的测试函数的第一个元素的值
  let arr = [1, 2, 3, 4, 5];
  let str = arr.find((item)=>{
    return item>1
  }); // 返回数组中满足提供的测试函数的第一个元素的值
  console.log(arr); // (5) [1, 2, 3, 4, 5]
  console.log(str); // 2
```

  ## includes
``` js
  // 判断一个数组是否包含一个指定的值，返回 true或 false
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.includes(2)); // true
  console.log(arr.includes(6)); // false
```

  ## toString
``` js
  // 不会改变原数组，返回一个字符串，表示指定的数组及其元素
  let arr = [1, 2, 3, 4, 5];
  arr.toString();
  console.log(arr.toString()) ;  // '1,2,3'
  console.log(arr) ;             // (5) [1, 2, 3, 4, 5]
