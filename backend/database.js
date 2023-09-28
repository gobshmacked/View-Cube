let mysql = require('mysql')

const StoreQuizData = (x,y,u,r,datetime) => {
	let connection = mysql.createConnection({
		host: 'politicalalignment.org',
		database: 'politi14_userData',
		user: 'politi14_gobshmacked',
		password: '6x3!]+rC.bUA'
	})

	connection.connect(function(err) {
		if (err) {
			console.error('Error connecting: ' + err.stack);
			return;
		}
	});

	let insertStatement = `INSERT INTO QuizData (x, y, u, r, completionTime) VALUES (${x}, ${y}, ${u}, ${r}, ${datetime.getTime()})`

	connection.query(insertStatement);
	connection.end();
}

module.exports.StoreQuizData = StoreQuizData;