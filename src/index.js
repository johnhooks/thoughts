require('./index.css')

window.addEventListener('DOMContentLoaded', function (e) {
  if (window.location.hasOwnProperty('pathname')) {
    const path = window.location.pathname
    if (path === '/') {
      const nav = document.getElementById('nav')
      nav.style.display = 'none'
    }
  }
})
