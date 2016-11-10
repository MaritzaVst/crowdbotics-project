$(document).ready(function(){
	var letter = $(".first-title").find("a");
	$(letter).on("click", function(e){
		e.preventDefault();
		$(this).parents(".title").find("span").toggleClass("ghost");
		$(".first-title").addClass("sr-only");
	});
});