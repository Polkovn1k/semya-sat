/*var header = document.querySelector(".header");
var mainVal = document.querySelector(".main");

var heightVal = header.offsetHeight + "px";
mainVal.style.marginTop = heightVal;

window.addEventListener("resize", function() {
  heightVal = header.offsetHeight + "px";
  mainVal.style.marginTop = heightVal;
});*/




var header = document.querySelector(".header");
var mainVal = document.querySelector(".main");

var heightVal = header.offsetHeight + "px";
mainVal.style.marginTop = heightVal;

window.addEventListener("resize", function() {
  heightVal = header.offsetHeight + "px";
  mainVal.style.marginTop = heightVal;
});



var header = document.querySelector(".header");
var headerNav = header.querySelector(".navigation--header");
var navTog = header.querySelector(".header__nav-tog");
var navTogOpen = header.querySelector(".header__nav-tog .appear");
var navTogClose = header.querySelector(".header__nav-tog: .hidden");

navTog.addEventListener("click", function(event) {
  event.preventDefault();
  headerNav.classList.toggle("navigation--header-open");
});

navTog.addEventListener("click", function(event) {
  event.preventDefault();
  navTogOpen.classList.toggle("hidden");
  navTogClose.classList.toggle("hidden");
});