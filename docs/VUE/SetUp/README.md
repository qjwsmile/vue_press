---
title: setup使用
---

::: warning 提示
  vuepress中Vue的版本暂时是2.x，效果演示截图<br>
  vue版本是 ^3.2.19<br>
  推荐大家安装vscode安装volar插件 可以分割代码并且提示特别友好
:::

::: tip 提示
  在script里直接引用setup，不需要像3.x import vue 导出
:::

<RecoDemo :collapse="true">
  <template  slot="code-script">
    <<< @/docs/.vuepress/demo/setUp/setUp/script.vue?script
  </template>
  <template   slot="code-template">
    <<< @/docs/.vuepress/demo/setUp/setUp/template.vue?template
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/setUp/setUp/style.vue?style
  </template>
  <img :src="$withBase('/images/setUp/1634198186273.jpg')" slot="demo">
</RecoDemo>


<!-- ::: demo
  ```html
 <template>
  <div class="box-vue">Vue {{ message }}</div>
  </template>
  <script>
  export default {
    data: () => ({ message: 'Hello World' })
  }
  </script>
  <style>
  .box-vue { color: red; }
  </style>
::: -->