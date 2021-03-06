'use strict';

(function () {
  //показываем навигацию по клику + меняем иконку на тоглере навигации
  var header = document.querySelector(".header");
  var headerNav = header.querySelector(".navigation--header");
  var navTog = header.querySelector(".header__nav-tog");
  var navTogSvg = header.querySelectorAll(".header__nav-tog svg");

  navTog.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < navTogSvg.length; i++) {
      navTogSvg[i].classList.toggle("visually-hidden");
    };
  });
}());






(function () {
  //показываем поиск по клику + меняем иконку на тоглере поиска
  var header = document.querySelector(".header");
  var headerSearchPanel = header.querySelector(".header__panel");
  var headerSearchItems = headerSearchPanel.querySelectorAll(".header__panel > *:not(.header__tog-search");
  var searchTog = header.querySelector(".header__tog-search");
  var searchTogSvg = header.querySelectorAll(".header__tog-search svg");

/*  searchTog.addEventListener("click", function(event) {
    event.preventDefault();
    headerSearchPanel.classList.toggle("header__panel--md-open");
  });*/

  searchTog.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < headerSearchItems.length; i++) {
      headerSearchItems[i].classList.toggle("visually-hidden--search");
    };
  });

  searchTog.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < searchTogSvg.length; i++) {
      searchTogSvg[i].classList.toggle("visually-hidden");
    };
  });
}());






(function () {
  //Двигаем панель search (дизйнерские изыски)
  var header = document.querySelector(".header");
  var searchTog = header.querySelector(".header__tog-search");

  searchTog.addEventListener("click", function(event) {
    event.preventDefault();
    header.classList.toggle("header--search-move");
  });
}());






(function () {
  //при событиях клика или изменении вьюпорта пересчитывается высота блока и ставится отступ у main
  var header = document.querySelector(".header");
  var mainVal = document.querySelector(".main");
  var navTog = header.querySelector(".header__nav-tog");
  var headerSearchPanel = header.querySelector(".header__panel");
  var searchTog = header.querySelector(".header__tog-search");
  var headerNav = document.querySelector(".navigation--header");
  var DO_AFTER_TRANSITION = 530;

  function headerHeight () {
    var heightVal = header.offsetHeight + "px";
    mainVal.style.marginTop = heightVal;
  };

  window.addEventListener("resize", function(event) {
    headerHeight();
  });

  navTog.addEventListener("click", function(event) {
    event.preventDefault();
    headerNav.classList.toggle("navigation--open");
    setTimeout(headerHeight, DO_AFTER_TRANSITION);
  });

  searchTog.addEventListener("click", function(event) {
    headerSearchPanel.classList.toggle("header__panel--md-open");
    setTimeout(headerHeight, DO_AFTER_TRANSITION);
  });
}());






(function () {
  //при клике на фильтр List type - меняется отображение статей
  var articles = document.querySelector(".articles");
  var listTypeViewItem = document.querySelectorAll(".articles__list-type-view");

  var callback = function (i) {
    return function (event) {
      if (event.currentTarget.classList.contains("articles__row")) {
        articles.classList.remove("articles--mixed-row");
        articles.classList.add("articles--row");
        return null;
      } else if (event.currentTarget.classList.contains("articles__mixed-row")) {
        articles.classList.remove("articles--row");
        articles.classList.add("articles--mixed-row");
        return null;
      } else {
        articles.classList.remove("articles--mixed-row");
        articles.classList.remove("articles--row");
      }
    };
  }
  for (var i = 0; i < listTypeViewItem.length; i++) {
    listTypeViewItem[i].addEventListener("click", callback(i), true);
  }
}());






(function () {
  //list type добавляем active и меняем цвет SVG
  var articles = document.querySelector(".articles");
  var listTypeViewItem = document.querySelectorAll(".articles__list-type-view");

  var callback = function (i) {
    return function (event) {
      if (event.currentTarget.classList.contains("active")) return;
      for (var i = 0; i < listTypeViewItem.length; i++) {
        listTypeViewItem[i].classList.remove("active");
      }
      event.currentTarget.classList.add("active");
    };
  }

  for (var i = 0; i < listTypeViewItem.length; i++) {
    listTypeViewItem[i].addEventListener("click", callback(i), true);
  }
}());






(function () {
  //Скрываем рекламу
  try {
    var ad = document.querySelector(".advertising");
    var adClose = ad.querySelector(".advertising__close");

    adClose.addEventListener("click", function(event) {
      ad.classList.add("advertising--close");
    });
  } catch (err) {}
}());






(function () {
  //подгрузка ajax'а
  try {
    var btnAjax = document.querySelector(".btn--show-article");
    var xhr = new XMLHttpRequest();
    var fragments = document.createDocumentFragment();
    var articleParent = document.querySelector(".articles__list");
    var articleChild = articleParent.querySelector(".article").cloneNode(true);
    var childImg = articleChild.querySelector(".article__img");
    var childTitle = articleChild.querySelector(".article__title");
    var childUrl = articleChild.querySelector(".article__link");
    var childText = articleChild.querySelector(".article__text");

    //xhr.responseType = "json"; -- не работает в ссаном IE
    xhr.addEventListener('load', function () {
      var allData = JSON.parse(xhr.responseText);

      btnAjax.addEventListener("click", function (event) {
        event.preventDefault();
        for (var i = 0; i < allData[0].length; i++) {
          childImg.style.backgroundImage = allData[0][i][0];
          childTitle.innerText = allData[0][i][1];
          childUrl.href = allData[0][i][2];
          childText.innerText = allData[0][i][3];
          fragments.appendChild(articleChild.cloneNode(true));
        }
        articleParent.appendChild(fragments);
        allData.shift();
        if (allData.length !== 0) return;
        btnAjax.classList.add("visually-hidden");
      });
    });

    xhr.open("GET", "json/articleData.json");
    xhr.send();
  } catch (err) {}
}());






(function () {
  //Навигация в body - отображаем по клику
  try {
    var openNavBody = document.querySelector(".navigation__open-nav");
    var navBody = document.querySelector(".navigation--body .navigation__list");
    var navBodyItemActive = navBody.querySelector(".navigation__item.active .navigation__item-link");
    var DO_AFTER_TRANSITION = 500;

    openNavBody.textContent = navBodyItemActive.textContent;

    openNavBody.addEventListener("click", function (event) {
      openNavBody.classList.toggle("active");
      setTimeout(function () {
        if (openNavBody.classList.contains("active")) {
          openNavBody.textContent = navBodyItemActive.textContent;
          return null;
        }
      }, DO_AFTER_TRANSITION);
      openNavBody.textContent = "";
    });
  } catch (err) {}
}());






(function () {
  //Убираем атрибут href в навигации, если есть класс active
  var allNavActiveLinks = document.querySelectorAll(".navigation__item.active .navigation__item-link");
  //console.dir(allNavActiveLinks);
  allNavActiveLinks.forEach(function(item) {
    item.removeAttribute("href");
  });
}());