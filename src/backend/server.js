const express = require("express");
const https = require('https');
const fs = require('fs');
//const { Application, Request, Response } = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const options = {
	key: fs.readFileSync('./auth/key.pem'),      // Replace with the path to your private key file
	cert: fs.readFileSync('./auth/cert.pem') // Replace with the path to your certificate file
};


const HOST = 'localhost'

app.get("/", (req, res) => {
  res.send("Healthy");
});

// app.get("/results", (req, res) => {
// 	yeet = JSON.stringify('yeet')
// 	res.send(yeet);
// 	console.log("HERENO")
// });

app.post("/results", (req, res) => {
	const { x, y, z } = req.body;
	console.log(x, y, z)
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
  });
  

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
