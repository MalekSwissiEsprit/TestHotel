const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const { hotelRouter } = require("./controller/hotelRouter");

mongoose
  .connect("mongodb://localhost:27017/TestHotel_db")
  .then(() => {
    console.log("mongoose is working !");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/hotel", hotelRouter);


app.listen(3007, () => {
  console.log("server is running on port 3002");
});
