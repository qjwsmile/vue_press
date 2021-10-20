---
title: defineProps 使用泛型检查
---

::: warning 提示
  vue版本是 ^3.2.19
:::

``` html {11-17}
  <template>
  <p>{{ str }}</p>
  <ul>
    <li v-for="item in list">
      <span>{{ item.id }}</span>
    </li>
  </ul>
  </template>

  <script setup lang="ts">
    interface List {
      id: number,
    }
    const props = defineProps<{
      str: string,
      list: List[],
    }>();
  </script>
```