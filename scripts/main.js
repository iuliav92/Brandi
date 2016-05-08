$(".navigation li").click(function() {
    var allListItems = $(".navigation li");
    allListItems.removeClass("current");
    $(this).addClass("current");
});

$(".works-list li").click(function() {
    var allListItems = $(".works-list li");
    allListItems.removeClass("current-work");
    $(this).addClass("current-work");
    var $el = $(this);
    $el.css("color", "white");
});