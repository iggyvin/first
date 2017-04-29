// -------- MAP ---------

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



// -------- CAROUSEL -------- 
var myIndex = 0;
carousel();
//carousel("slides", "badge", "none", "transparent", "block", "rgb(241, 101, 34)");

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
	dots[myIndex-1].style.backgroundColor = "rgb(241, 101, 34)";
    setTimeout(carousel, 4500);
}

// -------- CLICK -------- 
var slideIndex1 = 1;
var slideIndex2 = 1;
showDivs1(slideIndex1);
showDivs2(slideIndex2);

function plusDivs(n) {
	showDivs1(slideIndex1 += n);
	showDivs2(slideIndex2 += n);
}	

function currentDiv(n) {
	showDivs1(slideIndex1 = n);
	showDivs2(slideIndex2 = n);
}

function showDivs1(n) {
	var i;
  	var x = document.getElementsByClassName("slides");
  	var dots = document.getElementsByClassName("badge");
  	if (n > x.length) {slideIndex1 = 1}
  	if (n < 1) {slideIndex1 = x.length}
  	for (i = 0; i < x.length; i++) {
     	x[i].style.display =  "none";
		dots[i].style.backgroundColor = "transparent";
  	}
  	x[slideIndex1-1].style.display = "block";
  	dots[slideIndex1-1].style.backgroundColor = "rgb(241, 101, 34)";
}

function showDivs2(n) {
	var i;
	var width = window.innerWidth;
	if (width<640) {
		var x = document.getElementsByClassName("sl-t");
		if (n > x.length) {slideIndex2 = 1}
		if (n < 1) {slideIndex2 = x.length}
		for (i = 0; i < x.length; i++) {
			x[i].style.display =  "none";
		}
		x[slideIndex2-1].style.display = "block";
	}
	else {
		var x = document.getElementsByClassName("sl");
		if (n > x.length) {slideIndex2 = 1}
		if (n < 1) {slideIndex2 = x.length}
		for (i = 0; i < x.length; i++) {
			x[i].style.display =  "none";
		}
		x[slideIndex2-1].style.display = "flex";
	}
}
// ---------- CLIENTS ----------- 

function showText(args) {
	var i;
	var x = document.getElementsByClassName(args);
	for (i=0; i<x.length; i++) {
		x[i].style.display="inline";
	}
}

function hideText(args) {
	var i;
	var x = document.getElementsByClassName(args);
	for (i=0; i<x.length; i++) {
		x[i].style.display="none";
	}
}

// ------ BLOG LOAD MORE ---- 

$(document).ready(function () {
    size_li = $(".blog-note").size();
    x=3;
    $('.blog-note:lt('+x+')').show();
    $('.load-more').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        $('.blog-note:lt('+x+')').show();
    });
    /*$('.load-less').click(function () {
        x=(x-3<0) ? 3 : x-3;
        $('.blog-note').not(':lt('+x+')').hide();
    });*/
});

