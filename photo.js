function openLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = "flex";
  // Show the current slide based on data-slide-index
  const lightbox = document.getElementById(lightboxId);
  let slideIndex = parseInt(lightbox.getAttribute("data-slide-index")) || 1;
  showSlide(slideIndex, lightboxId);
}

function closeLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = "none";
}

function changeSlide(n, lightboxId) {
  const lightbox = document.getElementById(lightboxId);
  const slides = lightbox.getElementsByClassName("lights-lightbox-slide");
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
  const slides = lightbox.getElementsByClassName("lights-lightbox-slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slides[n - 1]) {
    slides[n - 1].style.display = "block";
  }
}

function changeMainImage(src, slideIndex, lightboxId) {
  const lightbox = document.getElementById(lightboxId);
  lightbox.setAttribute("data-slide-index", slideIndex);
  showSlide(slideIndex, lightboxId);
}

// Show the button when the user scrolls down 100px
window.onscroll = function () {
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function showTab(index) {
  const tabs = document.querySelectorAll('.tab-content');
  const btns = document.querySelectorAll('.tab-btn');
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  btns.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
