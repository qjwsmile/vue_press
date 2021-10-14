---
title: withDefaults 默认props值
---

::: warning 提示
  vue版本是 ^3.2.19
:::

``` html {14-24}
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
    const props = withDefaults(defineProps<{
      str: string,
      list: List[],
    }>(), {
      title: 'withDefaults',
      list: () => [
        { id: 10},
        { id: 20},
        { id: 30},
        ],
    });
  </script>
```