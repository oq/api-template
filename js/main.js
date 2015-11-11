(function () {

	'use strict';

	// var sections = document.querySelectorAll('section');
	// [].forEach.call(sections, function(el) {
	// 	new Waypoint({
	// 		element: el,
	// 		handler: function() {
	// 			document.querySelector('[href="#' + el.id + '"]').classList.add('active');
	// 		}
	// 	});
	// });

// setTimeout(function() {
	new Waypoint({
		element: document.getElementById('metadata'),
		handler: function(d) {
			console.log('d', d);
		}
	});
	console.log('x');
// }, 500);

	// document.querySelector('section').waypoint({
	// 	handler: function() {
	// 		console.log(this);
	// 	}
	// });

})();