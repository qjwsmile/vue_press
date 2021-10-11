module.exports = {
  base:'/vue_press/',
  head:[
    ['meta',{name:"author",content:'smile'}],
    ['meta',{name:"keywords",content:'vuepress,vuepress笔记,vuepress博客,smile'}],
    ['link', { rel: 'icon', href: '/smile.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue', {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'qjwsmile',
        repo: 'vue_press',
        clientId: '40f698a5e4b17508ceff',
        clientSecret: '1600cf016fc6984be198ec6fcc50628ac0e48b37',
        autoCreateIssue:true
      }
    ]
  ],
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