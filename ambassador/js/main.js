var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('header__videoBox', {
    videoId: 'PUdyuKaGQd4',
  });
  document.getElementById('pause').addEventListener('click', function () {
    player.pauseVideo();
  });
}

$(function () {

  // Fixed navigation
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass("sticky");
    }
    else {
      $('nav').removeClass("sticky");
    }
  });


  $('.header__play').on('click', function () {
    $('.header iframe').fadeIn();
    $('.header__videoClose').fadeIn();
    $('.header').addClass('header-video');
  });
  $('.header__videoClose').on('click', function () {
    $('.header iframe').fadeOut(0);
    $(this).fadeOut(0);
    $('.header').removeClass('header-video');
  });

  // моб меню
  let burgerIcon = $('.burger');
  let mainNav = $('.mainNav');
  burgerIcon.on('click', function () {
    $(this).toggleClass('cross');
    mainNav.slideToggle();
  });
  $('.mainNav li:not(.lang)').on('click', function () {
    burgerIcon.removeClass('cross');
    mainNav.slideUp(1500);
  });

  //
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'about', 'advs', 'terms', 'rules', 'levels', 'top', 'faq'],
    menu: '.mainNav',
    css3: true,
    scrollingSpeed: 1000,
    autoScrolling: false,
    fitToSection: false,
    navigation: true,
  });

  // $('.top .owl-nav .owl-next').empty();

  //условия
  $(".terms__btn").click(function (e) {
    $(".terms__btn").removeClass('active');
    $(this).addClass('active');
    $('.terms__content').removeClass('active');
    $($(this).attr('data-class')).addClass('active');
  });

  $(".levels__slider").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    dots: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
  }).trigger('refresh.owl.carousel');

  // аккорд
  $(".faq__question").on("click", function () {
    $(this).next().stop(true).slideToggle(200);
    $(this).find('.faq__icon').toggleClass('opened');
    $(this).find('.faq__arrow').toggleClass('opened');
  });

  $(".footer__arrow").click(function () {
    $('html ,body').animate({scrollTop: 0}, 700);
  });

  //top 10
  $(".top__slider").owlCarousel({
    margin: 50,
    dots: false,
    nav: true,
    navText: '',
    responsive: {
      0: {
        margin: 0,
        items: 1,
        dots: true,
        nav: false,
      },
      400: {
        dots: true,
        nav: false,
        items: 2,
      },
      768: {
        dots: true,
        nav: false,
        items: 3,
      },
      1300: {
        items: 4,
      }
    }
  }).trigger('refresh.owl.carousel');

  //модалка
  $('.btn-f').on('click', function () {
    $('#ambassador').arcticmodal({
      afterOpen: function () {
        $('.fullPage').addClass('blur');
        $('nav').addClass('blur');
      },
      afterClose: function () {
        $('.fullPage').removeClass('blur');
        $('nav').removeClass('blur');
      }
    });
  });

  //
  $(".advs__slider").owlCarousel({
    items: 1,
    nav: false,
    dots: true
  }).trigger('refresh.owl.carousel');

  //
  $(".rules__slider").owlCarousel({
    items: 1,
    nav: false,
    dots: true
  }).trigger('refresh.owl.carousel');


  //   // Переставление элементов
  //
  // $(window).on("load resize", function() {
  //   let width = $(this).width();
  //
  //   if (width <= 992) {
  //     $(".header__nav").appendTo(".header");
  //   } else {
  //     $(".header__nav").appendTo(".header__wrap");
  //   }
  // });
});



