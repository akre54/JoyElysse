(function() {

  var each = [].forEach;

  var setActivePage = function() {

    var previous = document.querySelector('.active');
    previous && previous.classList.remove('active');

    var id = (location.hash || '#home') + '-page';
    document.querySelector(id).classList.add('active');
  }

  window.addEventListener('hashchange', setActivePage);
  setActivePage();

  // HTML5's :invalid psudo-selector is too aggressive (invalid on page load)
  var checkValidity = function() { this.classList.toggle('invalid', !this.validity.valid); }
  var email = document.querySelector('input[type="email"');
  email.addEventListener('blur', checkValidity);
  email.addEventListener('keyup', checkValidity);
})();
