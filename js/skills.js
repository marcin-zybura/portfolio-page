$(function() {
    function stickyHeader() {
        var header = $("header");
        var sticky = header[0].offsetTop;
        if (window.pageYOffset >= sticky) {
            header.addClass("sticky");
        }
        else {
            header.removeClass("sticky");
        }
    }
    $(".main-container").scroll(stickyHeader());
    $(".skill-html").load("../images/icons/html5-plain-wordmark.svg");
    $(".skill-css").load("../images/icons/css3-plain-wordmark.svg");
    $(".skill-javascript").load("../images/icons/javascript-plain.svg");
    $(".skill-jquery").load("../images/icons/jquery-plain-wordmark.svg");
    $(".skill-sass").load("../images/icons/sass-original.svg");
    $(".skill-gulp").load("../images/icons/gulp-plain.svg");
});
