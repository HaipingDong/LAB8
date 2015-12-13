//validate module


    
   function validateProfile(){
    
    var valid=true;
    
    //display warning if firstName is not entered
    if(profile.firstName.value === ""){
    document.getElementById('fnameWarning').innerHTML="*Please enter a First Name*";
        valid = false;
    }
    
    //display warning if lastName is not entered
    if(profile.lastName.value == ""){
        document.getElementById('lnameWarning').innerHTML="*Please enter a Last Name*";
        valid=false;
    }
    
    //display warning if address1 is not entered
    if(profile.Address1.value == ""){
        document.getElementById('aWarning').innerHTML="*Please enter a Last Name*";
        valid=false;
    }
    //display warning if city is  not entered
  if(profile.city.value == ""){
        document.getElementById('cWarning').innerHTML="*Please enter a Last Name*";
        valid=false;
    }
	//display warning if province is not selected   
  if(profile.province.options.selectedIndex === -1){
        valid = false;
        document.getElementById("ProvinceWarning").innerHTML="*Select at least one province*";
    }
//display warning if country is not selected   
  if(profile.country.options.selectedIndex === -1){
        valid = false;
        document.getElementById("countryWarning").innerHTML="*Select at least one province*";
    }
	   
	   
    if(valid){
        alert("Thank you");
    }
    
    return valid;
    
};


//add option to campus dropdown list
function addOption(){
        var other = new Option("Other", "other",false,false);
        var Address2 = profile.Address2;
        Address2.options[Address2.options.length] = other;
}
	        
	   
    
