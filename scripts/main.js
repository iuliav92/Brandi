$(".navigation li").click(function() {
    var allListItems = $(".navigation li");
    allListItems.removeClass("current");
    $(this).addClass("current");
});