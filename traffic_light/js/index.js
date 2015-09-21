//Implement the red light using jQuery. Don't forget to add the script tags in your html.

//when i click on stop button show red light
$('#stopButton').on('click', function () {
	// now get hold of #stop light bulb  and show red
	$('#stopLight').addClass('redlight');
	$('.greenlight').removeClass('greenlight');
	$('.yellowlight').removeClass('yellowlight');
});


//when i click on slow button show yellow light
$('#slowButton').on('click', function () {
	// and hide red light
	$('.redlight').removeClass('redlight');
	$('.greenlight').removeClass('greenlight');
	// now get hold of slow light button and show yellow
	$('#slowLight').addClass('yellowlight');
});
	
//when i click on go button show green light
$('#goButton').on('click', function () {
	// and hide green light
	$('.yellowlight').removeClass('yellowlight');
	$('.redlight').removeClass('redlight');
	// now get hold of go light button and show green
	$('#goLight').addClass('greenlight');
});

 