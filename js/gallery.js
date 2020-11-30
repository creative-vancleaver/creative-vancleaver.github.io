// Activates the image gallery.
// the main task is to attach an even listener to each image in the gallery
// and respond appropriately on click.

function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  //Image info to be updated.
  let galleryInfo = document.querySelector("#gallery-info");
  let title = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {

      let newImageSrc = thumbnail.dataset.largeVersion;
      let currentClass = "current";

      // Set clicked image as main image.
      mainImage.setAttribute("src", newImageSrc);

      // Match image description to main image.
      mainImage.setAttribute("alt", thumbnail.alt);

      // Change which image is current.
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info.
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
      
    });

  });

}