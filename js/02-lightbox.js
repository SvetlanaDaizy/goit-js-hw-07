import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const createListImg = galleryItems.map(({ preview, original, description }) => {
    return ` <li><a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  data-source="${original}"
  alt="${description}"
  title="${description} " />
</a> </li>`;
})

galleryList.innerHTML = createListImg.join('');

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250,} );

