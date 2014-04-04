//When browser is ready...
jQuery(function($) {

	
	//setting up validation on #form element
	$("#form").validate({

		onkeyup: false,

		//outlining validation rules
		rules: {
			
			portfoliotitle: {
					required: true,
					minlength: 2
			},
			
			portfolioaddress: {
					required: true,
					minlength: 2
			},
			
			name: {
					required: true,
					minlength: 2
			},
			
			email: {
					required: true,
					email: true
			},
			
			pword: {
				required: true,
				minlength: 5
			},
			
			cnumber: {
				required: true,
				digits: true,
				minlength: 13,
				maxlength: 16
			},
			
			security: {
			    required: true,
				digits: true,
				minlength: 3,
				maxlength: 4
			},

			selectmonth: {
			
				min: 1,

			},

			selectyear: {
			
				min: 1,

			},

			agree: "required"

		},


		//Setting validation error messages
		messages: {
			portfoliotitle: {
				required: "Please enter your portfolio title",
				minlength: "Please enter at least 2 characters"
			},

			portfolioaddress: {
				required: "Please enter your portfolio address name",
				minlength: "Please enter at least 2 characters"
			},
			
			name: {
				required: "Please enter your name",
				minlength: "Please enter at least 2 characters"
			},
			
			email: "Please enter a valid email address",
			
			pword: {
				required: "Please enter a password",
				minlength: "Please enter at least 5 characters"
			},
			
			cnumber: {
				required: "Please enter a credit card number",
				minlength: "Please enter at least 13 numbers"		
			},
			
			security: {
			    required: "Please enter the security code on your card",
				minlength: "Please enter 3 or 4 numbers depending on your card",
				maxlength: 4
			},


			selectmonth: "Please select an expiration month",

			selectyear: "Please select an expiration year",
			
			agree: "required"

		},


		highlight: function(element, errorClass) {

			$("."+errorClass).attr("aria-atomic", true).attr("aria-live", "polite");

		}

		/*submitHandler: function(form) {
            form.submit();
      
     }
*/
	}); //close form validation
 
}); //close jQuery