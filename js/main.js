$(document).ready(function(){

  
  if ($(window).width() > 800) {

    checkScroll();

    $(window).scroll(function(){
       checkScroll();
    });

    function checkScroll(){
      var scrollPos = $(document).scrollTop();
      if (scrollPos > 0) {
        $(".hideOnScroll").fadeOut(200);
        $(".shrinkOnScroll").addClass("animate");
      } else {
        $(".hideOnScroll").fadeIn(200);
        $(".shrinkOnScroll").removeClass("animate");
      }
    }
  }
});