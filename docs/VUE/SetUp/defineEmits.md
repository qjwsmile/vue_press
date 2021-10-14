---
title: defineEmits基础使用
---

::: warning 提示
  vue版本是 ^3.2.19
:::

::: tip 提示
  在script里直接引用setup，不需要像3.x import vue 导出
:::

::: details 核心代码
  ``` js
    const emit = defineEmits(['handleClick']);
    const  handleClick = ()=> emit('handleClick', data);
    // defineEmits的参数是自定义函数的名称 可以随便取
    // emit：handleClick 是父组件中监听的名字，建议和defineEmits取值一样可以避免方法多了之后混淆。
    // emit：data 是父组件中函数介绍的值
  ```
:::

``` html {2}
  <template>
    我是子组件
    <button @click="handleClick">触发父组件handleClick事件</button>
  </template>

  <script setup lang="ts">
  const emit = defineEmits(['handleClick']);
  const  handleClick = ()=> emit('handleClick', '子组件点击了');
  </script>
```

``` html {2}
  <template>
    我是父组件
    <Chiled @handleClick="handleClick"></Chiled>
  </template>

  <script setup lang="ts">
    import Chiled from './test1.vue'
    const  handleClick = (data)=> console.log(data);
  </script>
```