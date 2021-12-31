const express = require("express")
const morgan = require("morgan")

const app = express()

// @desc Logger for dev environment
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

const PORT = process.env.PORT

app.listen(PORT, console.log(`The server is running in ${process.env.NODE_ENV} on ${PORT}`))
