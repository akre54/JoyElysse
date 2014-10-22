(function() {

  var each = [].forEach;

  var toggleCloseBtn = function() {
    var hide = (location.hash === '#home' || location.hash === '');
    document.getElementById('close-btn').style.display = hide ? 'none' : 'block';

    // var previous = document.querySelector('.active');
    // previous && previous.classList.remove('active');

    // var id = location.hash.match(/#(.*)/)[1];
    // document.getElementById(id).classList.add('active');
  }

  window.addEventListener('hashchange', toggleCloseBtn);
  toggleCloseBtn();


  // Change pages
  each.call(document.querySelectorAll('.nav-link'), function(link) {
    link.addEventListener('click', function(e) {
      var previous = document.querySelector('.active');
      previous && previous.classList.remove('active');

      var id = e.currentTarget.href.match(/#(.*)/)[1] || 'home';
      document.getElementById(id + '-page').classList.add('active');
    });
  });

})();