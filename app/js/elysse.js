(function() {

  var each = [].forEach;

  var setPadding = function() {
    var paddingLeft = window.innerWidth < 960 ? '' : (window.innerHeight * .75) + 'px'
    document.body.style.paddingLeft = paddingLeft;
  };

  window.addEventListener('resize', setPadding, false);
  setPadding();


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