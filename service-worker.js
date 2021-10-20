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
    "revision": "d81369dd41b3b8f0b2a2f33095982fd7"
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
    "url": "assets/js/11.ef212e1e.js",
    "revision": "351fdfdc94ec4b2a061ad56f48eda765"
  },
  {
    "url": "assets/js/12.39ebda09.js",
    "revision": "f7b457010d6a6ea01cc9ad2d9e9de2e2"
  },
  {
    "url": "assets/js/13.18a30cbe.js",
    "revision": "78e6620e11d24d0796aac09109682ec7"
  },
  {
    "url": "assets/js/14.0f4f4363.js",
    "revision": "fd3af6c8819c74f1e7742492343f38e0"
  },
  {
    "url": "assets/js/15.40cf5d0f.js",
    "revision": "57767e0f3ed0b4979883150478eede81"
  },
  {
    "url": "assets/js/16.cf66a262.js",
    "revision": "6af7f169ce38656fc908ec0479bd4b06"
  },
  {
    "url": "assets/js/17.b48759d4.js",
    "revision": "e2892e0524e02c973f2ae4dedde99597"
  },
  {
    "url": "assets/js/18.61cd799a.js",
    "revision": "6f6b769b70bfdb190e7fe36221985b57"
  },
  {
    "url": "assets/js/19.66179dc3.js",
    "revision": "deacdb686557a6666f911b7508f69080"
  },
  {
    "url": "assets/js/2.ab0f101c.js",
    "revision": "06b382d97bd777d2e0a5b277eb1d208c"
  },
  {
    "url": "assets/js/20.72cbda40.js",
    "revision": "a3b4c04ac6de3345e31f9da43b3a4fdc"
  },
  {
    "url": "assets/js/21.e2fdf278.js",
    "revision": "29c4ba8d2d418cffd1819450e774546e"
  },
  {
    "url": "assets/js/22.9ba3720e.js",
    "revision": "0fe8dcd659369c0a05a62fb7bf5f706e"
  },
  {
    "url": "assets/js/23.8ff825c5.js",
    "revision": "1208d7551ff863429fbf94a8b1943559"
  },
  {
    "url": "assets/js/24.4ed94bff.js",
    "revision": "6f51baf60ec5c49da8abd8a76fdca13d"
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
    "url": "assets/js/6.0713891a.js",
    "revision": "4f12b9185e8e3bbc16bab2e30ab1cc56"
  },
  {
    "url": "assets/js/7.579c396f.js",
    "revision": "65b350832a765180c17c3d4ae2ee2254"
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
    "url": "assets/js/app.62fd3bb7.js",
    "revision": "ab5789a317f2c81051fcc8e74071e849"
  },
  {
    "url": "children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
  },
  {
    "url": "Css/index.html",
    "revision": "f46c35518592e030b2f77c0cb2c64b35"
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
    "revision": "849f2d7ae2943af1966e932d0de55058"
  },
  {
    "url": "JS/array.html",
    "revision": "7ac9ae545a2fa91ffc4572d0bc54fbd4"
  },
  {
    "url": "JS/index.html",
    "revision": "5537d1e8f8b657efc09bdd47251b7647"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "ebffff16f816b250e41f5b4ec2e6e530"
  },
  {
    "url": "JS/string.html",
    "revision": "618d2ed10784261e1cd11f69d5f57218"
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
    "url": "VUE/SetUp/bindStyle.html",
    "revision": "d41c165cd1433881d04c59f8c8786224"
  },
  {
    "url": "VUE/SetUp/defineEmits.html",
    "revision": "5245721fb3c3ee3a534bc29a66489ab7"
  },
  {
    "url": "VUE/SetUp/defineEmitsTypeDeclaration.html",
    "revision": "bd47377284df05563b4dd24be950d438"
  },
  {
    "url": "VUE/SetUp/defineProps.html",
    "revision": "a38ad3667a7cac1492629e967823b008"
  },
  {
    "url": "VUE/SetUp/definePropsTypeDeclaration.html",
    "revision": "5c3aa3f795790e96060a2d1012e24172"
  },
  {
    "url": "VUE/SetUp/index.html",
    "revision": "20140f1bced05c6c86f2457c86d2c68f"
  },
  {
    "url": "VUE/SetUp/use.html",
    "revision": "25add5a1a18f51c278b022589fb31425"
  },
  {
    "url": "VUE/SetUp/withDefaults.html",
    "revision": "b004ea56d83a511fadd80ee7dd99f43c"
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
