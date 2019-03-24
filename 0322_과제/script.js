$(function() {

  $("#zoom").ezPlus({
    lensSize: 200,
    zoomWindowWidth: 610,
    zoomWindowHeight: 600,
    zoomWindowOffsetX: 30,
    borderSize: 1,
    borderColour: "#222",
    lensColour: "#222",
    lensOpacity: 0.1,
    cursor: "crosshair",
    gallery: 'gallery',
    galleryActiveClass: 'active',
    imageCrossfade: true,
    lensFadeIn: true,
    lensFadeOut: true,
    zoomWindowFadeIn: true,
    zoomWindowFadeOut: true,
  });

  $('[data-toggle="popover"]').popover({
    container: 'body',
    trigger: 'focus',
    placement: 'bottom',
    // template: 
    //   '<div class="popover" role="tooltip">' +
    //     '<h3 class="popover-header">123</h3>' +
    //     '<div class="popover-body">123</div>' +
    //   '</div>'
  });

  // scrollspy menu top sticy
  var top_sticy = $(".top_sticy").offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() >= top_sticy) {
      $(".top_sticy").addClass("fixed");
    } else {
      $(".top_sticy").removeClass("fixed");
      $(".nav.nav-pills.nav-justified a:first-child").addClass("active");
    }
  });
  $('body').scrollspy({
    target: ".nav.nav-pills.nav-justified",
    offset: 60
  });
  $(".nav.nav-pills.nav-justified a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
  

});