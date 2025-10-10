const images = [
    { src: 'https://picsum.photos/id/10/300/420', tags: ['landscape', 'tree', 'mountain'] },
    { src: 'https://picsum.photos/id/11/300/480', tags: ['landscape', 'fog', 'river'] },
    { src: 'https://picsum.photos/id/12/300/360', tags: ['landscape', 'beach', 'rock'] },
    { src: 'https://picsum.photos/id/13/300/520', tags: ['landscape', 'beach', 'sand'] },
    { src: 'https://picsum.photos/id/14/300/400', tags: ['landscape', 'rock', 'ocean'] },
    { src: 'https://picsum.photos/id/15/300/460', tags: ['landscape', 'mountain', 'waterfall'] },
    { src: 'https://picsum.photos/id/16/300/380', tags: ['landscape', 'ocean', 'rock'] },
    { src: 'https://picsum.photos/id/17/300/540', tags: ['path', 'tree', 'plant'] },
    { src: 'https://picsum.photos/id/18/300/430', tags: ['grass', 'green', 'trees', 'nature'] },
    { src: 'https://picsum.photos/id/19/300/500', tags: ['tree', 'nature'] },
    { src: 'https://picsum.photos/id/20/300/390', tags: ['phone', 'laptop', 'desk', 'pencil', 'book'] },
    { src: 'https://picsum.photos/id/21/300/470', tags: ['shoes', 'red'] },
    { src: 'https://picsum.photos/id/22/300/350', tags: ['candid', 'grey', 'person', 'road'] },
    { src: 'https://picsum.photos/id/23/300/510', tags: ['fork', 'lighting', 'shadow'] },
    { src: 'https://picsum.photos/id/24/300/440', tags: ['book', 'old'] },
    { src: 'https://picsum.photos/id/25/300/530', tags: ['tree', 'flower', 'lighting'] },
    { src: 'https://picsum.photos/id/26/300/370', tags: ['glasses', 'watch', 'pen', 'phone'] },
    { src: 'https://picsum.photos/id/27/300/495', tags: ['landscape', 'sand', 'barren'] },
    { src: 'https://picsum.photos/id/28/300/410', tags: ['landscape', 'mountain', 'forest', 'river'] },
    { src: 'https://picsum.photos/id/29/300/460', tags: ['landscape', 'mountain', 'cloud'] },
    { src: 'https://picsum.photos/id/30/300/385', tags: ['mug', 'cup', 'warm'] },
    { src: 'https://picsum.photos/id/1015/300/525', tags: ['landscape', 'river', 'valley'] },
    { src: 'https://picsum.photos/id/32/300/415', tags: ['monotone', 'sign'] },
    { src: 'https://picsum.photos/id/33/300/485', tags: ['grass', 'nature'] },
    { src: 'https://picsum.photos/id/34/300/355', tags: ['rust', 'metal', 'grass', 'abandoned'] },
    { src: 'https://picsum.photos/id/35/300/505', tags: ['cactus', 'orange'] },
    { src: 'https://picsum.photos/id/36/300/425', tags: ['tools', 'camera', 'metal', 'display'] },
    { src: 'https://picsum.photos/id/37/300/475', tags: ['landscape', 'nature', 'ocean'] },
    { src: 'https://picsum.photos/id/38/300/365', tags: ['sky', 'cloud', 'lighting'] },
    { src: 'https://picsum.photos/id/39/300/545', tags: ['machine', 'metal', 'aesthetic'] },
];

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const imageGallery = document.getElementById('gallery');

function displayImages(filteredImages) {
    imageGallery.innerHTML = ''; // Clear previous images
    filteredImages.forEach(image => {
        // const div = document.createElement('div');
        // div.classList.add('image-item');
        // const img = document.createElement('img');
        // img.src = image.src;
        // img.alt = image.tags.join(', ');
        // const p = document.createElement('p');
        // p.textContent = image.tags.join(', ');
        // div.appendChild(img);
        // div.appendChild(p);
        let html = '<a href="' + image.src + '"><img src="' + image.src + '" alt="' + image.tags.join(', ') + '"></a>';
        imageGallery.innerHTML += html;
        // imageGallery.appendChild(div);
    });
}

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        displayImages(images); // Show all images if query is empty
        return;
    }
    const filteredImages = images.filter(image => 
        image.tags.some(tag => tag.includes(query))
    );
    displayImages(filteredImages);
}

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Initial display of all images
displayImages(images);
