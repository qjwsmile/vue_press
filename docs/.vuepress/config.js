module.exports = {
  base:'/vue_press/',
  head:[
    ['meta',{name:"author",content:'smile'}],
    ['meta',{name:"keywords",content:'vuepress,vuepress笔记,vuepress博客,smile'}]
  ],
  plugins: [
   require("./plugins/copy/index"),
   [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        const moment = require('moment')
        moment.locale('zh-cn')
        return moment(timestamp).format('LLLL')
      }
    }
  ]
  ],
  extend: '@vuepress/theme-default',
  title: 'smile',
  description: 'Just playing around',
  themeConfig:{
    lastUpdated: '更新时间',
    smoothScroll: true,
    sidebar: [
      {
        title: 'css',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/css/css1',
          '/css/css2',
          '/css/css3',
          '/css/css4',
          '/css/css5',
          '/css/css6',
        ]
      },
      {
        title: 'js',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/js/js1',
          '/js/js2',
          '/js/js3',
          '/js/js4',
          '/js/js5',
          '/js/js6',
        ]
      },
    ]
  }
}