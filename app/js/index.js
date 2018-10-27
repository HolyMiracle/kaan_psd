$(function(){
    $('a').on({
      click:function (e) {
        e.preventDefault();
        var root = $("html, body");
        var target = $(this).attr("href");
        root.animate({  
            scrollLeft: $(target).offset().left,
            scrollTop: $(target).offset().top
        }, 500);
      }
    });
});