const express = require("express");

const router = express.Router();

router.post("/track-data", (req, res) => {
  console.log("Store data", req, body.data);
  res.status(200).json({ message: "success" });
});
