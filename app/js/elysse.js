(function() {

  var setActivePage = function() {
    var previous = document.querySelector('.active');
    previous && previous.classList.remove('active');

    var id = (location.hash || '#home') + '-page';
    document.querySelector(id).classList.add('active');
  }

  window.addEventListener('hashchange', setActivePage);
  setActivePage();

  // handle escape key
  document.addEventListener('keyup', function(e) {
    if (e.which === 27) location.hash = '#home';
  });

  // HTML5's :invalid psudo-selector is too aggressive (it's invalid on page load)
  var email = document.querySelector('input[type="email"');
  email.addEventListener('blur', function() { this.classList.toggle('invalid', !this.validity.valid); });
  email.addEventListener('keyup', function() { this.classList.remove('invalid'); });
})();
