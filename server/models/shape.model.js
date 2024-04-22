const mongoose = require("mongoose");

const ShapeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    nutsReq: {
      type: Number,
    },

    sweet_baking_sodaReq: {
      type: Number,
    },

    oilReq: {
      type: Number,
    },

    sugarReq: {
      type: Number,
    },

    flourReq: {
      type: Number,
    },
    
    chocolateReq: {  
      type: Number
    }
  },
  
  {
    timestamps: true,
  }
);

const Shape = mongoose.model("Shape",ShapeSchema);

module.exports= Shape;