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
    "revision": "1e6bee3145b950a8663d19c056779e2c"
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
    "url": "assets/js/12.4cc9c99f.js",
    "revision": "9ac2f230b43a1505111309b4e2d66143"
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
    "url": "assets/js/16.0a78aac3.js",
    "revision": "6de673e7ef988dbbfd15aabb0c2f81dd"
  },
  {
    "url": "assets/js/17.79a44560.js",
    "revision": "68e21a8b800caa000b89214f35b6becf"
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
    "url": "assets/js/app.fb99964f.js",
    "revision": "dc955a6d21cd1036883ceb713eae85a7"
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
    "revision": "def1f4d8082990736e9e2497cd90c94e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ccc5f336a9a76669a44c4009375f48f3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "dec2c7ee251f9d7f0d220fae179379eb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6837c9f350cc76f86aa44deed90f2448"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "deb95999664f7f7e1ebefa7ce3d2e200"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "27cb9e03c5bc5705efe6a4da165677c5"
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
    "revision": "267ca35c012336670da874d11eada732"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d50174f4092e1fefe47425e45f171c27"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8cc73031d3ddd7166435a85715f7933f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a19aeff7f21dda8e2e57515a1e980197"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d9a5c50d15d423f3acba8dfad073e0d6"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d77dec202ec4e5f6533f4387299998e0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b305e84cc0d548d6cbdee310bd95aa7d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "03a0c51c4a56c0dabd84edb0bc494e27"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "739adf1c7a3cc8d30e0b255abaa05399"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b051d1fd6a02fc166df18e2b3c8ac79e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2d29e1b85dd41c4ec52dc06c20765c61"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "054c632c3bee319d0e48b32bf3de71af"
  },
  {
    "url": "timeline/index.html",
    "revision": "2be50fe8d0eec4fba72626499f378c39"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "35a771a60e73eca22ce47ec07de5fb39"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6df2d78cbf60d992ae705d9167cfa0b0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d8413e895ee6d470ea23d2ed8d37f837"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f7000bcc62035067dc4616664114f44d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1a52e79a37dc54ba671bec5f30cc9bde"
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
