const express = require("express");
const morgan = require("morgan");
const colors = require("colors");

const bootcamps = require("./src/api/v1/routes/bootcamps");
const connectDB = require("./src/api/v1/config/db");

const app = express();

connectDB();

// @desc Logger for dev environment
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);
const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`The server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow
			.bold
	)
);

// Handle unhandle promise rejections

process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	server.close(() => {
		process.exit(1);
	});
});
