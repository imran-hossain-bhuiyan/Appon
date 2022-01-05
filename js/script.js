$('.banner-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
  });

  
$('.ss').slick({
  arrows: false,
  dots: false,
  autoplay: 400,
  });


$('.images').slick({
  arrows: false,
  dots: true,
  slidesToShow: 5,
  autoplay: 400,
  });


  $('.venobox').venobox();


$('.feedback_text').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  autoplay: true,
  asNavFor: ".feedback_img",
  });


$('.feedback_img').slick({
  arrows: false,
  dots: true,
  slidesToShow: 3,
  autoplay: true,
  centerMode: true,
  centerPadding: "0",
  asNavFor: ".feedback_text",
  focusOnSelect: true
  });