// SmoothScroll Script
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 600
});

// Menu-icon Animation
function iconAnimation(x) {
    const width = window.innerWidth;
    if ( width < 684 ) {
        document.getElementById("menu-icon").classList.toggle("change");
        document.getElementById("navbar").classList.toggle("change");
    } else {
        if ( x.nodeName === "DIV" ) {
            document.getElementById("menu-icon").classList.toggle("change");
            document.getElementById("navbar").classList.toggle("change");
        }
    }
}

// Images Lightbox
function openModal() {
    document.getElementById("lightbox").style.display = "flex";
}
  
function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}
  
let slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

onkeydown = function escFunc(event) {
    const x = event.which || event.keyCode;
    if (x == 27) {  
        document.getElementById("lightbox").style.display = "none";
    }
}