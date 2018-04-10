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
