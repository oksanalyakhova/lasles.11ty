if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/sw.js')
      .then(reg => console.log('SW registered!', reg))
      .catch(err => console.log('Boo!', err));
      })
  }
