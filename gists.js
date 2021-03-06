bookAmazonUrl
bookAuthor
bookPhootUrl
bookRating
bookTitle
datePicked
dateUpdated
userPicked
userSubmitted
userUpdated

WeDeploy.data('http://data.gsbc.wedeploy.io')
  .create(
    'books',
    {
      'bookAmazonUrl': '',
      'bookAuthor': 'J.K. Rowling',
      'bookCoverUrl': '',
      'bookRatings': [{user: 1, rating: 5}, {user: 2, rating: 3}],
      'bookTitle': 'The Casual Vacancy',
      'datePicked': 'Jan 2013',
      'dateUpdated': '',
      'userPicked': 'Alex',
      'userSubmitted': 'Alex',
      'userUpdated': ''
    }
  )
  .then(res => console.log(res))
  .catch(err => console.error(err))
;

WeDeploy.data('https://data.gsbc.wedeploy.io')
  .create(
    'members',
    {
      'email': 'alex.valencia@me.com',
      'nameFirst': 'Alex',
      'nameLast': 'Valencia',
      'pickAvailable': true
    }
  )
  .then(res => console.log(res))
  .catch(err => console.error(err))
;

WeDeploy.data('data-gsbc.wedeploy.io')
  .create(
		'members',
		{
			email: "alex.valencia@me.com",
			firstName: "Alex",
			lastName: "Valencia",
			pickAvailable: true
		}
	)
	.then(
		function(newMember) {
			console.log(newMember);
		}
	)
	.catch(
		function(err) {
			console.error(err)
		}
	);

  const currentUser = WeDeploy.auth('https://auth-gsbc.wedeploy.io').currentUser;

WeDeploy.data('https://data-gsbc.wedeploy.io')
	.update('members/238206042415950498',{
	userId: currentUser
})
  .then(function(res){console.log(res)})
