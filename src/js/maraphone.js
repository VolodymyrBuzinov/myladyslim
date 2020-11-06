import galleryItems from './gallery-items';
const ref = {
  containerGallery: document.querySelector('.js-gallery'),
  closeBtn: document.querySelector(
    '.lightbox__button[data-action="close-lightbox"]',
  ),
  lightBox: document.querySelector('.lightbox'),
  bigImg: document.querySelector('.lightbox__image'),
  arrowUp: document.querySelector('#button'),
  arrowLeft: document.querySelector('.arrow-left'),
  arrowRight: document.querySelector('.arrow-right'),
};

const galleryItemsPalette = function (images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
       <a
         class="gallery__link"
         href="${original}"
       >
         <img
          class="gallery__image"
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
  ref.arrowUp.classList.remove('is-hidden');
  ref.bigImg.src = '';
};
const getIndexOfChildren = () => {
  return galleryItems.findIndex(evt => evt.original === ref.bigImg.src);
};
const controlButtonsOfGallery = evt => {
  if (
    evt.target.classList.contains('gallery__image') &&
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