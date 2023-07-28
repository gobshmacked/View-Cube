const express = require("express");
//const { Application, Request, Response } = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const HOST = 'localhost'


app.get("/", (req, res) => {
  res.send("Healthy");
});

app.get("/results", (req, res) => {
	yeet = JSON.stringify('yeet')
	res.send(yeet);
	console.log("HERENO")
});

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
