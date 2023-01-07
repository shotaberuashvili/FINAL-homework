const navbar = document.querySelector(".navigacia");
navbar.querySelector(".burger-bar").addEventListener("click", () => {
  navbar.classList.toggle("start");
});
window.addEventListener("scroll", (e) => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navigacia").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});





let slideIndex = 1;
  showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
let slides = document.getElementsByClassName("item");

if (n > slides.length) {
slideIndex = 1
}
if (n < 1) {
slideIndex = slides.length
}
 
for (let slide of slides) {
slide.style.display = "none";
}
slides[slideIndex - 1].style.display = "flex";    
}       









