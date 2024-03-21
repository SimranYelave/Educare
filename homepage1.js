let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 10000); // Change image every 10 seconds (10000ms)
}

var navLinks = documents.getElementById("navLinks");
function showMenu()
{
  navLinks.style.right = '0';
}
function hideMenu()
{
  navLinks.style.right='-200px';
}