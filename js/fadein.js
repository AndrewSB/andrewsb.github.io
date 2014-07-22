$( document ).ready(function() {
    $(".sub-title").addClass("animated fadeInDown visible");
    setTimeout(function(){
        $(".title").addClass("animated fadeInDown visible");
    }, 500);
    setTimeout(function(){
        $("#social-links").addClass("animated fadeInDown visible");
    }, 1000);
});