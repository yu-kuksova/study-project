$(function(){

    $('input[type="file"], select').styler();

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs, .settings__tabs .tab').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });
    
    
    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });


    $('.rote-stars').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$",
        
    });

    

    $('.rote-stars').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    

    $('.product__slider-inner').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
              breakpoint: 1900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1441,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 1441,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
               
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
          ]
    });

    var mixer = mixitup('.products__inner-box');

});