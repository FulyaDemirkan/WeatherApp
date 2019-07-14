var nPostal = new Postal();
nPostal.createDropdown();

function Postal() {
	this.province = [
		{ name: "", 					postal: "" },	
		{ name: "Alberta", 					postal: "AB" },
		{ name: "British Comumbia", 		postal: "BC" },
		{ name: "Manitoba", 				postal: "MB" },
		{ name: "New Brunswick", 			postal: "NB" },
		{ name: "Newfoundland and Labrador", postal: "NL" },
		{ name: "Northwest Territories", 	postal: "NT" },
		{ name: "Nova Scotia", 				postal: "NS" },
		{ name: "Nunavut", 					postal: "NU" },
		{ name: "Ontario", 					postal: "ON" },
		{ name: "Prince Edward Island", 	postal: "PE" },
		{ name: "Quebec", 					postal: "QC" },
		{ name: "Saskatchewan", 			postal: "SK" },
		{ name: "Yukon Territories", 		postal: "YT" }	
	];
	this.createDropdown = function createD() {
		var list = [];
		this.province.forEach(myFunction);
		console.log(this.province);
		function myFunction(item, index) {
			var curr = document.getElementById("prov").appendChild(document.createElement("option")); 
			curr.setAttribute("value", item.postal);
			curr.innerHTML = item.name + "  "+ item.postal;
			list[index] = item.name;
		}		
	}
}
function chkPasswordStrength(txtpass,strenghtMsg,errorMsg) {
     var desc = new Array();
     desc[0] = "Very Weak";
     desc[1] = "Weak";
     desc[2] = "Better";
     desc[3] = "Medium";
     desc[4] = "Strong";
     desc[5] = "Strongest";

     errorMsg.innerHTML = '';
     var score = 0;

     //if txtpass bigger than 6 give 1 point
     if (txtpass.length > 6) score++;

     //if txtpass has both lower and uppercase characters give 1 point
     if ( ( txtpass.match(/[a-z]/) ) && ( txtpass.match(/[A-Z]/) ) ) score++;

     //if txtpass has at least one number give 1 point
     if (txtpass.match(/\d+/)) score++;

     //if txtpass has at least one special caracther give 1 point
     if ( txtpass.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) score++;

     //if txtpass bigger than 12 give another 1 point
     if (txtpass.length > 12) score++;

     strenghtMsg.innerHTML = desc[score];
     strenghtMsg.className = "strength" + score;

     if (txtpass.length < 6) {
     errorMsg.innerHTML = "Password Should be Minimum 6 Characters"
     errorMsg.className = "errorclass"
     }
}

function checkPass() {
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}

var el = document.getElementById("phone"); 
var message = document.getElementById("message");  
var re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/; 
function testInfo(phoneInput){  
	var OK = re.exec(phoneInput.value);
	if (!OK)  
		message.innerHTML += el.value + " is not a phone number with area code<br>"; 
	else  
		message.innerHTML += "Your phone number is " + OK[0] + "<br>"; 
}  
//document.getElementById("check").addEventListener("click",function(){testInfo(el);});

document.getElementById("butReset").addEventListener("click", resetForm);	
function resetForm() {
    document.getElementById("myForm").reset();
	// add resets for password styles
}

document.getElementById("butSubmit").addEventListener("click", function() {
	pasuser(document.getElementById('myForm'));} ); 
function pasuser(aform) {   
	console.log("Invalid Password");           
	aform.setAttribute("action","index2.html");
	aform.submit();
}		
