# PROTOTYPE!

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => console.log('LATATA PWA Service Worker sėkmingai paruoštas. Aplinka saugi.'))
        .catch((err) => console.error('Klaida registruojant SW:', err));
    });
  }
</script>
```
