/* -------- MAP --------- */

function initMap() {
	var spot = {lat: 40.71, lng: -74};
	var mapCon = document.getElementById('map')
	var map = new google.maps.Map(mapCon, {
	  	zoom: 15,
	  	center: spot
	});
	var marker = new google.maps.Marker({
	  position: spot,
	  map: map
	});
}
window.initMap=initMap;



/* -------- CAROUSEL -------- */ 
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("badge")
    for (i = 0; i < x.length; i++) {
      	x[i].style.display = "none"; 
		dots[i].style.backgroundColor = "transparent";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
	dots[myIndex-1].style.backgroundColor = "rgb(241, 101, 34)"
    setTimeout(carousel, 4500);
}



/* -------- CLICK -------- */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
  	var x = document.getElementsByClassName("slides");
  	var dots = document.getElementsByClassName("badge");
  	if (n > x.length) {slideIndex = 1}
  	if (n < 1) {slideIndex = x.length}
  	for (i = 0; i < x.length; i++) {
     	x[i].style.display = "none";
		dots[i].style.backgroundColor = "transparent";
  	}
	
  	x[slideIndex-1].style.display = "block";
  	dots[slideIndex-1].style.backgroundColor = "rgb(241, 101, 34)";
	
}