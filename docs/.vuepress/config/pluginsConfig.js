module.exports = [
  ['@vuepress/back-to-top'],
  require("../plugins/copy/index"),
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
   ],
   [
     '@vuepress/google-analytics',
     {
       'ga': 'UA-209955543-1'
     }
   ]
 ]