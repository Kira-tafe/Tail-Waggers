// Script - register.js
// This script validates a form.

function validatefirstName(){		
	'use strict';
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		return true;
	}
	return false;
}

function validatelastName(){
	'use strict';		
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
		return true;
	}
	return false;
}


	function validateemail(){
		'use strict';
	if (/^[^.][\w.-]{2,64}@[\w.-]+\.[A-Za-z]{2,6}[^.]$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
		//return true;
	}
	return false;
}

function validatecity(){	
	'use strict';	
	if (/^[A-Z \.\-']{2,26}$/i.test(city.value)) {
		removeErrorMessage('city');
	} else {
		addErrorMessage('city', 'Please enter your city.');
		return true;
	}
	return false;
}

function validateState(){
	'use strict';
if (state.selectedIndex != 0) {
	removeErrorMessage('state');
} else {
	addErrorMessage('state', 'Please select your state.');
	return true;
}
	return false;
}

function validatezip(){
	'use strict';
if (/^\d{4}$/.test(zip.value)) {
	removeErrorMessage('zip');
} else {
		addErrorMessage('zip', 'Please enter your 4 digit zip code.');
	error = true;
	//return true;
}
}

	// Validate the phone number:
	function validatephone(){
		'use strict';
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
		//return true;
	}
}


// Function called when the form is submitted.


// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;

	// Validate the first name:
	let firstNameInvalid = validatefirstName();
	if (firstNameInvalid == true){
	error = true;
	}


	// Validate lastName
	let lastNameInvalid = validatelastName();
	if (lastNameInvalid == true){
	error = true;
	}

let emailInvalid = validateemail();
	if (emailInvalid == true){
		error = true;
	}

	let phoneInvalid = validatephone();
	if (phoneInvalid == true){
		error = true;
	}


	
	//validate city
	let cityNameInvalid = validatecity();
	if (cityNameInvalid == true){
	error = true;
	}


	// Validate the state:
	let stateInvalid = validateState();
	if (stateInvalid == true){
	error = true;
	}

	
	// Validate the zip code:
	
	let zipInvalid = validatezip();
	if (zipInvalid == true){
	error = true;
	}

    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);
	

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips on the phone number: //
	U.enableTooltips('phone');
    U.enableTooltips('email');
	U.addEvent(U.$('firstName'), 'blur', validatefirstName);
	U.addEvent(U.$('lastName'), 'blur', validatelastName);
	U.addEvent(U.$('state'), 'blur', validateState);
	U.addEvent(U.$('city'), 'blur', validatecity);
	U.addEvent(U.$('zip'), 'blur', validatezip);
	U.addEvent(U.$('email'), 'blur', validateemail);
	U.addEvent(U.$('phone'), 'blur', validatephone);
};

