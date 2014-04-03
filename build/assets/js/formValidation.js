//When browser is ready...
$(document).ready(function() {

	//setting up validation on #form element
	$("#form").validate({

		//outlining validation rules
		rules: {
			
			portfolio-title: {
					required: true,
					minlength: 2
			},
			
			portfolio-address: {
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
			
			password: {
				required: true,
				minlength: 5
			},
			
			c-number: {
				required: true,
				minlength: 13,
				maxlength: 16
			},
			
			security: {
				required: true,
				minlength: 3,
				maxlength: 4
			},

			agree: "required"

		},




	}) 

});