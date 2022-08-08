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
    "revision": "176fb2769d46dfd3b31afafdcd750c24"
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
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.87fb036a.js",
    "revision": "e1b8f061a33588a0a39ba825fd8311ee"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.3ce24242.js",
    "revision": "39e5e6f084e4f74d8c47b6344ad6a523"
  },
  {
    "url": "assets/js/15.1ad9e7af.js",
    "revision": "db8f0050de63e8e9fb79afb1f14d8086"
  },
  {
    "url": "assets/js/16.8e39ac90.js",
    "revision": "5efac7b825b1d840f231ba40626a9c45"
  },
  {
    "url": "assets/js/17.838c3951.js",
    "revision": "b9b41fe53c2ccae5effa7a1c00537e4d"
  },
  {
    "url": "assets/js/18.54f12e55.js",
    "revision": "0d28aa7b2977ece511f2b2193ad79b44"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.d527cb92.js",
    "revision": "e7ff3c17e8f44573426b4599fa934ee8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "64b746fa776b046911f6aa4bfa16d605"
  },
  {
    "url": "categories/java/index.html",
    "revision": "80a03869069b18756d4bb821b666385f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "18738535529992608022f16a9320db90"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "424c23ee54fb9d7c2c529317b9bd04b0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "cc7b906a2634850e3096088216df5a54"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0e14f573ec00a83aec2ec6f87c0b19b5"
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
    "revision": "b35e54e85218c085de994fdcdd7726bf"
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
    "revision": "04885cd6a7e26576209c065edf1bc813"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e9016bf97be2f312abebbbc1dd072454"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c9f326f02a847a39592b71d59c0e1dde"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f323950e160d9a509cf4a6f57f2da342"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f50dd2fe779fba0be1d0497dc66134e3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "884adf784d583c45f36055d2fb311eb5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "de6e693c2a1b02cc0ded062f9c5b5533"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5587f54d15efbcbebf631cbe94961e27"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "82ec66e4c031af58f98fc50333838aab"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cefa9579f81fabd2e3c2a42a35569e35"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2144551288d5c5f047e6a9aecc819c3a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2300fdb84abe756eec902b29aa4cd0d3"
  },
  {
    "url": "timeline/index.html",
    "revision": "77d28ce2c6dcdc40fe011c255fbd9893"
  },
  {
    "url": "技术文章/index.html",
    "revision": "70a04d1b6e5859653b94982e43260da9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f9f2e131a81c6ffb17a048604b430910"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d3802561be7f11305883a94eecd4dece"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9c1b19d361a30f05794f4983ca9093f3"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7f3b1667d626bf5c738d17df1a0a31bc"
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
