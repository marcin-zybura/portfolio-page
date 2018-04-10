$(function() {
    $(".mobile-site-nav .about").on("click", function() {
        ajaxNavigationSwitch();
        $.ajax({
            url: "web/about.html",
        })
        .done(function(data) {
            console.log(data);
            $(".site-content").html(data);
        })
        .fail(function() {
        })
        .always(function(){
        })
    });

    $(".mobile-site-nav .skills").on("click", function() {
        ajaxNavigationSwitch();
        $.ajax({
            url: "web/skills.html",
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
        })
        .always(function(){
        })
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
