---
title: useSlots useAttrs useCssModule
---

::: warning 提示
  vue版本是 ^3.2.19
:::

::: tip 提示
  useSlots和useAttrs useCssModule 默认没有导出 需要从Vue导入
:::


``` js  {2,4,6}
  <script setup lang="ts">
    import { useSlots, useAttrs, useCssModule } from "vue";

    const slot = useSlots(); // 获取到使用插槽的具体信息  

    const attrs = useAttrs(); // 获取到使用组件时传递的 attributes

    const css = useCssModule(); // css module 对象
  </script>
```