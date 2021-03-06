// startof HAMBURGER TOGGLE
$(".hamburger-container").on("click", function(e) {
    e.stopPropagation();
    this.classList.toggle("change");
    $(".navigation-mobile").slideToggle();
});
// endof HAMBURGER TOGGLE

// startof CLOSE MENU ON OUTSIDE CLICK
$("body").on("click", function() {
    $(".hamburger-container").removeClass("change");
    $(".navigation-mobile").slideUp();
});
// endof CLOSE MENU ON OUTSIDE CLICK

function hideHeaderContent() {
    var headerContent = $(".header-content");
    headerContent.hide();
}
function clearHeaderContent() {
    var headerContent = $(".header-content");
    headerContent.empty();
}

function hideSiteNav() {
    var siteNav = $(".mobile-site-nav");
    siteNav.hide();
}

function hideMainContent() {
    var mainContent = $(".main-content");
    mainContent.hide();
}

function setAutoHeaderHeight() {
    var header = $("header");
    header.css("height", "auto");
}

function showSiteContent() {
    var siteContent = $(".site-content");
    // siteContent.show();
    siteContent.css({
        "display": "flex",
        "justify-content": "center"
    });
}

function hideSiteContent() {
    var siteContent = $(".site-content");
    siteContent.hide();
}

function updateSiteContent() {
    var siteContent = $(".site-content");
    siteContent.empty();
}

function showHeaderContent() {
    var headerContent = $(".header-content");
    headerContent.show();
}

function showSiteNav() {
    var siteNav = $(".mobile-site-nav");
    siteNav.show();
}

function showMainContent() {
    var mainContent = $(".main-content");
    mainContent.show();
}

function ajaxNavigationHide() {
    hideHeaderContent();
    showSiteContent();
    hideSiteNav();
    setAutoHeaderHeight();
}

function ajaxNavigationShow() {
    showHeaderContent();
    showSiteNav();
    hideSiteContent();
}

console.log($("header")[0].offsetTop);
console.log(window.pageYOffset);

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
