$(function () {
  initSlider();
  autoPlay();
  var curIndex = 0;
  var amt;

  function initSlider() {
    amt = $(".avaliacoes-slide").lenght;
    var sizeContainer = 100 * amt;
    var sizeBoxSingle = 100 / amt;

    $(".avaliacoes-slide").css("width", sizeBoxSingle + "%");
    $(".scroll-wraper").css("width", sizeContainer + "%");

    for (var i = 0; i < amt; i++) {
      if (i == 0) {
        $(".slider-bullets").append(
          "<span style='background-color: rgb(120, 120, 120)'></span>"
        );
      } else {
        $(".slider-bullets").append("<span></span>");
      }
    }
  }

  function autoPlay() {
    setInterval(function () {
      curIndex++;
      if (curIndex >= 4) {
        curIndex = 0;
      }
      goToSlider(curIndex);
    }, 3000);
  }

  function goToSlider(curIndex) {
    var offSetX =
      $(".avaliacoes-slide").eq(curIndex).offset().left -
      $(".scroll-wraper").offset().left;
    $(".slider-bullets span").css("background-color", "rgb(170, 170, 170)");
    $(".slider-bullets span")
      .eq(curIndex)
      .css("background-color", "rgb(200, 200, 200)");
    $(".scrollEquipe").stop().animate({ scrollLeft: offSetX });
  }

  $(window).resize(function () {
    $(".scrollEquipe").stop().animate({ scrollLeft: 0 });
  });
});
