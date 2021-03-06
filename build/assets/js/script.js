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


var everyCard = {

		amex:  "amex-btn",

		visa: "visa-btn",

		discover: "dsvr-btn",

		mastercard: "mc-btn"
		
};


function changeCard(card) {

	if(card) {

		var thisCardButton = everyCard[card];
		document.getElementById(thisCardButton).checked = true;

		if (card === "amex"){
			document.getElementById("cvv").style.display='none';
			document.getElementById("amexcvv").style.display='inline-block';
		} else {
			document.getElementById("amexcvv").style.display='none';
			document.getElementById("cvv").style.display='inline-block';
		};
	};
}	

// event listener	

document.getElementById("c-number").addEventListener("keyup", function() {

	var number = document.getElementById("c-number").value;

	var card = getCardType(number);

	changeCard(card);
	
});


//modernizr sniffing for html5 required attribute

(function () {


Modernizr.load ([ 
	{
		test: Modernizr.input.required,
		nope: ['/assets/js/lib/jquery.js', '/assets/js/lib/jquery.validate.min.js', '/assets/js/formValidation.js']
	}

	]);

})();
























