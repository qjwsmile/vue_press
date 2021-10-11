const head = require('./config/headConfig')
const plugins = require('./config/pluginsConfig')
const sidebar = require('./config/sidebarConfig')

module.exports = {
  base:'/vue_press/',
  head,
  plugins,
  title: 'smile',
  description: 'Just playing around',
  themeConfig:{
    lastUpdated: '更新时间',
    smoothScroll: true,
    sidebar
  }
}