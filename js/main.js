
$(document).ready(function(){

  $('.slider-1').bxSlider({
    controls: false, 
    pager: true,
		// slideWidth: 470,
		minSlides: 1,
		maxSlides: 1,
    mode: 'fade',
    resposive: true,
    adaptiveHeight: true,
    moveSlides: 1
  });

  $('.slider-2').bxSlider({
    controls: false, 
    pager: true,
    slideWidth: 116,
    minSlides: 6,
    maxSlides: 6,
    slideMargin: 35,
    mode: 'horizontal',
    moveSlides: 1


  });




  var slider = $('.slider-month').bxSlider({
    pager: false,
    // slideWidth: 180,
    controls: true,
    minSlides: 4,
    maxSlides: 4,
    slideMargin: 30,
    mode: 'vertical',
    moveSlides: 1,
    onSliderLoad: function () {

      $('.slider-month>li:not(.bx-clone)').eq(1).addClass('active');
    },
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      $('.slider-month li').removeClass('active');
      $($slideElement).next().addClass('active');   

    }
  });

  slider.goToSlide(9);


$( ".tabs" ).tabs({
      event: "mouseover"
    });

 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });

//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

});