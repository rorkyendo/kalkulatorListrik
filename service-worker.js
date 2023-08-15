self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          './',
          'index.html',
          'manifest.json',
          'images/icons/icon-72x72.png'
          // Tambahkan file lain yang ingin Anda simpan dalam cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  