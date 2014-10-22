(function() {

  var each = [].forEach;

  var toggleCloseBtn = function() {
    document.getElementById('close-btn').classList.toggle('show', location.hash.length);

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