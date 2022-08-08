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
    "revision": "899a95eb387cbec8cd03b2c99c3d6d83"
  },
  {
    "url": "assets/css/0.styles.a6776394.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/1659969026046.d780237a.png",
    "revision": "d780237a4f15f15f9c42095683bb6950"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.f28f47b7.js",
    "revision": "18f7648a2ddfbd0a87c9b0c40ca4f738"
  },
  {
    "url": "assets/js/11.6bf6f5bb.js",
    "revision": "3c95afe4c80bdead3aa8006311be777e"
  },
  {
    "url": "assets/js/12.87fb036a.js",
    "revision": "e1b8f061a33588a0a39ba825fd8311ee"
  },
  {
    "url": "assets/js/13.aa3a87af.js",
    "revision": "11d26009239d91f3657961c5af008dff"
  },
  {
    "url": "assets/js/14.9eb03083.js",
    "revision": "39b8a666c9558e3e91720e7d38d58e82"
  },
  {
    "url": "assets/js/15.4a678ad2.js",
    "revision": "63c64fc0c7078e757c461b9567230aaa"
  },
  {
    "url": "assets/js/16.10306263.js",
    "revision": "726412601eb0ac1b810c9ec5f670545c"
  },
  {
    "url": "assets/js/17.ea2fffa9.js",
    "revision": "23a16002a25969a14bdd8f81fbaa28c4"
  },
  {
    "url": "assets/js/18.811f2669.js",
    "revision": "086235dc9aa06aa40f207ba5daaf0207"
  },
  {
    "url": "assets/js/4.7a705a58.js",
    "revision": "ef65c7a1a8776a36201537aac67b9d24"
  },
  {
    "url": "assets/js/5.83f21f81.js",
    "revision": "a8eba98a5dbe08c431ae7ffd6894c0a1"
  },
  {
    "url": "assets/js/6.0ac397a7.js",
    "revision": "19b980f7e558905d554c9df25a683488"
  },
  {
    "url": "assets/js/7.2ef4d5b3.js",
    "revision": "32c6c6605d8bc2448d274a992a07b9c7"
  },
  {
    "url": "assets/js/8.6d904106.js",
    "revision": "488419ad7c4cdc89f7b9daeb0f6c3a37"
  },
  {
    "url": "assets/js/9.19d234b6.js",
    "revision": "8cac53b15e85227ae636c1313cad05a9"
  },
  {
    "url": "assets/js/app.e143d926.js",
    "revision": "48869e645141dcc18ba8e440704cee98"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.65f71830.js",
    "revision": "a4c009855a28aa340896f5bdf55a7e97"
  },
  {
    "url": "avatar.png",
    "revision": "e97ff89c29a5c32182bd8549be8baabe"
  },
  {
    "url": "categories/index.html",
    "revision": "a9b28ba8891b2d9447da5e97319b37d5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "163282e7f843d69e19404e92b95aed2d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "76032d1947856aea8308b2882a189c53"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "175fb8858dd8d7cf715a1a018790e17d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5947b1af1736c21fd2128ff031e91fdc"
  },
  {
    "url": "css/style.css",
    "revision": "1ff6d497c2fdd068985e3db2a23065f5"
  },
  {
    "url": "guide/index.html",
    "revision": "93e9f747855afca4aeea93710ab0deb1"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "185e55c82c532f6782fdd8ffd76026b5"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "9802901b4dc9454a637cd0311a0f5211"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "be4b7267778b867d22ff21238175ed7b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0f7b88e991a8a8d145da43dc0de0cd9f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5172c1e698db71f690fbc723d3fa9805"
  },
  {
    "url": "tags/js/index.html",
    "revision": "196238744ffe61d7d77165bd0aafdc71"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a6e21dc302ea4369e42238b412182006"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f490f345a9a1d0df3820ec0bbfa9408e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "40845dc0028896d374756401b7fd4a74"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2614420f147f4d9116d0994fe308294f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "de7d4e773c98a2e4f3960398277084b2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0e0555571b8518a24c649dfd8ac2e5ac"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6097d5e3cad78611c20dac94174a737d"
  },
  {
    "url": "timeline/index.html",
    "revision": "b332a25f8aee67a143ad25d27496b4b5"
  },
  {
    "url": "技术文章/index.html",
    "revision": "0de738a67b03af46685367eda55c450d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "80053c47bb8c562186442dc3c32babcb"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b6c4d9c50e6c3a06297f8cbd524b4335"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "089f87ccf22f20d668b660a6920395c0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "291e077c8b18a6bce9b491510e6e1b7d"
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
