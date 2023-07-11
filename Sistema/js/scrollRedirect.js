$('.menu a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - 100,
    },
    500
  );
});

$(".show-websites-model").on("click", function (e) {
  var id = "#portifolio",
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset + 2600,
    },
    500
  );
});
