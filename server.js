const express = require("express")
const morgan = require("morgan")
const bootcamps = require('./src/routes/bootcamps')

const app = express()

// @desc Logger for dev environment
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT

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