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
    "revision": "d58069774f6cfe2db84d6952efa7baa9"
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
    "url": "assets/js/12.6a9e1917.js",
    "revision": "d4bcbb43e9a1d243c289435e0f560648"
  },
  {
    "url": "assets/js/13.be8adc14.js",
    "revision": "54d56710567710c05c18ff38728b1e01"
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
    "url": "assets/js/17.6ac66727.js",
    "revision": "142f6e88cbec190daf648effaaf004f4"
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
    "url": "assets/js/app.f610d6a0.js",
    "revision": "332a7a6b9adeb5fd7a59c8cfa1fb090f"
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
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "bddd7c9dc5096cd0b2984044fed3f8c8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "eb91bfbcf3db92b2ab4f0515ffecbf77"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d147d54811df6b76084a94d498b3a9dd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e833b265fbfb2cf55dde968fcf931d04"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9b8115d998e4c79d57787e41beee9e06"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "941bb11b19d783f6dc58521be3d0ad6b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
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
    "revision": "a6858846152cef12dd78fecc7590b13b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "514e4ed88fcef1a8f9b89d485f050c67"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2f0f69ae0e3e003e437441bf2b2ae850"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c11cba0141ffaab78e2e1db0a8cddd13"
  },
  {
    "url": "tags/js/index.html",
    "revision": "448f24a26044fb25fe73f08f334f11c0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "21d7a17116247d34a889e7aa858d4e2c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "504b1d436e04239d4b098e84884b5a34"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b7d66630224cbd7357fd7a499cebc8c4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1a368e001f375be7243d0b3f9ce41317"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "fd24faa03c5b96d357513469280fc26d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e2d53d377d7ce47b0d6b92aeef85ec70"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4398a2ae02fcde637919ea6cfcbbbd0f"
  },
  {
    "url": "timeline/index.html",
    "revision": "08517eea447f91f233dfc5ad80c5f29b"
  },
  {
    "url": "技术文章/index.html",
    "revision": "733227d44d52f255a2106992478788ff"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6d32a7423909b579f05fbcdedbc6e389"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "76b2099fb21179522846c7450934612e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d575b7e337a6504497b482a496c5de03"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c4b19c3dbf63564bde816f69d9003204"
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
