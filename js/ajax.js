$(function() {
    console.log($(window).width());
    $(".logo-link").on("click", function(e) {
        e.preventDefault();
        window.scrollTo(0,0);
        $(".hamburger-container").removeClass("change");
        $(".navigation-mobile").slideUp();
        $(".header-background-image").show();
        ajaxNavigationShow();
        // $(".site-content").empty();
    });

    $(".mobile-site-nav a, .navigation-mobile a").on("click", function(e) {
        e.preventDefault();
        if ($(window).width() < 850) {
            window.scrollTo(0,0);
            $(".hamburger-container").removeClass("change");
            $(".navigation-mobile").slideUp();
            $(".header-background-image").hide();
            ajaxNavigationHide();
        }
        else {
            hideHeaderContent();
            showSiteContent();
        }
        // hideHeaderContent();
        // showSiteContent();
        var page = $(this).attr("href");
        $(".site-content").load(`${page} .main`, function() {

            if (page == "web/contact.html") {
                var name = $("input[name='your-name']");
                var email = $("input[name='your-email']");
                var message = $("textarea[name='your-message']");

                $(".contact-form").on("submit", function(e) {
                    e.preventDefault();
                    var check = true;
                    console.log($(this).find(".input-message").next().length);
                    if($(name).val().trim() == '') {
                        $(this).find(".your-name .not-valid").text("Uzupełnij pole");
                        $(this).find(".your-name .not-valid").show();
                        check=false;
                    }
                    if($(email).val().trim() == '') {
                        $(this).find(".your-email .not-valid").text("Uzupełnij pole");
                        $(this).find(".your-email .not-valid").show();
                        check=false;
                    } else
                    if($(email).val().trim().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
                        $(this).find(".your-email .not-valid").text("Błędny e-mail");
                        $(this).find(".your-email .not-valid").show();
                        check=false;
                    }
                    if($(message).val().trim() == ''){
                        $(this).find(".your-message .not-valid").text("Uzupełnij pole");
                        $(this).find(".your-message .not-valid").show();
                        check=false;
                    }
                    return check;
                });
            };
            $(".form-input").on("keyup", function() {
                ($(this).next(".not-valid")).text("");
                ($(this).next(".not-valid")).hide();
                console.log(this);
            });
        });
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
