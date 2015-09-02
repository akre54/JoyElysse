require('../css/app.styl')
require('file?name=favicon.ico!../assets/images/favicon.ico')

var each = [].forEach

var setActivePage = function() {
  each.call(document.querySelectorAll('.active'), function(el) { el.classList.remove('active') })

  var loc = (location.hash || '#home')
  var id = loc + '-page'
  document.querySelector(id).classList.add('active')

  document.body.className = document.body.className.replace(/\b\w+-page\b/, '').trim()
  document.body.classList.add(id.slice(1))

  if (loc === '#home') {
    window.history.replaceState(null, document.title, '/')
  } else {
    document.querySelector('.page__links a[href="'+ loc + '"]').classList.add('active')
  }
}

window.addEventListener('hashchange', setActivePage, false)
setActivePage()

// handle escape key
document.addEventListener('keyup', function(e) {
  if (e.which === 27) location.hash = '#home'
})

// HTML5's :invalid psudo-selector is too aggressive (it's invalid on page load)
var email = document.querySelector('input[type="email"')
email.addEventListener('blur', function() { this.classList.toggle('invalid', !this.validity.valid) }, false)
email.addEventListener('keyup', function() { this.classList.remove('invalid') }, false)
