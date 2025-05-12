// DEPENDENCIES
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

// ROUTES
const userRoutes = require("./routes/user");

// ENVIRONMENT SETUP
require('dotenv').config();

// SERVER SETUP
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Allow all resources
//app.use(cors());
const corsOptions = {
    //to be updated when we connect this to our client
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// MONGODB DATABASE CONNECTION
mongoose.connect(`${process.env.MONGODB_STRING}`);

mongoose.connection.once('open',()=> console.log('Connected to MongoDB Atlas.'))


// BACKEND ROUTES
app.use("/users", userRoutes);


// SERVER GATEWAY RESPONSE
if(require.main === module){

	app.listen(process.env.PORT || 4000, ()=>{
		console.log(`API is now online on port ${process.env.PORT || 4000}`);

	});
}

module.exports = {app, mongoose};