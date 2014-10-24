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

  document.getElementById('signup').addEventListener('submit', function() {
    debugger
    return false;
  });
})();
