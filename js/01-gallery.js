import { galleryItems } from './gallery-items.js';
// Change code below this line


const cardsContainer = createGalleryCards(galleryItems);
const galleryListEl = document.querySelector(".gallery");

galleryListEl.insertAdjacentHTML('beforeend', cardsContainer);
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
    console.log(event)
}