(function($){
  $(function(){

      // Initialize collapse button
  	$(".button-collapse").sideNav({
  		width: 275,
  		closeOnClick: true,
  		draggable: true
  	});

  	 // Initialize slider
    $('.slider').slider({
    	indicators: false,
    	transition: 1500,
    	interval: 9000
    });

    $('.parallax').parallax();
   

  }); // end of document ready
})(jQuery); // end of jQuery name space