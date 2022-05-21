$(function(){

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