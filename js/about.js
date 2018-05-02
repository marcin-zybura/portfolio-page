function removeHeaderContent() {
    var headerContent = $(".header-content");
    headerContent.remove();
}

function removeSiteNav() {
    var siteNav = $(".mobile-site-nav");
    siteNav.remove();
}

function setAutoHeaderHeight() {
    var header = $("header");
    header.css("height", "auto");
}

function ajaxNavigationSwitch() {
    removeHeaderContent();
    removeSiteNav();
    setAutoHeaderHeight();
}

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
});
