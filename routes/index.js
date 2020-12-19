var express = require('express');
var router = express.Router();
const userService = require('../service/users');
const fileUpload = require('../utils/upload');
const joi = require('joi');

router.get('/user/', (req, res, next) => {
	userService.getUsers().then(response => {
		res.send({
			status: 'Success',
			response
		})
	}).catch(err => {
		next(err);
	})
});

router.post('/user/add', fileUpload, async (req, res, next) => {
	try {
		await joi.number().min(6000000000).max(9999999999).validateAsync(req.body.phoneNumber);
		next();
	} catch (err) {
		next(err);
	}
}, (req, res, next) => {
	userService.addUser(req.body).then(response => {
		res.send({
			status: 'Success',
			response
		})
	}).catch(err => {
		next(err);
	})
});

router.post('/user/update', fileUpload, async (req, res, next) => {
	try {
		await joi.number().min(6000000000).max(9999999999).validateAsync(req.body.phoneNumber);
		next();
	} catch (err) {
		next(err);
	}
}, (req, res, next) => {
	userService.updateUser(req.body).then(response => {
		res.send({
			status: 'Success',
			response
		})
	}).catch(err => {
		next(err);
	})
});

router.post('/user/delete', (req, res, next) => {
	userService.deleteUser(req.body._id).then(response => {
		res.send({
			status: 'Success',
			response
		})
	}).catch(err => {
		next(err);
	})
});

module.exports = router;
