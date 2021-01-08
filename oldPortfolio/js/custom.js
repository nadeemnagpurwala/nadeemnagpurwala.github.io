// Add active class to the current nav
var header = document.getElementById("custom-active");
var customnav = header.getElementsByClassName("nav-link");
	for (var i = 0; i < customnav.length; i++) {
	  customnav[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}

var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;


$("#skill-slider").owlCarousel({
    items:4,
    itemsDesktop:[1000,4],
    itemsDesktopSmall:[979,4],
    itemsTablet:[768,3],
    itemsMobile:[550,2],
    pagination: true,
    navigation:false,
    navigationText:["",""],
    slideSpeed:1000,
    autoPlay:true
});