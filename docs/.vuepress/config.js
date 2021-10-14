const head = require('./config/headConfig')
const plugins = require('./config/pluginsConfig')
const nav = require("./nav.js");
const path = require('path')
module.exports = {
  base:'/vue_press/',
  head,
  plugins,
  title: 'smile',
  description: 'Just playing around',
  alias: {
    '@imgs': path.resolve(__dirname, './public/images'),
  },
  themeConfig:{
    lastUpdated: '更新时间',
    smoothScroll: true,
    nav
  }
}