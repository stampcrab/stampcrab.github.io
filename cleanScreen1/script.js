$(document).ready(function () {
    let timer;
    function updateSize() {
        $("#circle").css("width", "+=" + 10);
        $("#circle").css("height", "+=" + 10);
    }
    timer = setInterval(updateSize, 250);
    $("div").click(stopTimer);
    function stopTimer() {
        console.log(this)
        clearInterval(timer)
        $("#circle").hide();
    }
});