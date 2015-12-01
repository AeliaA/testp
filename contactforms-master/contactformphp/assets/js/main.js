var $password = $("#password");
var $confirmPassword = $("#confirm_Password");
var $username = $("#username");

//Hide hints
$("form span").hide();

function isUsernamePresent(){
	return $username.val().length > 0;
}

function isPasswordValid(){
	return $password.val().length > 8;
}
function arePasswordsMatching(){
	return $password.val() === $confirmPassword.val();
}
function canSubmit(){
	 return isPasswordValid() && arePasswordsMatching () && isUsernamePresent();
}
function passwordEvent(){
	//find out if password is valid
	if (isPasswordValid()){
		//hide hint if available
		$password.next().hide();
	} else {
		//else show that
		$password.next().show();
	}
}
function confirmPasswordEvent(){
	//find out if confirm password is valid
	if (arePasswordsMatching()){
		//hide hint if available
		$confirmPassword.next().hide();
	} else {
		//else show that
		$confirmPassword.next().show();
	}
}
//if the html elements value is not correct, stop the submit
function enableSubmitEvent(){
	$("#submit").prop("disabled", !canSubmit());
}
// if user name present, hide span, else show
function usernameEvent(){
	if (isUsernamePresent()){
		$username.next().hide();
	} else {
		$username.next().show();
	}
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


//when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

enableSubmitEvent();

























