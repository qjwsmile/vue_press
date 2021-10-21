/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6be98268a013ace6244cc2da63090a5c"
  },
  {
    "url": "assets/css/0.styles.d8b1cc29.css",
    "revision": "9d9b8a668a8183321036dc1a02111801"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/bg-logo.7e436a3f.svg",
    "revision": "7e436a3f02f902d264ab66c543033f44"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c78ce5c4.js",
    "revision": "25f4e96a504e6715ea8154905abc1697"
  },
  {
    "url": "assets/js/11.3abf551e.js",
    "revision": "351fdfdc94ec4b2a061ad56f48eda765"
  },
  {
    "url": "assets/js/12.37cb82f1.js",
    "revision": "b64658e791479eda5f397e812276bdd4"
  },
  {
    "url": "assets/js/13.e7e1d370.js",
    "revision": "6df6e1c028d92c98da482e56d4658efb"
  },
  {
    "url": "assets/js/14.8d3b9832.js",
    "revision": "c4b2ffcdcb3eda43d1fbcdd4ca4b9ba0"
  },
  {
    "url": "assets/js/15.073b3d7a.js",
    "revision": "b5fead38203f6d6e8c5bf9c0247b5c1a"
  },
  {
    "url": "assets/js/16.99e97614.js",
    "revision": "febc911307baf8ae2e026c8f883ed6f4"
  },
  {
    "url": "assets/js/17.593576d2.js",
    "revision": "80cdd98a723169d7ddf55d3983853ea4"
  },
  {
    "url": "assets/js/18.ed59b181.js",
    "revision": "dd2cde6d093aa6dd7b8004b0412af217"
  },
  {
    "url": "assets/js/19.a7afeaf1.js",
    "revision": "223cfa15ca9b6c23099564dcb0e95863"
  },
  {
    "url": "assets/js/2.df694d85.js",
    "revision": "3391d48693d71ce79976a8aeb5a08b3b"
  },
  {
    "url": "assets/js/20.15d01657.js",
    "revision": "b2905a426163017e15f9f8e85f79c642"
  },
  {
    "url": "assets/js/21.d36613e8.js",
    "revision": "db5bb6ca1d0aee55b3b0c5dff2203fb6"
  },
  {
    "url": "assets/js/22.a878ff1c.js",
    "revision": "19e45c6280a9eb71de07061e8b3ed6e5"
  },
  {
    "url": "assets/js/23.d04e4461.js",
    "revision": "8d74229aec452641082585cf1db98c76"
  },
  {
    "url": "assets/js/24.8bf26a5b.js",
    "revision": "430338e41ec4676dad62067ad94bc16e"
  },
  {
    "url": "assets/js/25.7f93cc3d.js",
    "revision": "0e756756da2293e5fd8a8ea5626a8808"
  },
  {
    "url": "assets/js/3.2be7695d.js",
    "revision": "72dfd1dcda96ad778bfecbaed3bdf1d0"
  },
  {
    "url": "assets/js/4.de070b9c.js",
    "revision": "4e1fba75d8163b34e04c9815a1a5067c"
  },
  {
    "url": "assets/js/5.fa4da82e.js",
    "revision": "750af6084bc8b7c0fe4f221f0e207d87"
  },
  {
    "url": "assets/js/6.ffd07152.js",
    "revision": "6039844fb348ae432034063d2734d972"
  },
  {
    "url": "assets/js/7.518ed99a.js",
    "revision": "e56e7b349f819c9ba20959d8db543c76"
  },
  {
    "url": "assets/js/8.ba912a12.js",
    "revision": "198c82bdd4adff7867c897300a81bfef"
  },
  {
    "url": "assets/js/9.394d7e5c.js",
    "revision": "c6a448b39a9ec96a3e1877b771776ad6"
  },
  {
    "url": "assets/js/app.4e396f79.js",
    "revision": "f20391e854335716fb310d9f8768f448"
  },
  {
    "url": "children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
  },
  {
    "url": "css/index.html",
    "revision": "2c317f3dc30715a446ff0ae1a0b9c9ea"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "03f4b3a313ab782f3190a06a05dbc8a0"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "deb4ce4a799cbee66a6ae30b99685368"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "c23f435820c2dcf55c3a462536e2d359"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "060c61bb21fea6da35ea153b903dea21"
  },
  {
    "url": "images/children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
  },
  {
    "url": "images/home/bg-logo.svg",
    "revision": "7e436a3f02f902d264ab66c543033f44"
  },
  {
    "url": "images/setUp/1634198186273.jpg",
    "revision": "251a11c36003e09a480724b680055b75"
  },
  {
    "url": "index.html",
    "revision": "8f6af5264ca2407aed02bcc4bd836cb5"
  },
  {
    "url": "js/array.html",
    "revision": "23d82650f7fd1b42c98dd8195cc92b7b"
  },
  {
    "url": "js/index.html",
    "revision": "78a2133ed087efed99b09afbb718bfaf"
  },
  {
    "url": "js/interview.html",
    "revision": "3640a422964abf69f2f49d3c4cdcb581"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "ebffff16f816b250e41f5b4ec2e6e530"
  },
  {
    "url": "js/string.html",
    "revision": "7fbc23539daf29488ea11053c2110c21"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "styles/reset.css",
    "revision": "31d9e65d63b588a4292043cc3a9e3ef4"
  },
  {
    "url": "vue/setup/bindStyle.html",
    "revision": "de639e70f42efbfd097e95ad1cf5ff91"
  },
  {
    "url": "vue/setup/defineEmits.html",
    "revision": "b99bb27a7b354974d7b3ba647bdabe42"
  },
  {
    "url": "vue/setup/defineEmitsTypeDeclaration.html",
    "revision": "6164c9b082278d619a99881ec2a781af"
  },
  {
    "url": "vue/setup/defineProps.html",
    "revision": "b3b109928a6627ecc4f4ba31120537e9"
  },
  {
    "url": "vue/setup/definePropsTypeDeclaration.html",
    "revision": "523f5ba7b19317c82d8b3ce6ffa022fe"
  },
  {
    "url": "vue/setup/index.html",
    "revision": "c87b766f9ec7180576e115920bb4db22"
  },
  {
    "url": "vue/setup/use.html",
    "revision": "a2f7a1502a83a3ebaec9c17a6f2032b8"
  },
  {
    "url": "vue/setup/withDefaults.html",
    "revision": "fcf32c1d8ee22139ea6d1b58524f1e57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
