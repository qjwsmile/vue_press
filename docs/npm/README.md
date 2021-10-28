---
  title: npm发布流程
---

  1、把自己的组件写好

  2、在src下新建文件夹 自己起个名字(smile)

  3、在smile下创建index.js
  ``` js
  import smileTest from '../components/smile.vue' // 这个是你组件的路径
  const install = (Vue)=>{
    Vue.component(smileTest.name,smileTest)
  }
  export default install
  ```
  4、在项目的packages.json里添加 scripts
  ```js
  smile: "vue-cli-service build --target lib ./src/smileTest101/index.js --dist smileNpm --name smileNpm"
  // smile 是自定义scripts名字 可以随便取
  // vue-cli-service build  对文件打包
  // -target lib ./src/smileTest101/index.js  指明只打这个文件
  // --dist smileNpm  文件夹名字
  // --name smileNpm  文件名字
  ```
  5、npm run smile(第四步自定义的名字)   会生成打包后的文件夹 找到umd.min.js

  6、随便创建一个文件夹 (在哪都行)

  7、把第五步生成的umd.min.js复制过来 (如果感觉名字长可以自己改个名字 如index.js)

  8、如果组件有css样式 (还需要把css也复制过来 创建个styles文件夹放在styles里)

  9、在第6步骤文件夹下 npm init -y 生成packages.json

  10、把name改成你想取的名字 (就是以后npm install 后面的名字)

  11、把main换成index.js或者umd.min.js (取的是当前文件夹下js的名字)

  12、npm login (这步之前需要自己去npm创建账号)

  13、name password  email  这些都填好后回车

  14、如果登录不上去 需要把自己的源换成npm

  15、 nrm ls 查看有什么源 (nrm没有需要 npm i nrm -g)

  16、 nrm use npm (再重复12 和 13)

  17、npm publish (推送上去之后需要稍微等一会能看到)