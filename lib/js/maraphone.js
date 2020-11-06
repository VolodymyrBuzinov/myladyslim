"use strict";

var _galleryItems = _interopRequireDefault(require("./gallery-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ref = {
  containerGallery: document.querySelector('.js-gallery'),
  closeBtn: document.querySelector('.lightbox__button[data-action="close-lightbox"]'),
  lightBox: document.querySelector('.lightbox'),
  bigImg: document.querySelector('.lightbox__image'),
  arrowUp: document.querySelector('#button'),
  arrowLeft: document.querySelector('.arrow-left'),
  arrowRight: document.querySelector('.arrow-right')
};

var galleryItemsPalette = function galleryItemsPalette(images) {
  return images.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "<li class=\"gallery__item\">\n       <a\n         class=\"gallery__link\"\n         href=\"".concat(original, "\"\n       >\n         <img\n          class=\"gallery__image\"\n           src=\"").concat(preview, "\"\n           data-source=\"").concat(original, "\"\n           alt=\"").concat(description, "\"\n         />\n       </a>\n     </li>");
  }).join('');
};

ref.containerGallery.insertAdjacentHTML('beforeend', galleryItemsPalette(_galleryItems["default"]));

var showImg = function showImg(evt) {
  evt.preventDefault();
  ref.lightBox.classList.add('is-open');
  ref.bigImg.src = evt.target.dataset.source;
  ref.arrowUp.classList.add('is-hidden');
};

var closeImg = function closeImg() {
  ref.lightBox.classList.remove('is-open');
  ref.arrowUp.classList.remove('is-hidden');
  ref.bigImg.src = '';
};

var getIndexOfChildren = function getIndexOfChildren() {
  return _galleryItems["default"].findIndex(function (evt) {
    return evt.original === ref.bigImg.src;
  });
};

var controlButtonsOfGallery = function controlButtonsOfGallery(evt) {
  if (evt.target.classList.contains('gallery__image') && !ref.lightBox.classList.contains('is-open')) {
    showImg(evt);
  }

  if (ref.lightBox.classList.contains('is-open') && evt.target === ref.closeBtn || evt.code === 'Escape') {
    closeImg(evt);
  }
};

var isOnSwitchImages = function isOnSwitchImages(evt) {
  var idx = getIndexOfChildren();

  if (evt.code === 'ArrowLeft') {
    if (idx !== 0) {
      ref.bigImg.src = _galleryItems["default"][idx - 1].original;
    }
  }

  if (evt.code === 'ArrowRight') {
    if (idx !== _galleryItems["default"].length - 1) {
      ref.bigImg.src = _galleryItems["default"][idx + 1].original;
    }
  }
};

addEventListener('click', controlButtonsOfGallery);
addEventListener('keydown', controlButtonsOfGallery);
addEventListener('keydown', isOnSwitchImages);
ref.arrowLeft.addEventListener('click', function () {
  var index = getIndexOfChildren();

  if (index !== 0) {
    ref.bigImg.src = _galleryItems["default"][index - 1].original;
  }
});
ref.arrowRight.addEventListener('click', function () {
  var index = getIndexOfChildren();

  if (index !== _galleryItems["default"].length - 1) {
    ref.bigImg.src = _galleryItems["default"][index + 1].original;
  }
});