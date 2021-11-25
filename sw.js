self.addEventListener('install', (event) => {
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