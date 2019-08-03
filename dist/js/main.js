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