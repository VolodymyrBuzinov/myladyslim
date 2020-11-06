import galleryItems from './massage-items';
const ref = {
  containerGallery: document.querySelector('.massage-js-gallery'),
  closeBtn: document.querySelector(
    '.massage-lightbox__button[data-action="massage-close-lightbox"]',
  ),
  lightBox: document.querySelector('.massage-lightbox'),
  bigImg: document.querySelector('.massage-lightbox__image'),
  arrowUp: document.querySelector('#button'),
  arrowLeft: document.querySelector('.massage-arrow-left'),
  arrowRight: document.querySelector('.massage-arrow-right'),
};
const galleryItemsPalette = function (images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="massage-gallery__item">
       <a
         class="massage-gallery__link"
         href="${original}"
       >
         <img
          class="massage-gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </li>`,
    )
    .join('');
};
ref.containerGallery.insertAdjacentHTML(
  'beforeend',
  galleryItemsPalette(galleryItems),
);
const showImg = evt => {
  evt.preventDefault();
  ref.lightBox.classList.add('is-open');
  ref.bigImg.src = evt.target.dataset.source;
  ref.arrowUp.classList.add('is-hidden');
};
const closeImg = () => {
  ref.lightBox.classList.remove('is-open');
  ref.bigImg.src = '';
  ref.arrowUp.classList.remove('is-hidden');
};
const getIndexOfChildren = () => {
  return galleryItems.findIndex(evt => evt.original === ref.bigImg.src);
};
const controlButtonsOfGallery = evt => {
  if (
    evt.target.classList.contains('massage-gallery__image') &&
    !ref.lightBox.classList.contains('is-open')
  ) {
    showImg(evt);
  }
  if (
    (ref.lightBox.classList.contains('is-open') &&
      evt.target === ref.closeBtn) ||
    evt.code === 'Escape'
  ) {
    closeImg(evt);
  }
};
const isOnSwitchImages = evt => {
  const idx = getIndexOfChildren();
  if (evt.code === 'ArrowLeft') {
    if (idx !== 0) {
      ref.bigImg.src = galleryItems[idx - 1].original;
    }
  }
  if (evt.code === 'ArrowRight') {
    if (idx !== galleryItems.length - 1) {
      ref.bigImg.src = galleryItems[idx + 1].original;
    }
  }
};

addEventListener('click', controlButtonsOfGallery);
addEventListener('keydown', controlButtonsOfGallery);
addEventListener('keydown', isOnSwitchImages);
ref.arrowLeft.addEventListener('click', () => {
  const index = getIndexOfChildren();
  if (index !== 0) {
    ref.bigImg.src = galleryItems[index - 1].original;
  }
});
ref.arrowRight.addEventListener('click', () => {
  const index = getIndexOfChildren();
  if (index !== galleryItems.length - 1) {
    ref.bigImg.src = galleryItems[index + 1].original;
  }
});