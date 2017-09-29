// $(function() {
// var pixel = 5;
// var interval = 50;
//
// var $slider = $("#slider_test");
// var $slider_content = $slider.find("#content");
// var $content_defil = $slider_content .find("#defil");
//
// var ref = 0;
// function move() {
//
//     if(ref <= $content_defil.innerWidth()) {
//         $slider_content.css('left', ($slider_content.position().left - pixel) +"px");
//         ref += pixel;
//     }
//     else {
//         $slider_content.css('left', $slider.position().left +"px");
//         ref = 0;
//
//     }
// }

var action = setInterval(move, interval);

$("#slider_test #content").mouseout(function() {
    action = setInterval(move, interval);
});

$("#slider_test #content").mouseover(function() {
    clearTimeout(action);
});

});


$(document).ready(function(){

    var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');
			}
		}
		clickEvent = false;
	});
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});
