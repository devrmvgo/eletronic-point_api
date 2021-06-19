
const EmployeeController = require("../app/controllers/EmployeeController");

const routes = require("express").Router();

// Create a new Employee
routes.post("/employees", EmployeeController.create);
// Retrieve all Employees
routes.get("/employees", EmployeeController.findAll);
// Retrieve a single Employee with id
routes.get("/employees/:id", EmployeeController.findOne);
// Update a Employee with id
routes.put("/employees/:id", EmployeeController.update);
// Delete a Employee with id
routes.delete("/employees/:id", EmployeeController.delete);

module.exports = routes;