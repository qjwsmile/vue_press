---
title: defineProps 基础使用
---

::: warning 提示
  vue版本是 ^3.2.19
  defineProps 就是vue2.x版本的 props
:::

``` html {11-14}
  <template>
    <p>{{ str }}</p>
    <ul>
      <li v-for="item in list">
        <span>{{ item.id }}</span>
      </li>
    </ul>
  </template>

  <script setup lang="ts">
    const props = defineProps({
      str: String,
      list: Array,
    });
  </script>
```