// var mainContainerWidth = $(".main-container").width();
// $("header").width(mainContainerWidth);

// startof HAMBURGER TOGGLE
$(".hamburger-container").on("click", function(e) {
    e.stopPropagation();
    this.classList.toggle("change");
    $(".navigation-mobile").slideToggle();
    if ($(this).hasClass("change")) {
        $(".header").css({
            'background-color': 'rgba(51, 51, 51, 1)'
        });
    }
    else {
        $(".header").css({
            'background-color': 'rgba(51, 51, 51, 0.5)'
        });
    }
});
// endof HAMBURGER TOGGLE

// startof CLOSE MENU ON OUTSIDE CLICK
$("body").on("click", function() {
    $(".hamburger-container").removeClass("change");
    $(".navigation-mobile").slideUp();
});
// endof CLOSE MENU ON OUTSIDE CLICK

// function changeHamburger(x) {
//     console.log(x);
//     x.classList.toggle("change");
//     // x.stopPropagation();
//     $(".navigation-mobile").slideToggle();
// }

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

// startof STICKY HEADER
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
// endof STICKY HEADER

// $("body").on("click", function() {
//     $(".navigation-mobile").slideUp();
// });

// $(window).resize(function() {
//     var mainContainerWidth = $(".main-container").width();
//     $("header").width(mainContainerWidth);
// });
