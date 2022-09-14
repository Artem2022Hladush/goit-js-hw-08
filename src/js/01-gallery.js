// Add imports above this line
import { galleryItems } from './gallery-items';

import  SimpleLightbox from  "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createGalleryMrkup from './create-gallery-mrkup';

// Change code below this line

const divRef = document.querySelector('.gallery');

divRef.insertAdjacentHTML('beforeend', createGalleryMrkup(galleryItems));

console.log(galleryItems);

const lightbox = new SimpleLightbox(`.gallery__link` , { captionsData: `title`, captionPosition: `bottom`, captionDelay: 250, } );
