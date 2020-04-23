function validation() {
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var mobile = document.getElementById("mobile").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "10px";

	if (name.length < 5) {
		text = "Please Enter the Valid Name";
		error_message.innerHTML = text;
		return false;
	}


	if (isNaN(mobile) || mobile.length!=10) {
		text = "Please Enter the Valid Contact Number";
		error_message.innerHTML = text;
		return false;
	}

	if (email.indexOf("@")==-1 || email.length<10) {
		text = "Please Enter the Valid Email";
		error_message.innerHTML = text;
		return false;
	}

	if (subject.length < 10) {
		text = "Please Enter the Correct Subject";
		error_message.innerHTML = text;
		return false;
	}

	if (message.length <= 125) {
		text = "Please Enter More Than 125 Characters in the Message";
		error_message.innerHTML = text;
		return false;
	}

	alert("Form Submitted Successfully!");

	return true;
}