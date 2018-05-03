// var mainContainerWidth = $(".main-container").width();
// $("header").width(mainContainerWidth);

function hideHeaderContent() {
    var headerContent = $(".header-content");
    headerContent.hide();
}

function hideSiteNav() {
    var siteNav = $(".mobile-site-nav");
    siteNav.hide();
}

function setAutoHeaderHeight() {
    var header = $("header");
    header.css("height", "auto");
}

function ajaxNavigationHide() {
    hideHeaderContent();
    hideSiteNav();
    setAutoHeaderHeight();
}

function showHeaderContent() {
    var headerContent = $(".header-content");
    headerContent.show();
}

function showSiteNav() {
    var siteNav = $(".mobile-site-nav");
    siteNav.show();
}

function ajaxNavigationShow() {
    showHeaderContent();
    showSiteNav();
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

// $(window).resize(function() {
//     var mainContainerWidth = $(".main-container").width();
//     $("header").width(mainContainerWidth);
// });
