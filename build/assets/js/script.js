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

			document.getElementById("amex-btn").checked = true;
			document.getElementById("cvv").style.visibility = "hidden";
			document.getElementById("amexcvv").style.visibility = "visible";

		break;


		case "visa": 

			document.getElementById("visa-btn").checked = true;
			document.getElementById("amexcvv").style.visibility = "hidden";
			document.getElementById("cvv").style.visibility = "visible";

		break;


		case "discover": 

			document.getElementById("dsvr-btn").checked = true;
			document.getElementById("amexcvv").style.visibility = "hidden";
			document.getElementById("cvv").style.visibility = "visible";
			
		break;

		
		
		case "mastercard": 

			document.getElementById("mc-btn").checked = true;
			document.getElementById("amexcvv").style.visibility = "hidden";
			document.getElementById("cvv").style.visibility = "visible";

		break;

	};

	}

}

// event listener	
	document.getElementById("c-number").addEventListener("keyup", function() {

	var number = document.getElementById("c-number").value;

	var card = getCardType(number);

	changeCard(card);

	

});
























