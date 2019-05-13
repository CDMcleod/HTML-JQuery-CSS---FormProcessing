$(document).ready(function(){
	$("#state").focus(function(){
		$("#stateHint").append("Use a two letter abreviation");
	}).blur(function(){
		$("#stateHint").empty();
	});
	
	$("#zipCode").focus(function(){
		$("#zipHint").append("Use a 5 digit Zip Code");
	}).blur(function(){
		$("#zipHint").empty();
	});
	
	$("#phone").focus(function(){
		$("#phoneHint").append("Numbers Only - No Spaces or Dashes");
	}).blur(function(){
		$("#phoneHint").empty();
	});
	
	$("#email").focus(function(){
		$("#emailHint").append("Example - john@doe.com");
	}).blur(function(){
		$("#emailHint").empty();
	});
	
	$("#card_number").focus(function(){
		$("#cardHint").append("Numbers Only - No Spaces or Dashes");
	}).blur(function(){
		$("#cardHint").empty();
	});
	
	var errors = 0;
	
	$("#custForm").submit(function(event){
		var fnamePattern = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;
		if(!fnamePattern.test($("#firstName").val())){
			$("#fnError").append("Must contain only letters and spaces between 2 and 20 characters");
			errors += 1;
		}
		if(errors > 0){
			$("#custForm").prepend("Please Edit the marked fields");
			event.preventDefault();
		}
	});
	
	$("#custForm").submit(function(event){
		var lnamePattern = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/i;
		if(!lnamePattern.test($("#lastName").val())){
			$("#lnError").append("Must contain only letters and spaces between 2 and 20 characters");
			errors += 1;
		}
		if(errors > 0){
			$("#custForm").prepend("Please Edit the marked fields");
			event.preventDefault();
		}
	});
	
	$("#custForm").submit(function(event){
		var cityPattern = /^[a-z ,.'-]+$/i;
		if(!cityPattern.test($("#city").val())){
			$("#cityError").append("Must contain only letters and spaces between 2 and 20 characters");
			errors += 1;
		}
		if(errors > 0){
			$("#custForm").prepend("Please Edit the marked fields");
			event.preventDefault();
		}
	});
	
	$("#custForm").submit(function(event){
		var address1Pattern = /^([1-zA-Z0-1@.\s]{1,255})$/i;
		if(!address1Pattern.test($("#address1").val())){
			$("#address1Error").append("Must contain only letters, numbers, and spaces between 2 and 20 characters");
			errors += 1;
		}
		
	});
	
	$("#custForm").submit(function(event){
		var statePattern = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/i;
		if(!statePattern.test($("#state").val())){
			$("#stateError").append("Must contain a valid two-letter State abbreviation");
			errors += 1;
		}
		
	});
	
	$("#custForm").submit(function(event){
		var zipPattern = /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/i;
		if(!zipPattern.test($("#zipCode").val())){
			$("#zipError").append("Must contain a 5 number Zip Code!");
			errors += 1;
		}
		
	});
	
	$("#custForm").submit(function(event){
		var phonePattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i;
		if(!phonePattern.test($("#phone").val())){
			$("#phoneError").append("Must contain a 10 digit number with no spaces or dashes");
			errors += 1;
		}
		
	});
	
	var selectedVal = "";
	var selected = $("input[type='radio'][name='card_type2']:checked");
	
	if (selected.length > 0){
		selectedVal = selected.val();
		
		if(selectedVal != "None"){
			
		
		
		$("#custForm").submit(function(event){
		var cardPattern = /^(\d{4}[- ]){3}\d{4}|\d{16}$/i;
		if(!cardPattern.test($("#cardNumber").val())){
			$("#cardError").append("Must contain a 13-16 digit number with no spaces or dashes");
			errors += 1;
		}
		
	
	});
	
	
	$("#custForm").submit(function(event){
		if($("#expirationMonth").val() == "month"){
			$("#monthError").append("Must select a month");
			errors += 1;
		}
		
	});
	
	$("#custForm").submit(function(event){
		if($("#expirationYear").val() == "year"){
			$("#yearError").append("Must select a year");
			errors += 1;
		}
		
	});
		}
	}
	else if($("input[name=card_type2]:checked").val() = "None"){
	}
	
	$("#custForm").submit(function(event){
		var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if(!emailPattern.test($("#email").val())){
			$("#emailError").append("Must be a valid Email Address!");
			errors += 1;
		}
		if(errors > 0){
			
			event.preventDefault();
		}
	});
	
	if(errors > 0){
			
			event.preventDefault();
			location.reload();
		}
});