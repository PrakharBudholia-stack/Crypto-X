const express = require("express");

const app = express();
const cors = require("cors");

require("dotenv").config();

const mainRouter = require("./routes/mainRouter");

const port = process.env.PORT || 5000;
const db = require("./config/mongoose");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Credentials",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

	next();
});

app.use("/", mainRouter);

app.use((req, res, next) => {
	const error = new Error("ERR: Could not find this route.");
	throw error;
});

// Handling error
app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || "ERR: An unknown error occurred!" });
});

app.listen(port, (err) => {
	if (err) {
		console.log(`Error in running the server:${err}`);
	}
	console.log(`Server Started on port:${port}`);
});
