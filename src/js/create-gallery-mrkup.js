export default function createGalleryMrkup (items)  {
	return items
		.map((item) => 
		`
		<div class="gallery__item">
			<a class="gallery__link" href="${item.original}">
				<img
					class="gallery__image"
					src="${item.preview}"
					data-source="${item.original}"
					alt="${item.description}"
					/>
			</a>
		</div>
		`
		).join("")
};


