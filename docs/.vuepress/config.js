const head = require('./config/headConfig')
const plugins = require('./config/pluginsConfig')
const nav = require("./config/navConfig");
const path = require('path')
module.exports = {
  base:'/vue_press/',
  head,
  plugins,
  title: 'smile',
  description: 'Just playing around',
  themeConfig:{
    lastUpdated: '更新时间',
    smoothScroll: true,
    nav
  }
}