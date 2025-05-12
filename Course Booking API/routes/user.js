 // DEPENDENCIES AND MODULES

const express = require('express');
const userController = require('../controllers/user');

// ROUTING COMPONENT
const router = express.Router();

// route for User Registration

router.post("/register",(req, res) => {
	userController.registerUser(req.body).then(result => res.send(result));
})