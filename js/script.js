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






//Двигаем панель search (дизйнерские изыски)
var header = document.querySelector(".header");
var searchTog = header.querySelector(".header__tog-search");

searchTog.addEventListener("click", function(event) {
  event.preventDefault();
  header.classList.toggle("header--search-move");
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






//при клике на фильтр List type - меняется отображение статей
var articles = document.querySelector(".articles");
var listTypeViewItem = document.querySelectorAll(".articles__list-type-view");

var callback = function (i) {
  return function (event) {
    if (event.currentTarget.classList.contains("articles__row")) {
      return articles.classList.add("articles--row");
    }
    articles.classList.remove("articles--row");
  };
}

for (var i = 0; i < listTypeViewItem.length; i++) {
  listTypeViewItem[i].addEventListener("click", callback(i), true);
}






//ПОПЫТКА СДЕЛАТЬ ACTIVE НА ФИЛЬТРЕ LIST TYPE
var articles = document.querySelector(".articles");
var listTypeViewItem = document.querySelectorAll(".articles__list-type-view");

var callback = function (i) {
  return function (event) {
    if (event.currentTarget === listTypeViewItem[i]) {
      return listTypeViewItem[i].classList.add("active");
    }
  };
}

for (var i = 0; i < listTypeViewItem.length; i++) {
  listTypeViewItem[i].addEventListener("click", callback(i), true);
}






//Скрываем рекламу
var ad = document.querySelector(".advertising");
var adClose = ad.querySelector(".advertising__close");

adClose.addEventListener("click", function(event) {
  ad.classList.add("advertising--close");
});