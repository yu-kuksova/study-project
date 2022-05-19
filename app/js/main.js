$(function(){

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