(function () {

  let icon = document.querySelector('.hamb-menu_icon');
  
  function multiEvent(el, evts, fn) {
    evts.split(' ').forEach(evt => el.addEventListener(evt, fn, false));
  }

  function toggleClass() {
    icon.classList.toggle('close');
  }

  multiEvent(icon, 'touchend click', toggleClass)

}());