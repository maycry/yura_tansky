$(document).ready(function(){
	
	if ($(window).width() > 800) {
		
		$(".casestudies ul li a").hover(
			function(){
				$(".demo img").attr("src", $(this).data('url'));
			},
			function(){
				$(".demo img").attr("src", "img/Index/Material Test 002.png");
		})

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