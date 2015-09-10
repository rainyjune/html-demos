$(function(){
	$("#slideshow").slidesjs({
		width: 960,
		height: 312,
		navigation: {
			active: true,
			effect: 'slide'
		},
		pagination: {
			active: true,
			effect: 'slide'
		}
	});
  $(".top").on("click", "a", function(e){
    window.scrollTo(0, 0);
    return false;
  });
});
