var express = require("express")
var app = express.Router()
var BookModel = require("../models/Book")

app.get("/", (req, res) => {
  res.json("GET request to the BOOK PAGE");
});

/**POST Methos */
app.post("/", function (req, res, next) {
  const book = new BookModel(req.body);
  book.save((err, data) => {
    if (err) {      res.json(err);    }
    res.json(data);
  });
});

module.exports = app
