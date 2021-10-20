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
    "revision": "a673a2f8df9bff1fd8392133e13231b7"
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
    "url": "assets/js/app.d1d53337.js",
    "revision": "da27838d1f8732d9fe1f21e75f92230e"
  },
  {
    "url": "children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
  },
  {
    "url": "Css/index.html",
    "revision": "5f114bc6563d521b9ff3313cc6059216"
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
    "revision": "d4ef545f49d154ed304cf071f924728a"
  },
  {
    "url": "JS/array.html",
    "revision": "50d02d3bdff99c3a6ca8bf3e518be230"
  },
  {
    "url": "JS/index.html",
    "revision": "dcdab08752cd09a11279698d2861311b"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "ebffff16f816b250e41f5b4ec2e6e530"
  },
  {
    "url": "JS/string.html",
    "revision": "b09adad2ded5ebff825cd61741a5b858"
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
    "revision": "d5b1c22fb3b6c7034c827573ed0a9769"
  },
  {
    "url": "VUE/SetUp/defineEmits.html",
    "revision": "aacf9eebc25f65e4ab6d21351801df04"
  },
  {
    "url": "VUE/SetUp/defineEmitsTypeDeclaration.html",
    "revision": "7d53066970e3a051bef34aadcc43de47"
  },
  {
    "url": "VUE/SetUp/defineProps.html",
    "revision": "48c365a0b5ca217caee71d04cfa4a1d0"
  },
  {
    "url": "VUE/SetUp/definePropsTypeDeclaration.html",
    "revision": "6ccbbd8c60b8f945440933947ea0c786"
  },
  {
    "url": "VUE/SetUp/index.html",
    "revision": "1ba323aab73581b6b44c14c385f99067"
  },
  {
    "url": "VUE/SetUp/use.html",
    "revision": "b0ca95fe158da5a04bbf803718bb9124"
  },
  {
    "url": "VUE/SetUp/withDefaults.html",
    "revision": "5bf98f4cc83f01d7dad85dacecbae6e3"
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
