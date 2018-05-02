$(function() {
    $(".logo-link").on("click", function() {
        ajaxNavigationShow();
        $(".site-content").empty();
        return false;
    });

    $(".mobile-site-nav a").on("click", function() {
        ajaxNavigationHide();
        var page = $(this).attr("href");
        console.log(page);
        $(".site-content").load(`${page} .main`);
        return false;
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
