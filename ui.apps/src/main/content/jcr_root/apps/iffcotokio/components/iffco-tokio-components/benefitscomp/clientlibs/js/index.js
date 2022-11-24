
$(document).ready(function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".benefits_cards_hmevt").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            // width: "122px",
            // variableWidth: true,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // width: "122px",
            // variableWidth: true,
            arrows: true,
          },
        },
      ],
    });
  }
});