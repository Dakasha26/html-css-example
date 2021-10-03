$(document).ready(function(){
  // height
  var heigthMain = $('main').height();
  heigthMain = heigthMain + 50;
  $('main').css('height', heigthMain);
  $('nav').css('height', heigthMain);
  // Slider
  try{
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:50,
      autoplay:true,
      smartSpeed:3000,
      autoplayTimeout:7000,
      dotsEach:true,
      responsive:{ 
        0:{
          items:2
        },
        600:{
          items:3
        }

      }
    });
  } catch(e){
  };
  // Phone
  $('.nav-but').click(function(){
    if ('block' == $('nav ul').css('display')){
      $('nav ul').css('display', 'none');
    } else{
      $('nav ul').css('display', 'block');
    };
  });
  $(window).resize(function(){
    var width = $(window).width();
    if (width > 1023){
      $('nav ul').css('display', 'block');
    };
  });
});
