---
title: style可以用v-bind
---

::: warning 提示
  vue版本是 ^3.2.19
:::

::: tip 提示
  可以用代码控制style
:::


``` html  
  <template>
    <p>smile</p>
  </template>

  <script setup lang="ts">
    import { ref } from "vue";
    const color = ref('#000');

    setTimeout(() => color.value = '#669900' , 1000);

  </script>

  <style scoped>
    p {
      color: v-bind(color);
    }
  </style>
```