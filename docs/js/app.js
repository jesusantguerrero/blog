$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true
  })

})