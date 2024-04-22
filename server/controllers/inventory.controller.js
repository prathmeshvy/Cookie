const Inven = require('../models/inventory.model.js');

const getInventory = async (req,res)=>{
    try {
        const ingredients =  await Inven.find({}); 
        res.status(200).json(ingredients);
       } catch (error) {
         res.send(500).json({message:error.message});
       }
}

const createInventory = async(req,res) =>{
    try {
        const ingredients = await Inven.create(req.body);
        res.status(200).json(ingredients);
      } catch (error) {
        res.status(500).json({message:error.message});
      }
}

const updateIngredient = async (req, res) => {
    const { ingredient } = req.params;
    const { quantity } = req.body;
  
    try {
      const inventory = await Inven.findOne();
      if (!inventory || inventory[ingredient] === undefined) {
        return res.status(404).json({ message: `Ingredient '${ingredient}' not found` });
      }
      inventory[ingredient] = parseInt(quantity);
      await inventory.save();
  
      return res.status(200).json({ message: `Quantity of ${ingredient} updated successfully` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

module.exports ={
    getInventory,
    createInventory,
    updateIngredient
};