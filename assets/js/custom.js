$(document).ready(function(){
	$( ".logo" ).click(function() {
	  	$( ".nav-menu" ).animate({width: 'toggle'});
	  	$(".nav-menu").addClass("toggle");
	  	$(this).toggleClass("clicked");
	  	$(".direction").toggleClass("clicked");
	});
	/*$( ".toggleSlide" ).click(function() {
	  	$( ".nav-menu" ).animate({width: 'toggle'});
	  	$(".nav-menu").addClass("toggle");
	  	$(this).toggleClass("clicked");
	  	$(".direction").toggleClass("clicked");
	  	
	  	if ($(this).closest('body').find('logo').hasClass('clicked')) {
	  		$(this).addClass("test");
	  	}
	});*/
	
	var navlink = $('body .nav-menu ul li a');
	$('body .nav-menu ul li a').click(function() {
	    $(this).addClass("clicked");
	    $(this).closest('li').siblings().find('a').removeClass("clicked");	   

		if ($('body .nav-menu ul li .about').hasClass('clicked')) {
			$(this).closest('body').find('#section #about').css('opacity','1').slideDown( "slow" ).addClass("animate");
			$(this).closest('body').find('#section #works').hide().css('opacity','0').removeClass("animate");
			$(this).closest('body').find('#section #contact').hide().css('opacity','0').removeClass("animate");
			//$(this).closest('body').addClass('about').removeClass("works contact");
		}

		else if ($('body .nav-menu ul li .works').hasClass('clicked')) {
			$(this).closest('body').find('#section #works').css('opacity','1').slideDown( "slow" ).addClass("animate");
			$(this).closest('body').find('#section #about').hide().css('opacity','0').removeClass("animate");
			$(this).closest('body').find('#section #contact').hide().css('opacity','0').removeClass("animate");
			//$(this).closest('body').addClass('works').removeClass("about contact");
		}

		else if ($('body .nav-menu ul li .contact').hasClass('clicked')) {
			$(this).closest('body').find('#section #contact').css('opacity','1').slideDown( "slow" ).addClass("animate");
			$(this).closest('body').find('#section #about').hide().css('opacity','0').removeClass("animate");
			$(this).closest('body').find('#section #works').hide().css('opacity','0').removeClass("animate");
			//$(this).closest('body').addClass('contact').removeClass("about works");
		}	

		

		
		/*var i;
		var arr = "";
		var parent = $('#works .box .box-inner .sections .row');
		for (var i = 0; i < 5; i++) {
			arr += "<span>test</span>";
		};
		$(parent).append(arr);*/
		
	});  
});		

