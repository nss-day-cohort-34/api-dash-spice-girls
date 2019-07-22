const photoContainer = document.querySelector("#photoContainer")

const convertPhotoInfoToHtml = (photoObject, photoNumber) => {
  return `
  <section class="photo">
    <a href="${photoObject.url}"><img src="${photoObject.thumbnailUrl}" alt=""></a>
    <h3 class="photo__title">${photoNumber}. Title${photoObject.title}</h3>
  </section>
  `
}

const fetchPhotos = () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.json())
    .then(photos => {
      let photoNumber = 1
      for (let i = 0; i < 50; i++) {
        const photo = photos[i];
        const newPhoto = convertPhotoInfoToHtml(photo,photoNumber)
        photoContainer.innerHTML += newPhoto
        photoNumber++
      }
    })
}

fetchPhotos()

