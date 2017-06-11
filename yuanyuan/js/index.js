$(function(){

  //debugger;
	$("#slider-container").slidesjs({
		width: window.innerWidth,
		height: window.innerWidth * 436 / 1920,
		navigation: {
			active: true,
			effect: 'slide'
		},
		pagination: {
			active: true,
			effect: 'slide'
		}
	});
});
