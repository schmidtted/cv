// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.display = "block";
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
		document.getElementById("navbar").style.top = "-500px";

	}, 3000);

}, false);

function closeNav(){
    isScrolling = false;
}
