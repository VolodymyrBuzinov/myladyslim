"use strict";

var _massageItems = _interopRequireDefault(require("./massage-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ref = {
  containerGallery: document.querySelector('.massage-js-gallery'),
  closeBtn: document.querySelector('.massage-lightbox__button[data-action="massage-close-lightbox"]'),
  lightBox: document.querySelector('.massage-lightbox'),
  bigImg: document.querySelector('.massage-lightbox__image')
};

var galleryItemsPalette = function galleryItemsPalette(images) {
  return images.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "<li class=\"massage-gallery__item\">\n       <a\n         class=\"massage-gallery__link\"\n         href=\"".concat(original, "\"\n       >\n         <img\n          class=\"massage-gallery__image\"\n           src=\"").concat(preview, "\"\n           data-source=\"").concat(original, "\"\n           alt=\"").concat(description, "\"\n         />\n       </a>\n     </li>");
  }).join('');
};

ref.containerGallery.insertAdjacentHTML('beforeend', galleryItemsPalette(_massageItems["default"]));

var showImg = function showImg(evt) {
  evt.preventDefault();
  ref.lightBox.classList.add('is-open');
  ref.bigImg.src = evt.target.dataset.source;
};

var closeImg = function closeImg() {
  ref.lightBox.classList.remove('is-open');
  ref.bigImg.src = '';
};

var getIndexOfChildren = function getIndexOfChildren() {
  return _massageItems["default"].findIndex(function (evt) {
    return evt.original === ref.bigImg.src;
  });
};

var controlButtonsOfGallery = function controlButtonsOfGallery(evt) {
  if (evt.target.classList.contains('massage-gallery__image') && !ref.lightBox.classList.contains('is-open')) {
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
      ref.bigImg.src = _massageItems["default"][idx - 1].original;
    }
  }

  if (evt.code === 'ArrowRight') {
    if (idx !== _massageItems["default"].length - 1) {
      ref.bigImg.src = _massageItems["default"][idx + 1].original;
    }
  }
};

var onTapScreen = function onTapScreen(evt) {
  var index = getIndexOfChildren();

  if (evt.targetTouches.length === 1) {
    if (index !== _massageItems["default"].length - 1) {
      ref.bigImg.src = _massageItems["default"][index + 1].original;
    }
  }

  if (evt.targetTouches.length !== 1) {
    if (idx !== 0) {
      ref.bigImg.src = _massageItems["default"][idx - 1].original;
    }
  }
};

addEventListener('click', controlButtonsOfGallery);
addEventListener('keydown', controlButtonsOfGallery);
addEventListener('keydown', isOnSwitchImages);
addEventListener('touchstart', onTapScreen);