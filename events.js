
//form element events



//remove warning if firstName has input
document.getElementById("firstName").addEventListener("blur", function(){
    if(this.value !== ""){
        fnameWarning.innerHTML = "";
    }
});
//remove warning if lastName has input
document.getElementById("lastName").addEventListener("blur", function(){
    if(this.value !== ""){
        lnameWarning.innerHTML = "";
    }
});
//remove warning if address1 has input
document.getElementById("Address1").addEventListener("blur", function(){
    if(this.value !== ""){
        aWarning.innerHTML = "";
    }
});
//remove warning if city has input
document.getElementById("city").addEventListener("blur", function(){
    if(this.value !== ""){
        cWarning.innerHTML = "";
    }
});
//remove warning if province is selected
document.getElementById("province").addEventListener("blur", function(){
    if(profile.province.options.selectedIndex !== -1){
        ProvinceWarning.innerHTML = "";
    }
});

//remove warning if country is selected
document.getElementById("country").addEventListener("blur", function(){
    if(profile.country.options.selectedIndex !== -1){
        countryWarning.innerHTML = "";
    }
});

