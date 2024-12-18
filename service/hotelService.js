const { Hotel } = require("../model/hotel");

const create = (data) => {
  try {
    const hotel = new Hotel(data);
    return hotel.save();
  } catch (error) {}
};
const findAll = () => {
  try {
    return Hotel.find();
  } catch (error) {}
};
const findById = (id) => {
  try {
    return Hotel.findById(id);
  } catch (error) {}
};
const updateById = (id, data) => {
  try {
    return Hotel.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {}
};
const deleteByid = (id) => {
  try {
    return Hotel.findByIdAndDelete(id);
  } catch (error) {}
};

module.exports = {
  create,
  deleteByid,
  findAll,
  findById,
  updateById,
};
