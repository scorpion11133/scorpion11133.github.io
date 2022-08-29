$(function () {

    // плавное перемещение вверх
    $(".footer__up").click(function (e) {
        e.preventDefault();
        $('html ,body').animate({scrollTop: 0}, 500);
    });

    // плавное перемещение страницы к нужному блоку
    $(".scroll").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination}, 500);
    });

    // Preloader
    let $preloader = $('#page-preloader'),
        $spinner = $preloader.find();
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    //скролл вверх
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html ,body').animate({scrollTop: 0}, 700);
    });

    // Анимация

    $(window).scroll(function() {
        $('.services__imgBox, .services__form').each(function(){
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+900) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    // Переставление элементов

  $(window).on("load resize", function() {
    let width = $(this).width();

    if (width <= 992) {
      $(".header__nav").appendTo(".header");
    } else {
      $(".header__nav").appendTo(".header__wrap");
    }
  });
});



