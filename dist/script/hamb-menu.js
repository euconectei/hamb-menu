(function () {

  let icon = document.querySelector('.hamb-menu_icon');
  
  function multiEvent(el, evts, fn) {
    evts.split(' ').forEach(evt => el.addEventListener(evt, fn, false));
  }

  function toggleClass() {
    icon.classList.toggle('opened');
  }

  multiEvent(icon, 'touch click', toggleClass)

}());