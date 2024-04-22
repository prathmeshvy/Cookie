const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://Prathmesh:Password123@cluster0.owry6km.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function connectToDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error", error);
  }
}

module.exports = connectToDB;
