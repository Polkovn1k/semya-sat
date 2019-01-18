/*var header = document.querySelector(".header");
var mainVal = document.querySelector(".main");

var heightVal = header.offsetHeight + "px";
mainVal.style.marginTop = heightVal;

window.addEventListener("resize", function() {
  heightVal = header.offsetHeight + "px";
  mainVal.style.marginTop = heightVal;
});*/



//показываем навигацию по клику + меняем иконку на тоглере навигации
var header = document.querySelector(".header");
var headerNav = header.querySelector(".navigation--header");
var navTog = header.querySelector(".header__nav-tog");
var navTogSvg = header.querySelectorAll(".header__nav-tog svg");

navTog.addEventListener("click", function(event) {
  event.preventDefault();
  headerNav.classList.toggle("visually-hidden");
});

navTog.addEventListener("click", function(event) {
  event.preventDefault();
  for (var i = 0; i < navTogSvg.length; i++) {
    navTogSvg[i].classList.toggle("visually-hidden");
  };
});






//показываем поиск по клику + меняем иконку на тоглере поиска
var header = document.querySelector(".header");
var headerSearchItems = header.querySelectorAll(".header__panel > *:not(.header__tog-search");
var searchTog = header.querySelector(".header__tog-search");
var searchTogSvg = header.querySelectorAll(".header__tog-search svg");

searchTog.addEventListener("click", function(event) {
  event.preventDefault();
  for (var i = 0; i < headerSearchItems.length; i++) {
    headerSearchItems[i].classList.toggle("visually-hidden");
  };
});

searchTog.addEventListener("click", function(event) {
  event.preventDefault();
  for (var i = 0; i < searchTogSvg.length; i++) {
    searchTogSvg[i].classList.toggle("visually-hidden");
  };
});











//при событиях клика или изменении вьюпорта пересчитывается высота блока и ставится отступ у main
var header = document.querySelector(".header");
var mainVal = document.querySelector(".main");
var navTog = header.querySelector(".header__nav-tog");
var searchTog = header.querySelector(".header__tog-search");

var heightVal = header.offsetHeight + "px";
mainVal.style.marginTop = heightVal;

window.addEventListener("resize", function() {
  heightVal = header.offsetHeight + "px";
  mainVal.style.marginTop = heightVal;
});

navTog.addEventListener("click", function() {
  heightVal = header.offsetHeight + "px";
  mainVal.style.marginTop = heightVal;
});

searchTog.addEventListener("click", function() {
  heightVal = header.offsetHeight + "px";
  mainVal.style.marginTop = heightVal;
});