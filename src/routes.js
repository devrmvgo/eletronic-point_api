const express = require('express');
const routes = express.Router();

const EmployeeController = require('./controllers/EmployeeController');

routes.get('/', EmployeeController.index)

module.exports = routes;