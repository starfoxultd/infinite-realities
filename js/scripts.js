// JavaScript Document// Function to show the next image in the slideshow
function showSlides() {
  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide");
  setInterval(function() {
    for (let slide of slides) {
      slide.style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
  }, 4000); // Change image every 4 seconds
}

// Function to automatically scroll the interview text
function autoScroll() {
  const container = document.getElementById('scrollingText');
  let scrollAmount = 0;
  let step = 1; // Number of pixels to scroll each step

  setInterval(function() {
    if (scrollAmount >= container.scrollHeight - container.clientHeight) {
      container.scrollTop = 0;
      scrollAmount = 0;
    } else {
      container.scrollTop += step;
      scrollAmount += step;
    }
  }, 100);
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Call your functions here to ensure they execute after the DOM is ready
  showSlides();
  autoScroll();
});