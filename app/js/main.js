$(function(){

    
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
        prefix: "$"
    });

    var mixer = mixitup('.products__inner-box');

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
    });

    

});