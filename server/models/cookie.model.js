const mongoose = require("mongoose");

const CookieSchema = mongoose.Schema({
  shape: String,
  nuts:Number,
  sweet_baking_soda:Number,
  oil:Number,
  sugar:Number,
  flour:Number,
  chocholate:Number,
  bakingTemp: Number,
  cost: Number,
  calories: Number,
});

const Cookie = mongoose.model("Cookie", CookieSchema);

module.exports = Cookie;
