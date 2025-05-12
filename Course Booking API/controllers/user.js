// DEPENDECIES AND MODULES
const User = require('../models/User');
const bcrypt = require('bcrypt');
// const auth = require('../auth.js');


// USER REGISTRATION
module.exports.registerUser = (reqBody) =>{

	let newUser = new User({
		firstName : reqBody.firstName,
		lastName : reqBody.lastName,
		email: reqBody.email,
		mobileNo : reqBody.mobileNo,
		password : bcrypt.hashSync(reqBody.password,10)
	})

	return newUser.save().then((result) =>
		result).catch(err => err);
}