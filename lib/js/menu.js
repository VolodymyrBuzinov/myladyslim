"use strict";

(function () {
  var menuBtnRef = document.querySelector('[data-menu-button]');
  var mobileMenuRef = document.querySelector('[data-menu]');
  menuBtnRef.addEventListener('click', function () {
    var expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });
})();