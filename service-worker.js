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
    "revision": "8774d0f8ef7094dbf40c485befc2c348"
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
    "url": "assets/js/11.bb60162c.js",
    "revision": "bc328e9224bd609fda26ddea988a819b"
  },
  {
    "url": "assets/js/12.5a3ae3c9.js",
    "revision": "6d90242243565e426e6aa2bbb5caa48f"
  },
  {
    "url": "assets/js/13.f9444668.js",
    "revision": "a57f1dd7c4334f6eb73b718f0a44b0a2"
  },
  {
    "url": "assets/js/14.fe340ec8.js",
    "revision": "7b87f140cb4f677846d206ec5c804184"
  },
  {
    "url": "assets/js/15.ae2129db.js",
    "revision": "8f0b7c8756a63f8ca9991ab1bea0cde0"
  },
  {
    "url": "assets/js/16.be2e8eac.js",
    "revision": "09cac4d489a08c569474a72c0141ec63"
  },
  {
    "url": "assets/js/17.d3ecb21e.js",
    "revision": "195a301522e3a4590621b44648c48b42"
  },
  {
    "url": "assets/js/18.3e17d2ae.js",
    "revision": "b1c0e64da753f751906aa823d0d3bdb7"
  },
  {
    "url": "assets/js/19.ce59d14c.js",
    "revision": "05c895c1abfbb9de09bebfa32a04e5f9"
  },
  {
    "url": "assets/js/2.c8f589a9.js",
    "revision": "06b382d97bd777d2e0a5b277eb1d208c"
  },
  {
    "url": "assets/js/20.2d46c0f1.js",
    "revision": "79c150089aebe0b20ad60b4632a70f2f"
  },
  {
    "url": "assets/js/21.dbdd4107.js",
    "revision": "f79772534eb9d3ddcb12b33bff420a2e"
  },
  {
    "url": "assets/js/22.d2cedcb0.js",
    "revision": "4e43df8c1d6854840c37b123e807937d"
  },
  {
    "url": "assets/js/3.f2195f92.js",
    "revision": "72dfd1dcda96ad778bfecbaed3bdf1d0"
  },
  {
    "url": "assets/js/4.69db3732.js",
    "revision": "4e1fba75d8163b34e04c9815a1a5067c"
  },
  {
    "url": "assets/js/5.4086b4c9.js",
    "revision": "750af6084bc8b7c0fe4f221f0e207d87"
  },
  {
    "url": "assets/js/6.0713891a.js",
    "revision": "4f12b9185e8e3bbc16bab2e30ab1cc56"
  },
  {
    "url": "assets/js/7.eab4f0cc.js",
    "revision": "c45b3c93513b8394c9784acd9afe9bae"
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
    "url": "assets/js/app.bd3ad932.js",
    "revision": "41453e429aba96831956f417fec3bf1e"
  },
  {
    "url": "children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
  },
  {
    "url": "css/index.html",
    "revision": "1340953d43819a207f966388396ae49e"
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
    "revision": "fd2b63f806bb523ed8322b2d291659c3"
  },
  {
    "url": "js/index.html",
    "revision": "5c571e08a610cd402ac76c7248a74ef7"
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
  },
  {
    "url": "vue/SetUp/bindStyle.html",
    "revision": "86f1b446451c28ff7ae8475a9cb4ec06"
  },
  {
    "url": "vue/SetUp/defineEmits.html",
    "revision": "69c8ed2ff662fab41f5eb36f19a4da75"
  },
  {
    "url": "vue/SetUp/defineEmitsTypeDeclaration.html",
    "revision": "34bb71b8b54d59a5006bbd628dada836"
  },
  {
    "url": "vue/SetUp/defineProps.html",
    "revision": "00269eec5609ef15af458bc0a48e8f98"
  },
  {
    "url": "vue/SetUp/definePropsTypeDeclaration.html",
    "revision": "77526a8cd925e9d6abbaf2e637fe8fab"
  },
  {
    "url": "vue/SetUp/index.html",
    "revision": "439c5efa613240bdf6d5bfe2695243e0"
  },
  {
    "url": "vue/SetUp/use.html",
    "revision": "a47f05dc7d23f09b472453a76421d204"
  },
  {
    "url": "vue/SetUp/withDefaults.html",
    "revision": "1cd4a65e8325df99444c472fff3ca0b9"
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
