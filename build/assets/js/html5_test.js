
window.onload = function () {

 
  Modernizr.load([
	  	

	  	{	
	  		//check for HTML 5 classes on my page
	  		test : Modernizr.input.required, /*&& Modernizr.header && Modernizr.input.pattern, */
	  		//if the above HTML elements are not found, then load the following javascript files
	  		yep : console.log ("html5 works"),/*'script.js'*/
	  		nope : console.log ("html5 doesn't works")/*['formValidation.js', 'script.js']*/
	  	}
 
 ]);

};

