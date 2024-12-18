const express = require("express");
const {
  findAll,
  findById,
  create,
  updateById,
  deleteByid,
} = require("../service/hotelService");
//const { controlUser } = require("../middleware/userValidator");
const hotelRouter = express.Router();
hotelRouter
  .get("/", async (req, res) => {
    const hotels = await findAll();
    return res.json(hotels);
  })
  .get("/:id", async (req, res) => {
    const hotel = await findById(req.params.id);
    return res.json(hotel);
  })
  
  .post("/", async (req, res) => {
    try {
      // Uncomment the next line if middleware is added
      // await controlHotel(req, res);
      const hotel = await create(req.body);
      return res.status(201).json(hotel);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  })


  .put("/:id",  async (req, res) => {
    try {
      // Uncomment the next line if middleware is added
      // await controlHotel(req, res);
      const hotel = await updateById(req.params.id, req.body);
      if (!hotel) {
        return res.status(404).json({ error: "Hotel not found" });
      }
      return res.json(hotel);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  })
  
  .delete("/:id", async (req, res) => {
    const hotel = await deleteByid(req.params.id);
    return res.json(hotel);
  });

module.exports = {
  hotelRouter,
};
