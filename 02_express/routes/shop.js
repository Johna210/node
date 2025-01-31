const path = require("path");

const express = require("express");

const router = express.Router();

const adminData = require("./admin");

const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
