(function() {

  var each = [].forEach;

  var toggleCloseBtn = function() {
    var hide = (location.hash === '#home' || location.hash === '');
    document.getElementById('close-btn').style.display = hide ? 'none' : 'block';
  }

  window.addEventListener('hashchange', toggleCloseBtn);
  toggleCloseBtn();


  // // Change pages
  // each.call(document.querySelectorAll('.nav-link'), function(link) {
  //   link.addEventListener('click', function(e) {
  //     each.call(['shows', 'mailing-list', 'contact'], function(page) {
  //       document.body.classList.toggle(page + '-page', link.href === page);
  //     });
  //   });
  // });

})();