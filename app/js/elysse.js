import '../css/app.styl'
import 'file?name=favicon.ico!../assets/images/favicon.ico'

const each = [].forEach

const setActivePage = () => {
  each.call(document.querySelectorAll('.active'), el => el.classList.remove('active'))

  const loc = (location.hash || '#home')
  const id = `${loc}-page`
  document.querySelector(id).classList.add('active')

  document.body.className = document.body.className.replace(/\b\w+-page\b/, '').trim()
  document.body.classList.add(id.slice(1))

  if (loc === '#home') {
    window.history.replaceState(null, document.title, '/')
  } else {
    document.querySelector(`.page-links a[href="${loc}"]`).classList.add('active')
  }
}

window.addEventListener('hashchange', setActivePage, false)
setActivePage()

// handle escape key
document.addEventListener('keyup', e => {
  if (e.which === 27) location.hash = '#home'
})

// HTML5's :invalid psudo-selector is too aggressive (it's invalid on page load)
const email = document.querySelector('input[type="email"')
email.addEventListener('blur', e => email.classList.toggle('invalid', !email.validity.valid))
email.addEventListener('keyup', e => email.classList.remove('invalid'))
