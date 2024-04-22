const express = require('express');
const shapeRouter = express.Router();
const shapeController = require('../controllers/shape.controller.js');

shapeRouter.post("/", shapeController.createShape);

module.exports = shapeRouter;