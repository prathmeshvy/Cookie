const express = require('express');
const invenRouter = express.Router();
const invenController = require('../controllers/inventory.controller.js');


invenRouter.get("/",invenController.getInventory);
invenRouter.post("/",invenController.createInventory);

invenRouter.put("/:ingredient",invenController.updateIngredient);


module.exports = invenRouter;

