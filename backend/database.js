import mysql from 'mysql'

export const StoreQuizData = (x,y,z,datetime) => {
	let connection = mysql.createConnection({
		host: 'https://politicalalignment.org',
		database: 'politi14_userData',
		user: 'gobshmacked',
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