import { galleryItems } from './gallery-items.js';
// Change code below this line
 

const galleryListEl = document.querySelector(".gallery");

galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(galleryItems));
galleryListEl.addEventListener('click', onGalleryListItemClick);


function createGalleryCards(galleryItems) {
   return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");
}
function onGalleryListItemClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
  instance.show();

  galleryListEl.addEventListener('keydown', (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
});
}