self.addEventListener('install', (event) => {
    //pre-catching
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          'index.html',
          'edit.html',
          './styles/styles.css',
          './scripts/notes-app.js',
          './scripts/notes-edit.js',
          './scripts/notes-functions.js',
          './scripts/uuid.js',
        ]);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });

  