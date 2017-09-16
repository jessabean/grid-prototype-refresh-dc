(function() {
  var toggleButton = document.querySelector('.button-toggle'),
    debugGrid = document.querySelector('.wrapper-debug');

  function toggleGrid(e) {
    var target = e.target;

    if(target.classList.contains('button-toggle')) {
      e.preventDefault();
      debugGrid.classList.toggle('is-active');
    }
  }

  document.addEventListener('click', toggleGrid);
})();
