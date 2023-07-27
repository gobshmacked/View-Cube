const express = require("express");
const { Application, Request, Response } = require("express");
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

app.post('http://localhost:8000/results'), (req, res) => {
	const { x, y, z } = req.body;
	console.log(x,y,z)
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, HOST, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
