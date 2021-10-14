const secert = require('./secert')

// https://github.com/xiguaxigua/vuepress-plugin-demo-block 目前使用
// https://buptsteve.github.io/vuepress-plugin-demo-code/

      
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
       clientId: secert.clientId,
       clientSecret: secert.clientSecret,
       autoCreateIssue:true
     }
   ],
   [
     '@vuepress/google-analytics',{'ga': secert.ga}
   ],
   [
    '@vuepress/medium-zoom', {
      selector: 'img.zoom'
    }
   ],
   ["vuepress-plugin-auto-sidebar",
    {
      title: {
        // 更多选项: 
        // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        mode: "titlecase"
      },
      collapse: {
        // 折叠
        open: true
      },
     
    }
  ],
  [
    'meting',{
      meting: {
        // 歌单地址-> 如果输入可忽略server|type|mid
        // 但是不知道为什么不写上这三个会报错, 所以我都写上了
        auto: 'https://music.163.com/#/playlist?id=2344729611',
        // 当前服务为netease -> 网易
        // server: "netease",
        // // 类型为歌单
        // type: "playlist",
        // // 歌单id
        // mid: "448331314",
        // server: "netease",
        // type: "playlist",
        // mid: "448331314"
      },
      aplayer: {
        // 歌单为随机
        order: 'random',
        // 0为不显示歌词
        lrcType: 0,
        // 音量
        volume: 0.15,
        // 开启迷你模式
        mini: true,
        // 自动播放
        autoplay: true
      }
    },
  ],
  [
    'cursor-effects',
    {
       size: 2, // size of the particle, default: 2
       shape:'star', // shape of the particle, default: 'star'
       zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },
  ],
  [
    "vuepress-plugin-live2d",
      {
        "modelName": ['z16','Epsilon2.1','izumi','koharu','shizuku','miku', 'hijiki', 'tororo'],
        "mobileShow": false
      }
  ],
  ["demo-block"]
 ]