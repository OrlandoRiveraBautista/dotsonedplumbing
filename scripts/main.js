$(document).ready(function () {

  $('.navbar-toggler').on('click', function () {
    $('.navigationColapseIcon').toggleClass('open');
  });

  $('.call').on('click', function(){
    $(this).attr("href", "tel:8327563881");
  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    var btnPosition = $('#mainContactBtn');

    if(height > 100 ) {
      $('.navbar').addClass('scroll');
    } else {
      $('.navbar').removeClass('scroll');
    }

    if(height <= btnPosition.offset().top){
      $('.contactBtn').removeClass('show');
    } else{
      $('.contactBtn').addClass('show');
    }
  });

  function openBanner() {
    $('.jumbotron-fluid').toggleClass('open');
  }

  // calling in the advertising banner
  setTimeout(openBanner, 2500);


});
