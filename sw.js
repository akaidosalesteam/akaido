// 极简 Service Worker：只为了让手机把网站当成可安装的 App。
// 不缓存任何内容，所以更新了 index.html 之后不会读到旧版本。
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
