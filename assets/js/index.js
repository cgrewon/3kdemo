$(".root").on("scroll", function (e) {
  if (e.target.scrollTop > 100) {
    $("#top_scroll_btn").addClass("show");
  } else {
    $("#top_scroll_btn").removeClass("show");
  }
});

$("#top_scroll_btn").on("click", (e) => {
  $(".root").scrollTop(0);
});

$("#nft-slider").multislider({
  interval: 4000,
  slideAll: true,
  duration: 1500,
});

$("#more-menu").on("click", function () {
  if ($(".expand-menu").hasClass("show")) {
    $(".expand-menu").removeClass("show");
  } else {
    $(".expand-menu").addClass("show");
  }
});

$(".expand-menu .menu-item").on("click", function () {
  $(".expand-menu").removeClass("show");
});

for (let i = 0; i < 3; i++) {
  $("#overlayer_smoke").prepend(
    `<img class="smoke-cloud" id="smoke_${i}" src="./assets/images/smoke.png" />`
  );
}

let oldX, oldY;

$(".section-post-content").on("mousemove", function (e) {
  if (!oldX && !oldY) {
    oldX = e.offsetX;
    oldY = e.offsetY;
  } else {
    let deltaX = e.offsetX - oldX;
    let deltaY = e.offsetY - oldY;

    oldX = e.offsetX;
    oldY = e.offsetY;

    let top =
      parseFloat($("#overlayer_smoke").css("top").replace("px", "")) +
      deltaY * -5;
    let left =
      parseFloat($("#overlayer_smoke").css("left").replace("px", "")) +
      deltaX * -5;

    $("#overlayer_smoke").css({ top: top + "px", left: left + "px" });
  }
});

$(".section-post-content").on("mouseleave", function (e) {
  console.log("mouse leave");
  $("#overlayer_smoke").css("top", "0");
  $("#overlayer_smoke").css("left", "40%");
});
