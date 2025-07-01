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



// Smooth scroll animations for cards
function initScrollAnimations() {
  const cards = document.querySelectorAll('.card-link');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -150px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  cards.forEach((card) => {
    observer.observe(card);
  });
}

// Navigation Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  initScrollAnimations();
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactNav = document.querySelector('.contact-nav');
  const contactItems = document.querySelectorAll('.contact-item');
  
  // Handle regular nav links (Home, About)
  navLinks.forEach(link => {
    if (!link.classList.contains('contact-nav')) {
      link.addEventListener('click', function(e) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Remove all active classes from nav toggle
        navToggle.classList.remove('about-active', 'contact-active');
        
        // Add appropriate class based on target
        if (this.dataset.target === 'about') {
          navToggle.classList.add('about-active');
        }
        // home is default position (no class needed)
      });
    }
  });
  
  // Handle contact nav click (just the Contact text, not dropdown items)
  contactNav.addEventListener('click', function(e) {
    // Don't handle clicks on contact items (let them work normally)
    if (e.target.closest('.contact-item')) {
      return;
    }
    
    // Only handle clicks on the contact nav itself
    if (e.target === this || e.target.textContent.trim() === 'Contact') {
      e.preventDefault();
      
      // Toggle active state for contact dropdown
      const isActive = this.classList.contains('active');
      
      // Remove active class from all nav links
      navLinks.forEach(l => l.classList.remove('active'));
      
      if (!isActive) {
        // Add active class to contact nav
        this.classList.add('active');
        
        // Set slider to contact position
        navToggle.classList.remove('about-active');
        navToggle.classList.add('contact-active');
      } else {
        // Remove contact active state
        navToggle.classList.remove('contact-active');
        
        // Set back to home
        document.querySelector('[data-target="home"]').classList.add('active');
      }
    }
  });
  
  // Handle contact items clicks - ensure they work as proper links
  contactItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Get the href attribute
      const href = this.getAttribute('href');
      
      if (href) {
        if (href.startsWith('mailto:')) {
          // For email links, use window.location
          window.location.href = href;
        } else if (this.hasAttribute('target') && this.getAttribute('target') === '_blank') {
          // For external links with target="_blank", open in new tab
          window.open(href, '_blank');
        } else {
          // For other links, navigate normally
          window.location.href = href;
        }
      }
    });
  });
  
  // Close contact dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!contactNav.contains(e.target)) {
      contactNav.classList.remove('active');
      if (navToggle.classList.contains('contact-active')) {
        navToggle.classList.remove('contact-active');
        document.querySelector('[data-target="home"]').classList.add('active');
      }
    }
  });
});


