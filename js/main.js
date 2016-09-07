
$(document).ready(function(){








  $(".js-opacity1").on({
    mouseenter: function () {
     $( this ).closest('.content-item').addClass('add-after');
   },
   mouseleave: function () {
     $( this ).closest('.content-item').removeClass('add-after');
   }
 });





  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 124000,
    step: 2000,
    values: [ 20000, 103000 ],
    slide: function( event, ui ) {

     $( ".val-price" ).html( "<div class='left'>" + $( "#slider-range" ).slider( "values", 0 ) +
      "</div>" + "<div class='right'>" + $( "#slider-range" ).slider( "values", 1 ) + '</div>' );
   }
 });

  $( ".val-price" ).html( "<div class='left'>" + $( "#slider-range" ).slider( "values", 0 ) +
    "</div>" + "<div class='right'>" + $( "#slider-range" ).slider( "values", 1 ) + '</div>' );

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
      monthd();
    }
  });





 // slider.goToSlide(3);


 $( ".tabs" ).tabs({
  event: "mouseover"
});






  function monthd() {
   var temp1 = $('.month li.active');
   $('.tabs').css('display', 'none');
   if ( temp1.hasClass('mon-1') ) {
    $('.month-1').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-2')) {
    $('.month-2').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-3')) {
    $('.month-3').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-4')) {
    $('.month-4').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-5')) {
    $('.month-5').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-6')) {
    $('.month-6').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-7')) {
    $('.month-7').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-8')) {
    $('.month-8').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-9')) {
    $('.month-9').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-10')) {
    $('.month-10').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-11')) {
    $('.month-11').closest('.tabs').css('display', 'block');
  } else if (temp1.hasClass('mon-12')) {
    $('.month-12').closest('.tabs').css('display', 'block');
  }
};

monthd();


});