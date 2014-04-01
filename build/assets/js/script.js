//When the browser is ready...

$(function()) {

	//Setup the form validation on the #form element

	$("#form").validate({

		rules: {

			pword: {

				required: true;
				minlength: 5

			},
			
			//Specity the validation error messages
			messages: {

				pword: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long" 

				}, //password

			},

			submitHandler: function(form) {
				form.submit();
			}

		});
	

});



}


