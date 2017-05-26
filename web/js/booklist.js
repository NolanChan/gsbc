var bookList = {
	_init: function() {

	},

	_formatBooks: function(books) {

	},

	_getBookData: function() {
		var instance = this;

		WeDeploy
			.data('data.gsbc.wedeploy.io')
			.get('books')
			.then(
				function(books) {
					instance._formatBooks(books);
				}
			)
			.catch(
				function(error) {
					console.error(error);
				}
			);
	}
}

WeDeploy
	.data('data.gsbc.wedeploy.io')
	.get('books')
	.then(
		function(books) {
			console.log(books);
		}
	)
	.catch(
		function(error) {
			console.error(error);
		}
	);

$(document).ready(
	function() {
		$.tablesorter.addParser(
			{
				format: function(str) {
					var mon = str.match(REGEX_MON);
					var year = str.match(REGEX_YEAR);

					mon = getMonthFromString(mon);

					str = '01/' + mon + '/' + year;
					return Date.parse(str);
				},
				id: 'mon-yyyy',
				is: function() {
					return false;
				},
				parsed: false,
				type: 'numeric'
			}
		);

		function getMonthFromString (mon) {
			return new Date(Date.parse(mon + ' 1, 2017')).getMonth() + 1;
		}

		$('table').tablesorter(
				{
				headers: {
					2: {
						sorter: 'mon-yyyy',
						sortInitialOrder: 'desc'
					}
				},
				theme: 'bootstrap'
			}
		);

		$('table').trigger('update');

		$('table').trigger('sorton', [[[2, 1]]]);

	}
);