let un = document.getElementById("email");
let pass = document.getElementById("password");
let add = document.getElementById("address");
let gd = document.getElementById("graduation");
let brnch = document.getElementById("branch");
let yop = document.getElementById("yop");


function registerUser(){
	let userData={
		username:us.value,
		password:pass.value,
		address:add.value,
		graduation:gd.value,
		yop:yop.value
	}

	saveData(userData);
	clearField();
	open("Login.html");
}

function clearField() {
	un.value="";
	pass.value="";
	add.value="";
	gd.value="";
	brnch.value="";
	yop="";

}

function saveData(userData) {
	localStorage.getItem("usrInfo",JSON.stringify(userData));
}