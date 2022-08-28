import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryDiv = document.querySelector('.gallery');

const createListImg = galleryItems.map(({ preview, original, description }) => {
    return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
})

galleryDiv.innerHTML = createListImg.join('');


galleryDiv.addEventListener('click', onGalleryClick);

const instance = basicLightbox.create(`<img src="" width="800" heiht="600">`);

function onGalleryClick(evt) {

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    instance.element().querySelector('img') = evt.target.dataset.source;
    instance.show();

    galleryDiv.addEventListener('keydown', events => {
        if (events.key === 'Escape') {
            instance.close();
        }
    });

}


