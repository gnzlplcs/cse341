const routes = require("express").Router();

const myController = require('../controllers')

routes.get("/", myController.showName);
routes.get("/wife", myController.showAnotherName);

module.exports = routes;
