const express = require('express');
const cookieRouter = express.Router();
const cookieController = require('../controllers/cookie.controller.js');

cookieRouter.get("/",cookieController.getCookie);
cookieRouter.post("/",cookieController.createCookie);

//cookieRouter.put("/:id",cookieController.updateCookie);

module.exports = cookieRouter;