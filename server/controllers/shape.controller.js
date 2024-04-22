const Shape = require("../models/shape.model.js");
const Invent = require("../models/inventory.model.js");

const createShape = async (req, res) => {
  console.log(req.body.formData);
  try {
    const newShape = new Shape({
      name: req.body.formData.shape,
      nutsReq: req.body.formData.nuts,
      sweet_baking_sodaReq: req.body.formData.sweet_baking_soda,
      oilReq: req.body.formData.oil,
      sugarReq: req.body.formData.sugar,
      chocolateReq: req.body.formData.chocolate,
      flourReq: req.body.formData.flour,
    });
    
    // Save the shape to the database
    await newShape.save();
    var id1 = newShape._id;
    const id = "661d887ab5dd32ecb833e3b2";
    const use = await Shape.findById(id1);
    await Invent.findByIdAndUpdate(id, { $inc: { nuts: -use.nutsReq } });
    await Invent.findByIdAndUpdate(id, { $inc: { sugar: -use.sugarReq } });
    await Invent.findByIdAndUpdate(id, { $inc: { flour: -use.flourReq } });
    await Invent.findByIdAndUpdate(id, { $inc: { oil: -use.oilReq } });
    await Invent.findByIdAndUpdate(id, {
      $inc: { sweet_baking_soda: -use.sweet_baking_sodaReq },
    });
    await Invent.findByIdAndUpdate(id, {
      $inc: { chocolate: -use.chocolateReq },
    });
    res
      .status(201)
      .json({ message: "Shape created successfully", shape: newShape });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createShape
};
