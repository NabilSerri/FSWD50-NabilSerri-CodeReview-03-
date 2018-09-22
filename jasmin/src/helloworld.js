function alculateInsurance(selected){
if (selected =="Austria") {
		return "Austria" ;
	}else if(selected =="Hungary"){
		return "Hungary" ;
	}else if(selected =="Greece"){
		return "Greece";
	}
}
function calculateInsurancePerCountry(horse_power, age, country){
	if (country=="Austria"){
		return Math.floor((horse_power * 100)/( age   + 50));
	}else if (country=="Hungary"){
		return Math.floor((horse_power * 120)/( age   + 100));
	}else if(country=="Greece"){
		return Math.floor((horse_power * 150)/(( age+3)  + 150));
	}

}