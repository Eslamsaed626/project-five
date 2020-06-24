$(document).ready(function(){
    $(".slider").slick({
        autoplay:true,
        arrows:true,
        autoplaySpeed: 2000
    });

    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      

    $('.slid').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:true
    });

    $('.sid-bar').click(function(){
      $('.aside1').animate({
        right:'0px'
      },500)
    });

    $('.fa-window-close').click(function(){
      $('.aside1').animate({
        right:'-330px'
      },500)
    });


    $('.sid-menu').click(function(){
      $('.aside2').animate({
        right:'0px'
      },500);
    });

    $('.fa-window-close').click(function(){
      $('.aside2').animate({
        right:'-330px'
      },500)
    });


    $('.aside-subMenu').slideUp();
    $('.fa-angle-right').click(function(){
      $(this).parent().find('.aside-subMenu').slideToggle();
      $(this).parent().siblings().find('.aside-subMenu').slideUp();
      $(this).toggleClass('rotate');
      $(this).parent().siblings().find('.fa-angle-right').removeClass('rotate')
    })
});