const mongoose = require("mongoose");

const InventorySchema = mongoose.Schema(
  {
    nuts: Number,
    sweet_baking_soda: Number,
    oil: Number,
    sugar: Number,
    flour: Number,
    chocolate: Number,
  },
  {
    timestamps: true,
  }
);

const Inven = mongoose.model("Inven", InventorySchema);

module.exports = Inven;
