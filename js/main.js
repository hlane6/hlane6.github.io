$(document).ready(function(){
	
	$('.projects-item').each(function() {
		let $this = $(this);
		$this.waypoint(function() {
			$this.addClass('animated fadeInUp');
		}, {
			offset: '100%',
			triggerOnce: true
		});
	});

});




