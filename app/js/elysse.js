(function() {

  var each = [].forEach;

  var toggleCloseBtn = function() {

    var previous = document.querySelector('.active');
    previous && previous.classList.remove('active');

    var id = (location.hash || '#home') + '-page';
    document.querySelector(id).classList.add('active');

    document.querySelector('.active .close-btn').classList.toggle('show', id !== '#home');
  }

  window.addEventListener('hashchange', toggleCloseBtn);
  toggleCloseBtn();


  // Change pages
  each.call(document.querySelectorAll('.nav-link'), function(link) {
    link.addEventListener('click', function(e) {
      // var previous = document.querySelector('.active');
      // previous && previous.classList.remove('active');

      // var id = e.currentTarget.href.match(/#(.*)/)[1] || 'home';
      // document.getElementById(id + '-page').classList.add('active');
    });
  });

})();