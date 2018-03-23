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
    
    var options = [{
      selector: '#staggered', 
      offset: 500, 
      callback: function(el){
        Materialize.showStaggeredList($(el))
      }
    },    
   ];
   Materialize.scrollFire(options);

   $('.materialboxed').materialbox();

  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();

  $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  });

  

  }); // end of document ready
})(jQuery); // end of jQuery name space