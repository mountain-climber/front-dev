document.addEventListener('DOMContentLoaded', function () {

  var anchors = document.querySelectorAll('.menu__link[href^="#"], .header__link, .up');

  function hrefs(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  }

  anchors.forEach(anchors => { anchors.addEventListener('click', hrefs) });

  var header = document.querySelector('.menu');
  var headerScroll = 'menu--scroll';

  if (window.innerWidth < 769) {
    var header = document.querySelector('.header__top');
    var headerScroll = 'header__top--scroll';
  }

  window.addEventListener("scroll", () => {
    var scrolY = window.scrollY;
    if (scrolY > 100) {
      header.classList.add(headerScroll);

      if (window.innerWidth < 769 & window.innerWidth > 575) {
        document.querySelector('.header__btn').classList.remove('header__btn--active');
        document.querySelector('.menu').classList.remove('menu--open');
      }
    } else {
      header.classList.remove(headerScroll);
    }

    if (scrollY > 500) {
      document.querySelector('.up').classList.add('up--visible');
    } else {
      document.querySelector('.up').classList.remove('up--visible');
    }
  });


  $('.magnific-popup').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });

  var popup = document.querySelector('.testimonials__popup');
  var popupPlay = document.querySelector('.testimonials__play');

  popupPlay.onfocus = function () {
    popup.classList.add('testimonials__popup--focus');
  };

  popupPlay.onblur = function () {
    popup.classList.remove('testimonials__popup--focus');
  };

  function popupHover() {
    popup.classList.add('testimonials__popup--hover');
  }

  function popupUnHover() {
    popup.classList.remove('testimonials__popup--hover');
  }

  popupPlay.addEventListener('mouseover', popupHover);
  popupPlay.addEventListener('mouseout', popupUnHover);

  popupPlay.addEventListener('click', function () {
    popup.classList.toggle('testimonials__popup--active');
  });

  if (window.innerWidth < 769) {
    var menuLink = document.querySelectorAll('.menu__link[href^="#"]');

    function menuMobile() {
      document.querySelector('.header__btn').classList.toggle('header__btn--active');
      document.querySelector('.menu').classList.toggle('menu--open');

      if (window.innerWidth < 577) {
        document.querySelector('.body').classList.toggle('body--overlow');
      }
    }

    document.querySelector('.header__btn').addEventListener('click', menuMobile);
    menuLink.forEach(menuLink => { menuLink.addEventListener('click', menuMobile) });
  }

  if (window.innerWidth < 577) {
    document.querySelector('.testimonials__box').appendChild(popup);
  }

  var mixer = mixitup('.portfolio__items');

});