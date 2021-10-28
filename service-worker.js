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
    "revision": "981d6384ec443e6cedc8cc134f47b789"
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
    "url": "assets/js/10.ba68c51e.js",
    "revision": "d15e414a485f49a81247c35e2491ff4d"
  },
  {
    "url": "assets/js/11.bbb07641.js",
    "revision": "efbccc51ce185a5772d607a2a4eeb797"
  },
  {
    "url": "assets/js/12.df256fd8.js",
    "revision": "6135243824a898bf80354817f737484f"
  },
  {
    "url": "assets/js/13.ee3fc819.js",
    "revision": "4e49168324914875f3cacc46c2852a6c"
  },
  {
    "url": "assets/js/14.151a9d2b.js",
    "revision": "f5c6217cadeeac6356eb2aafca54f4d3"
  },
  {
    "url": "assets/js/15.11bd6ba0.js",
    "revision": "5534aafbb4f272eb24a5e2c711bef8eb"
  },
  {
    "url": "assets/js/16.c15b5b25.js",
    "revision": "4fce17467366e3326da9ae6d643eb4fd"
  },
  {
    "url": "assets/js/17.b291ae02.js",
    "revision": "d1230c3aeb2fc73fce935ee84ba62678"
  },
  {
    "url": "assets/js/18.b2b11ca4.js",
    "revision": "af7a6523bc06e42a7361c45d21bef908"
  },
  {
    "url": "assets/js/19.924a52e6.js",
    "revision": "01d8933dcf2c84fde89c3f0c43730d34"
  },
  {
    "url": "assets/js/2.60892667.js",
    "revision": "f2b2368280db02b9485e52935cadbb0a"
  },
  {
    "url": "assets/js/20.a1f116b8.js",
    "revision": "6c1ac36fe7cb8480559879da5f5d8637"
  },
  {
    "url": "assets/js/21.403d604f.js",
    "revision": "df6f30dbb7c3160a0be5ea920e998ddb"
  },
  {
    "url": "assets/js/22.0eae08a3.js",
    "revision": "483d737b45ba7322a3580d3a4d93fbba"
  },
  {
    "url": "assets/js/23.a86221f6.js",
    "revision": "873f28b94fbdd7d51a03b73b32e22189"
  },
  {
    "url": "assets/js/24.84a97d22.js",
    "revision": "18bb3ceceea0ea5b6c697d71fa119f82"
  },
  {
    "url": "assets/js/25.3e9ad400.js",
    "revision": "1e9c0c6509aea94f686e27890a1c3f77"
  },
  {
    "url": "assets/js/26.5dd0a810.js",
    "revision": "55c367816c3eeece30e1f515a0b850c0"
  },
  {
    "url": "assets/js/3.fd45d969.js",
    "revision": "e23102598f0dba08abb16010437c7792"
  },
  {
    "url": "assets/js/4.daaadb33.js",
    "revision": "60d2fe1733a20749fece9c5370f21335"
  },
  {
    "url": "assets/js/5.f71fce9e.js",
    "revision": "48f98642b0ee0f38cc1e9d07ba9847f7"
  },
  {
    "url": "assets/js/6.e1ab521a.js",
    "revision": "4177ae0dc84fc894417a5a4f26c6e622"
  },
  {
    "url": "assets/js/7.b04190fc.js",
    "revision": "050a48ba70b7239439118a00ccad38dd"
  },
  {
    "url": "assets/js/8.3943b58e.js",
    "revision": "3d6829eae4a86c56ece35cca5cd17865"
  },
  {
    "url": "assets/js/9.505a8b8f.js",
    "revision": "acaa552fbc0cd2e2346a4d32fe434f40"
  },
  {
    "url": "assets/js/app.5038e132.js",
    "revision": "9d2a9f0148b1cb52b405ebde7280a58d"
  },
  {
    "url": "children.jpg",
    "revision": "ad7bd896d924065aabe0fa85cc6aff5d"
  },
  {
    "url": "css/index.html",
    "revision": "8ee575eedb1a4d520247165ff1f924d4"
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
    "revision": "ab9d5d4b4e7d795620cc80e00729b415"
  },
  {
    "url": "js/array.html",
    "revision": "a04396153567825fcd0b3df98f756ae7"
  },
  {
    "url": "js/index.html",
    "revision": "6fe51297b9e5427417a1f8623fb0af4c"
  },
  {
    "url": "js/interview.html",
    "revision": "5d60479aeb35f6efdf6e5e3344d5e6ea"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "ebffff16f816b250e41f5b4ec2e6e530"
  },
  {
    "url": "js/string.html",
    "revision": "518e444bf1f2de958549887b41008f7f"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "npm/index.html",
    "revision": "80ddf29895c9a8b04d7b8bff94b3d0c1"
  },
  {
    "url": "styles/reset.css",
    "revision": "31d9e65d63b588a4292043cc3a9e3ef4"
  },
  {
    "url": "vue/setup/bindStyle.html",
    "revision": "31c8664b435df5db3a79335ce1c147f0"
  },
  {
    "url": "vue/setup/defineEmits.html",
    "revision": "714e951ec6e1ae41ad18949aa01f6e0b"
  },
  {
    "url": "vue/setup/defineEmitsTypeDeclaration.html",
    "revision": "9fe10cfe06a052685ccfd12a0d6acbde"
  },
  {
    "url": "vue/setup/defineProps.html",
    "revision": "8d9e5329aeb7ad876c339473bc7e764a"
  },
  {
    "url": "vue/setup/definePropsTypeDeclaration.html",
    "revision": "d29c5970522b6959e3dddb98df676742"
  },
  {
    "url": "vue/setup/index.html",
    "revision": "e82daffc08e72141c6b4c994ed679912"
  },
  {
    "url": "vue/setup/use.html",
    "revision": "c0933484792b900c44f7095a69e25e81"
  },
  {
    "url": "vue/setup/withDefaults.html",
    "revision": "7b7ac9ea67c7e1ca7028df445a0a279d"
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
