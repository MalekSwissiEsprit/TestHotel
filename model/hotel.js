const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  fabricationDate: Date,
  nbrPersons : Number , 
  nbrPersons: { type: Number, default: 10 }
});
const Hotel = mongoose.model("hotel", hotelSchema);

module.exports = { Hotel };
