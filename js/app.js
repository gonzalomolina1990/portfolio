window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".navbar").css("background-color", " rgba(0, 0, 0, .7)") = "black";
  } else if (!window.matchMedia("(max-width: 990px)").matches) {
    $(".navbar").css("background-color", " rgba(53, 53, 53, 0)") = "black";
  }
});
