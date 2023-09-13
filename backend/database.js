let mysql = require('mysql')

const StoreQuizData = (x,y,z,datetime) => {
	let connection = mysql.createConnection({
		host: 'https://politicalalignment.org',
		database: 'politi14_userData',
		user: 'politi14',
		password: '6x3!]+rC.bUA'
	})

	connection.connect(function(err) {
		if (err) {
			console.error('Error connecting: ' + err.stack);
			return;
		}
		console.log('Connected as id ' + connection.threadId);
	});

	let insertStatement = `INSERT INTO QuizData (x, y, z, completionTime) VALUES (${x}, ${y}, ${z}, ${datetime})`

	connection.query(insertStatement);
	connection.end();
}

module.exports.StoreQuizData = StoreQuizData;