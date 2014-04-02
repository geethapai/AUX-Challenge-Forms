

//wrap in anonymous function

	function getCreditCardType() {

		console.log("i got to this function");
		//start without knowing the credit card type
		var result = "unknown";
		var cardinput = document.getElementbyId("#c-number");

		//first check for AmEx
		if(/^3[47]/.test(cardinput)) {

			result = "amex";
		}

		//then check for Visa
		else if(/^4/.test(cardinput)) {

			result = "visa";
		}

		//then check for Discover
		else if(/^6[025]/.test(cardinput)) {

			result = "discover";
		}

		//then check for MasterCard
		else if(/^5[1-5]/.test(cardinput)) {

			result = "mastercard";
		}

		return result;

	}//getCreditCardType




$("#c-number").keyup(getCreditCardType());

















//When the browser is ready
// Form validation. When the browser is ready...
/*$(function()) {

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


}*/