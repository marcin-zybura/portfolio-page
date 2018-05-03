$(function() {
    $(".logo-link").on("click", function(e) {
        e.preventDefault();
        ajaxNavigationShow();
        $(".site-content").empty();
    });

    $(".mobile-site-nav a, .navigation-mobile a").on("click", function(e) {
        e.preventDefault();
        ajaxNavigationHide();
        var page = $(this).attr("href");
        console.log(page);
        $(".site-content").load(`${page} .main`);
    });

});

// $(window).on("popstate", function(e) {
//     console.log("popstate fired");
//     // updateContent(e.state);
//     console.log(window.location.pathname);
//
//     if (window.location.pathname == "/") {
//         console.log("test");
//         $(".main-container").empty();
//         $(".main-container").load("../index.html header, .main-content", function() {
//
//         });
//     }
// });
