(function ($) {
  Drupal.behaviors.articlelisting = {
    attach: function (context) {

      $('.view-article-listing .view-content').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 700,
        autoplay: true
      });

    }
  }
})(jQuery);
