import { StoreQuizData } from "./database.js";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

let corsOptions = {
	origin: 'https://politicalalignment.org',
	methods: ['GET', 'POST'],
}
corsOptions = {}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.post("/results", (req, res) => {
	console.log('in server backend')
	const { x, y, z } = req.body;
	// StoreQuizData(x,y,z,new Date())
	console.log(x,y,z,new Date())
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
  });
  

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
