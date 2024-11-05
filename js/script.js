// JavaScript Document

//.............Galeria
$(function(){
	$("slides").click({
		slidesToShow:6,
		dots: true,
		autoplay: true,
		responsive:[{
			breakpoint: 1200, settings:{slidesToShow:4} 
		},{
			breakpoint: 600, settings:{slidesToShow:2}
		}]
	})
})

//.................Menu
$(function(){
	$("#menu").click(function(){
		$("#submenu").animate({height:"toggle"})
	})
})

