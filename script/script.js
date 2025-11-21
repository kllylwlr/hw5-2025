// javascript page


// date in footer
console.log("I accessed the script");
document.getElementById("year").innerHTML = new Date().getFullYear();

// image carousel ----------------------------------------------------------

// Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;

  // grab slide
  let slides = document.getElementsByClassName("slide");

  //console log debugging 
  console.log("Number of slides:", slides.length);  // Log the number of slides
  console.log("Current slide index:", slideIndex);   // Log the current slide index

  // grab carousel dots
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_carousel", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active_carousel";
}


// Attach the event listener only after the DOM is ready
// Source: https://stackoverflow.com/questions/59780689/isnt-it-possible-that-when-we-add-the-event-handler-for-dom-ready-it-is-too-la
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);  // Call the function after DOM content is loaded
});