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
    "revision": "634d5743658acc9978b835302d0bb514"
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
    "url": "assets/js/12.6f197c9e.js",
    "revision": "e7ee429005d1f7c3e6f8feacc74b0863"
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
    "url": "assets/js/15.f78e4862.js",
    "revision": "3579e67df82441ca1b4dba0e4229c1a4"
  },
  {
    "url": "assets/js/16.3d8b3549.js",
    "revision": "6af7f169ce38656fc908ec0479bd4b06"
  },
  {
    "url": "assets/js/17.cf164b47.js",
    "revision": "e2892e0524e02c973f2ae4dedde99597"
  },
  {
    "url": "assets/js/18.a895b4b8.js",
    "revision": "6f6b769b70bfdb190e7fe36221985b57"
  },
  {
    "url": "assets/js/19.213ac322.js",
    "revision": "deacdb686557a6666f911b7508f69080"
  },
  {
    "url": "assets/js/2.ab0f101c.js",
    "revision": "06b382d97bd777d2e0a5b277eb1d208c"
  },
  {
    "url": "assets/js/20.36f0ab25.js",
    "revision": "a3b4c04ac6de3345e31f9da43b3a4fdc"
  },
  {
    "url": "assets/js/21.ba83d4fa.js",
    "revision": "29c4ba8d2d418cffd1819450e774546e"
  },
  {
    "url": "assets/js/22.37847b3d.js",
    "revision": "0fe8dcd659369c0a05a62fb7bf5f706e"
  },
  {
    "url": "assets/js/23.eee9ffab.js",
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
    "url": "assets/js/app.29b356e5.js",
    "revision": "9abaac57ef608611422aad0d244e4c74"
  },
  {
    "url": "children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
  },
  {
    "url": "css/index.html",
    "revision": "b59f1d869507c333663f8b541c3fe904"
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
    "revision": "cfb467252c4f73bfcf15c390923efc3a"
  },
  {
    "url": "js/array.html",
    "revision": "46676ae588d820d70b90dd899b871b8c"
  },
  {
    "url": "js/index.html",
    "revision": "b890fa46cb65ebf00c0c34ed5f18c5ce"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "ebffff16f816b250e41f5b4ec2e6e530"
  },
  {
    "url": "js/string.html",
    "revision": "129f0dba55a1c9a286023630117579fb"
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
    "revision": "56a7cec1d1ddf00df9db9420f6d2f297"
  },
  {
    "url": "vue/setup/defineEmits.html",
    "revision": "9171c3a88de6ac7ede22d949efee1fbb"
  },
  {
    "url": "vue/setup/defineEmitsTypeDeclaration.html",
    "revision": "fa0127414f9ff50c7049a686c29815e4"
  },
  {
    "url": "vue/setup/defineProps.html",
    "revision": "d5c8f5391588f4ff798a3d1eaa882043"
  },
  {
    "url": "vue/setup/definePropsTypeDeclaration.html",
    "revision": "372365745dda49d7d8f744d3cccd6fb3"
  },
  {
    "url": "vue/setup/index.html",
    "revision": "997b1d382da0bb5190781e64cacf43b2"
  },
  {
    "url": "vue/setup/use.html",
    "revision": "fb5a53be684b78127a5162e71085a556"
  },
  {
    "url": "vue/setup/withDefaults.html",
    "revision": "06d9718ed9573c5ed06248cee80e5d16"
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
