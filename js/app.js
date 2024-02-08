jQuery(document).ready(function(e){

 /**********
scearch bar
 ***********/

 let searchBtn = $('#search-block');

	$('#search-btn').click(function(e){
		e.stopPropagation();
		searchBtn.fadeIn();
	})

	$(document).click(function(e){
		searchBtn.fadeOut();

	})

	$('#search').click(function(e){
		e.stopPropagation();
	})



 /**********
sticky header
 ***********/


	$(window).scroll(function(){
		let scroll = $(window).scrollTop();
		let header = $('header');

		if(scroll >= 50){
			header.addClass('sticky');
		}else{
			header.removeClass('sticky');
		}

	})



})