/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {
		//put code here

		codepen.objects.User = {
			name:null,
			email: null,
			username: null,
			password: null,
			is_logged_in: false
		};

		var NewUser = Object.create(codepen.objects.User,{
		firstname : {
			writable: true,
			enumarable: true,
			value:''
		},
		lastname: {
			writable: true,
			enumarable: true,
			value:''
		}
	});


	//hide the sign up on load
		$('.signup-form').hide();

	//bring the signup elemnets if you click signup, and hide the login elements
	$(".signup-form-btn").click(function(){
		$(".login-form").hide();
		$(".signup-form").show();
		$(".login-form-btn").removeClass("active");
		$(".signup-form-btn").addClass("active");
	});

	$(".login-form-btn").click(function(){
		$(".signup-form").hide();
		$(".login-form").show();
		$(".login-form-btn").addClass("active");
		$(".sign-form-btn").removeClass("active");	
	});

	// listen for click on the login button
		$(".btn-login").click(function(){
			// grab the value from the username field, and the password field and store in variables
			var user = Object.create(NewUser);
			user.username = $('#login-username-field').val();
			user.password = $('login-username-field').val();
			var response = codepen.api.login(user);
			alert(codepen.api.login(user).error);

		});

		$(".btn-signup").click(function(){
			// grab the value from the username field, and the password field and store in variables
			var user = Object.create(NewUser);
			user.firstname = $('#signup-firstname-field').val();
			user.lastname = $('#signup-lastname-field').val();
			user.email = $('#signup-email-field').val();
			user.username = $('#signup-username-field').val();
			user.password = $('signup-password-filed').val();
			var response = codepen.api.login(user);
			alert(codepen.api.login(user).error);

		});

	//instatiate an object with the username and password.

	

	// call the login method and pass it  our previously instantiated object and handle the response

});