
$(document).ready(function(){
  $('.pocetni_slide').slick({
    autoplay: true
  });
});



var bigSlider = $('.bigpic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,    
    infinite: false
});
$('.smallpic').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    centerMode: false,
    infinite: false
});
$('.smallpic').on('click', '.slick-slide', function () {
    $('.bigpic').slickGoTo($(this).attr('index'));
});
  
