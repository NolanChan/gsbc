//@ts-check
const auth = WeDeploy.auth('auth.gsbc.wedeploy.io');
const data = WeDeploy.data('data.gsbc.wedeploy.io');
const currentUser = auth.currentUser;

function addMemberToDatabase(member) {
	data.create(
		'members',
		{
			email: member.email,
			firstName: member.firstName,
			lastName: member.lastName,
			pickAvailable: true
		}
	)
	.then(
		function(newMember) {
			// console.log(newMember);
		}
	)
	.catch(
		function(err) {
			console.error(err)
		}
	);
};

function newMember() {
	auth.createUser(
		{
			email: user.email.value,
			firstName: user.firstName.value,
			lastName: user.lastName.value,
			password: user.password.value
		}
	)
	.then(
		function(member) {
			addMemberToDatabase(member);
			alert('Account sucessfully created!');
			signIn();
			user.reset();
		}
	)
	.catch(
		function() {
			alert('Sign-up failed. Try again.');
			user.reset();
		}
	);
}

function signIn() {
	auth.signInWithEmailAndPassword(
		user.email.value,
		user.password.value
		)
	.then(
		function() {
			alert('You are signed-in');
			user.reset();
			document.location.href = '/';
		}
	)
	.catch(
		function(err) {
			alert('Sign-in failed. Chcek your email/password and try again.');
		}
	);
}

function signOut() {
	auth.signOut()
		.then(
			function() {
				document.location.href = '/';
			}
		)
	;
}

if (currentUser) {
	$('#controlMenu').replaceWith(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="javascript:;" id="controlMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				${currentUser.firstName}
			</a>
			<div class="dropdown-menu" aria-label="User settings">
				<a class="dropdown-item" href="/profile/"><i class="fa fa-user fa-fw"></i> Edit Profile</a>
				<a class="dropdown-item" href="javascript:;" onclick="signOut(); return false;"><i class="fa fa-sign-out fa-fw"></i> Sign Out</a>
			</div>
		</li>`
	);

	$('.edit').html(`
		<div class="btn-group dropup">
			<a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog" aria-hidden="false" aria-label="Edit Bookshelf"></i></a>
			<div class="dropdown-menu">
				<a class="dropdown-item" data-target="#addBookModal" data-toggle="modal" href="javascript:;"><i class="fa fa-plus fa-fw"></i> Add a Book</a>
				<a class="dropdown-item edit-bookshelf" href="javascript;"><i class="fa fa-pencil fa-fw"></i> Toggle Controls</a>
			</div>
		</div>
	`);

	const stuff = $('#stuff');

	stuff.hover(
		function() {
			stuff.text('Shit ')
		},
		function() {
			stuff.text('Stuff')
		}
	);
}
else {
	// No user is signed in.
}
