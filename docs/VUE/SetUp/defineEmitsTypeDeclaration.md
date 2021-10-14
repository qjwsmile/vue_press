---
title: defineEmits 使用泛型检查
---

::: warning 提示
  vue版本是 ^3.2.19
:::

::: details 核心代码
  ``` js
    // interface 也可以在当前目录里添加types文件夹 
    // vue 自动扫描 types文件夹以及 delcare namespace 自动导入的
    interface '自己随便定义' {
      id: number,
      str: string,
    }

    // 泛型
    <{ (e: '方法名', data: 自己随便定义): void }>
  ```
:::

``` html {6-9,12-14}
  <template>
    <button @click="方法名">interface</button>
  </template>

  <script setup lang="ts">
    interface 自己随便定义 {
      id: string,
      val: number,
    }
    // 完美的类型检查
    // List.Basic 是基于 ts 自动扫描 types 文件夹以及 delcare namespace 自动导入的
    const emit = defineEmits<{
      (e: '方法名', data: 自己随便定义): void,
    }>();
    const 方法名 = () => emit('方法名', { id: 1, '' });
  </script>
```
