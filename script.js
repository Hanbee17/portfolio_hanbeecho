console.log("script.js is loaded");

function openLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = "flex";
  showSlide(1, lightboxId);
}

function closeLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = "none";
}

function changeSlide(n, lightboxId) {
  const lightbox = document.getElementById(lightboxId);
  const slides = lightbox.getElementsByClassName("lightbox-slide");
  let slideIndex = parseInt(lightbox.getAttribute("data-slide-index")) || 1;

  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  lightbox.setAttribute("data-slide-index", slideIndex);
  showSlide(slideIndex, lightboxId);
}

function showSlide(n, lightboxId) {
  const lightbox = document.getElementById(lightboxId);
  const slides = lightbox.getElementsByClassName("lightbox-slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n - 1].style.display = "block";
}

function changeMainImage(src, slideIndex, lightboxId) {
  const mainImage = document.getElementById("current-image");
  mainImage.src = src;
  const lightbox = document.getElementById(lightboxId);
  lightbox.setAttribute("data-slide-index", slideIndex);
  showSlide(slideIndex, lightboxId);
}
