function alculateInsurance(){

	var name= document.getElementById('name').value;
	var age= document.getElementById('age').value;
	var HorsePower= document.getElementById('HorsePower').value;
	var selected= document.getElementById('select').value;
	var x=Math.floor((Number(HorsePower) * 100) / (Number(age) + 50));
	var y=Math.floor((Number(HorsePower) * 120) / (Number(age) + 100));
	var z=Math.floor((Number(HorsePower) * 150) / ((Number(age)+3) + 150));

	var insurance =document.getElementById('result');

	if (selected =="Austria") {
		insurance.innerHTML =name+" your insurance costs "+ x+" €" ;
	}else if(selected =="Hungary"){
		insurance.innerHTML = name+" your insurance costs "+y+" €";
	}else if(selected =="Greece"){
		insurance.innerHTML = name+" your insurance costs "+z+" €";
	}
}

//document.getElementsByClassName("sub-bot")[0].addEventListener("click",alculateInsurance,false);
document.getElementById("sub-bot").onclick =alculateInsurance;





