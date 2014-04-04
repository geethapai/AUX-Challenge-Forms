//define the function


function getCardType(number) {

	var type; 

	//Amex starts with 34 or 37
	if (number.substring(0,2) == 34|| number.substring(0,2) == 37) {

			type="amex";
	
	} //Visa starts with 4
	 else if (number.substring(0,1) == 4) {

	 		type="visa";
	} //Discover
	 else if (number.substring(0,4) == 6011||(number.substring(0,6) >=622126 && number.substring(0,6) <=622925)||(number.substring(0,3) >=644 && number.substring(0,3) <=649)||number.substring(0,2) ==65) {

	 		type="discover";
	} //MasterCard starts with 50-55
	  else if (number.substring(0,2) >=50 && number.substring(0,2)<=55) {
			
			type="mastercard";

    } 
    	return type;

};


function changeCard(card) {


	if(card) {

		switch(card) {

		case "amex": 

			//checked radio button
			$("#amex-btn").prop("checked", true);
			$("#cvv").hide();
			$("#amexcvv").show();

			break;


		case "visa": 

			//checked radio button
			$("#visa-btn").prop("checked", true);
			$("#amexcvv").hide();
			$("#cvv").show();

			break;



		case "discover": 

			//checked radio button
			$("#dsvr-btn").prop("checked", true);
			$("#amexcvv").hide();
			$("#cvv").show();
			
			break;

		
		case "mastercard": 

			//checked radio button
			$("#mc-btn").prop("checked", true);
			$("#amexcvv").hide();
			$("#cvv").show();
			
			break;

	};

	

	}

}


// event listener
$("#c-number").bind("keyup blur", function() {

	var number = $("#c-number").val();

	var card = getCardType(number);

	changeCard(card);

	

});
























