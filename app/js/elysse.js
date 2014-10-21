(function() {

  var each = [].forEach;


  // Change pages
  each.call(document.querySelectorAll('.nav-link'), function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      each.call(['shows', 'mailing-list', 'contact'], function(page) {
        document.body.classList.toggle(page + '-page', link.href === page);
      });
    });
  });

})();