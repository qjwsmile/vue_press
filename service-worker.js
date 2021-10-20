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
    "revision": "1c3d0706e88e0ffbac0c0b932cea8c5d"
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
    "url": "assets/js/10.c2e2de48.js",
    "revision": "38ad9c5e802d94a9ca796308e77f4981"
  },
  {
    "url": "assets/js/11.08cf73bc.js",
    "revision": "f5ab5dd3050ef0ba6cfe19a7906bc1d0"
  },
  {
    "url": "assets/js/12.9ff6e0fa.js",
    "revision": "06a3b6d6abb55ce546c66b844202844e"
  },
  {
    "url": "assets/js/2.2377b62c.js",
    "revision": "d28c8ed4ec7f21b97c43b10066f2f351"
  },
  {
    "url": "assets/js/3.d5dad580.js",
    "revision": "acd801e3e01322aeafbf79b49b23fd18"
  },
  {
    "url": "assets/js/4.909dd022.js",
    "revision": "9cbf537d0fb45525c41db9885010e71f"
  },
  {
    "url": "assets/js/5.7b1206f9.js",
    "revision": "15d286898015fbae61aae4b974ac2d03"
  },
  {
    "url": "assets/js/6.d77e62b8.js",
    "revision": "e3d838e8d63f68bf5cd63781ff3e73d1"
  },
  {
    "url": "assets/js/7.3b8af3e7.js",
    "revision": "a0ef4e48c35bd24e6950d10268f2a158"
  },
  {
    "url": "assets/js/8.587b5c21.js",
    "revision": "b1a046a66d36b45520b97016b894e6c3"
  },
  {
    "url": "assets/js/9.b0047bbf.js",
    "revision": "53665873dd44d19aa47f1e64f1a0283e"
  },
  {
    "url": "assets/js/app.3f4c41e4.js",
    "revision": "46d3271e36f4b2d7678d1de5d6c58cfc"
  },
  {
    "url": "children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
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
    "revision": "b67a9738c4a1f4af3706e06adcf4b705"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "ebffff16f816b250e41f5b4ec2e6e530"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "styles/reset.css",
    "revision": "31d9e65d63b588a4292043cc3a9e3ef4"
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
