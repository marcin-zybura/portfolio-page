$(function() {
    $(".mobile-site-nav .about").on("click", function() {
        ajaxNavigationSwitch();
        $.ajax({
            url: "web/about.html",
        })
        .done(function(aboutHtml) {
            $(".site-content").html(aboutHtml);
        })
        .fail(function() {
        })
        .always(function(){
        });
    });

    // $(".mobile-site-nav .skills").on("click", function() {
    //     ajaxNavigationSwitch();
    //     $.ajax({
    //         url: "web/skills.html",
    //     })
    //     .done(function(skillsHtml) {
            // console.log(skillsHtml);
            // $(".site-content").html(skillsHtml);
    //         $.when(
    //           $.get("images/icons/html5-plain-wordmark.svg", function(svgHtml) {
    //           })
    //         ).then(function() {
    //             console.log(svgHtml);
    //         });
    //     })
    //     .fail(function() {
    //     })
    //     .always(function(){
    //     });
    // });

    $(".mobile-site-nav .skills").on("click", function() {
        ajaxNavigationSwitch();
        $.when(
            $.get("web/skills.html", function(skills_html) {
            }),
            $.get("images/icons/html5-plain-wordmark.svg", function(html_svg) {
            }, "text"),
            $.get("images/icons/css3-plain-wordmark.svg", function(css_svg) {
            }, "text"),
            $.get("images/icons/javascript-plain.svg", function(javascript_svg) {
            }, "text"),
            $.get("images/icons/jquery-plain-wordmark.svg", function(jquery_svg) {
            }, "text"),
            $.get("images/icons/sass-original.svg", function(sass_svg) {
            }, "text"),
            $.get("images/icons/gulp-plain.svg", function(gulp_svg) {
            }, "text")
        ).then(function(skills_html, html_svg, css_svg, javascript_svg, jquery_svg, sass_svg, gulp_svg) {
            $(".site-content").html(skills_html[0]);
            console.log(skills_html[0]);
            console.log(html_svg[0]);
            $(".skill-html").html(html_svg[0]);
            $(".skill-css").html(css_svg[0]);
            $(".skill-javascript").html(javascript_svg[0]);
            $(".skill-jquery").html(jquery_svg[0]);
            $(".skill-sass").html(sass_svg[0]);
            $(".skill-gulp").html(gulp_svg[0]);
        });
    });

    $(".mobile-site-nav .experience").on("click", function() {
        ajaxNavigationSwitch();
        $.ajax({
            url: "web/experience.html",
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
        })
        .always(function(){
        })
    });

    $(".mobile-site-nav .portfolio").on("click", function() {
        ajaxNavigationSwitch();
        $.ajax({
            url: "web/portfolio.html",
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
        })
        .always(function(){
        })
    });

    $(".mobile-site-nav .contact").on("click", function() {
        ajaxNavigationSwitch();
        $.ajax({
            url: "web/contact.html",
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
        })
        .always(function(){
        })
    });
});
