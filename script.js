// Your provided carousel JavaScript
let currentImageIndex = 0;
const carouselImages = document.querySelectorAll(".carousel-image");
let carouselInterval;

function startCarousel() {
  carouselInterval = setInterval(() => {
    // Hide current image
    carouselImages[currentImageIndex].classList.remove("active");

    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

    // Show new image
    carouselImages[currentImageIndex].classList.add("active");
  }, 4000); // Change image every 4 seconds
}

// Start carousel when page loads
document.addEventListener("DOMContentLoaded", startCarousel);

// Scroll to text when prompt is clicked
document.getElementById("scroll-prompt").addEventListener("click", function () {
  document.querySelector(".section-title").scrollIntoView({
    behavior: "smooth",
  });
});

// Modal functionality - wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  // Add click listeners to all gallery images
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-image")) {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      document.getElementById("modalCaption").textContent = e.target.alt;
    }
  });

  // Close modal when X is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
