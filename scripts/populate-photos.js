const Photos = {
  personal: {
    "Naturpark Sudegelande": [
      { src: "images/personal/1/P1090743.jpg", alt: "Personal Portrait 2" },
      { src: "images/personal/1/P1090360.jpg", alt: "Personal Portrait 1" },
      { src: "images/personal/1/P1090749.jpg", alt: "Personal Travel 1" },
      { src: "images/personal/1/P1100222.jpg", alt: "Personal Portrait 2" },
      { src: "images/personal/1/P1100290.jpg", alt: "Personal Travel 1" },
      { src: "images/personal/1/P1100213.jpg", alt: "Personal Travel 2" },
      { src: "images/personal/1/P1100045.jpg", alt: "Personal Portrait 2" },
      { src: "images/personal/1/P1100092.jpg", alt: "Personal Travel 1" },
    ],
    travel: [
      { src: "images/personal/1/P1090749.jpg", alt: "Personal Travel 1" },
      { src: "images/personal/1/P1100045.jpg", alt: "Personal Travel 2" }
    ]
  },
  nature: {
    landscapes: [
      { src: "images/nature/1/P1090360.jpg", alt: "Nature Landscape 1" },
      { src: "images/nature/1/P1090743.jpg", alt: "Nature Landscape 2" }
    ],
    wildlife: [
      { src: "images/nature/1/P1090749.jpg", alt: "Nature Wildlife 1" },
      { src: "images/nature/1/P1100045.jpg", alt: "Nature Wildlife 2" }
    ]
  },
  lovestory: {
    "Naturpark Sudegelande": [
      { src: "images/lovestory/1/P1080965.jpg", alt: "Love Story Engagement 1" },
      { src: "images/lovestory/1/P1090209.jpg", alt: "Love Story Wedding 1" },
      { src: "images/lovestory/1/P1090673.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/1/P1090152.jpg", alt: "Love Story Engagement 2" },
      { src: "images/lovestory/1/P1090792.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/1/P1090757.jpg", alt: "Love Story Wedding 1" },
    ],
    weddings: [
      { src: "images/lovestory/KO/P1110471.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/KO/P1110450.jpg", alt: "Love Story Wedding 1" },
      { src: "images/lovestory/KO/P1110473.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/KO/P1110650.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/KO/P1110653.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/KO/P1110651.jpg", alt: "Love Story Wedding 1" },
      { src: "images/lovestory/KO/P1110376.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/KO/P1110814.jpg", alt: "Love Story Wedding 2" },
      { src: "images/lovestory/KO/P1110195.jpg", alt: "Love Story Wedding 1" },
    ]
  }
};
function createPhotoHtml(photoItem) {
  return `
    <div class="photo-item">
        <img src="${photoItem.src}" alt="${photoItem.alt}">
    </div>
  `;
}

function populatePhotos(category) {
  if (category == "about") {
    return
  }
  const container = document.getElementById(`${category}-container`);
  container.innerHTML = "";

  const subcategories = Photos[category] || {};
  for (const [subcat, photos] of Object.entries(subcategories)) {
    const subcatTitle = document.createElement('h2');
    subcatTitle.textContent = subcat.replace(/_/g, ' ').toUpperCase();
    container.appendChild(subcatTitle);

    const grid = document.createElement('div');
    grid.className = 'photo-grid-collage'; // Choose the layout class you want

    photos.forEach(photo => {
      const html = createPhotoHtml(photo);
      grid.insertAdjacentHTML("beforeend", html);
    });

    container.appendChild(grid);
  }
}

document.querySelectorAll('.menu li').forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');
    document.querySelectorAll('.content-container').forEach(container => {
      container.style.display = 'none';
    });
    document.getElementById(target).style.display = 'block';

    populatePhotos(target.split('-')[0]);
  });
});

window.addEventListener("languageChanged", (event) => {
  populatePhotos(event.detail);
});
