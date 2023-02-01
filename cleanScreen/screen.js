var timer;
$(function () {
  $(".circle").remove();
  $("#submit").click(formSubmit);
});
let formSubmit = () => {
  clearInterval(timer);
  draw();
};
let draw = () => {
  $("body").prepend('<div class="circle"></div>');
  let width = $("#width").val();
  let gR = $("#growthRate").val();
  let gA = $("#growthAmount").val();
  let numCircle = $("#numberofCircles").val();
  $(".circle").css({
    width: width,
    height: width,
  });
  timer = setInterval(timerEvent, gR, gA);
  $(".circle").click(removeElement);
};

let timerEvent = (gA) => {
  $(".circle").css("width", "+=" + gA);
  $(".circle").css("height", "+=" + gA);
};

let removeElement = () => {
  clearInterval(timer);
  $(".circle").remove();
};
