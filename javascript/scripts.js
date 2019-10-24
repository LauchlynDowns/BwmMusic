//jquery for all pages
$(document).ready(function () {
    //make the facebook link blue when you hover
    $("#facebooklink").hover(function () {
        $(this).css("color", "#3b5998");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });
//make the instagram link blue when you hover
    $("#instagramlink").hover(function () {
        $(this).css("color", "#C13584");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });
//make the spotify link green when you hover
    $("#spotifylink").hover(function () {
        $(this).css("color", "#1DB954");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });
//make the twitter link light blue when you hover
    $("#twitterlink").hover(function () {
        $(this).css("color", "#1DA1F2");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });
//make the navbar elements white on hover
    $("#link1").hover(function () {
        $(this).css("color", "white");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });

    $("#link2").hover(function () {
        $(this).css("color", "white");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });

    $("#link3").hover(function () {
        $(this).css("color", "white");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });

    $("#link4").hover(function () {
        $(this).css("color", "white");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });

    $("#link5").hover(function () {
        $(this).css("color", "white");
    }, function () {
        $(this).css("color", "#CCCCCC");
    });
    //give the social media elements a border when you hover
    $("#linkitem1, #linkitem2, #linkitem3, #linkitem4").hover(function () {
        $(this).css("border", "4px solid #606060");
    }, function () {
        $(this).css("border", "0");
    });
});

