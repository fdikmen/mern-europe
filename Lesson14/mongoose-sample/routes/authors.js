var express = require("express");
var app = express.Router();
var AuthorModel = require("../models/Author");

app.get("/aggregate", (req, res) => {
  AuthorModel.aggregate(
    [
      {
        $match: { isDelete: false },
      },
    ],
    (err, data) => {
      if (err) res.json(err);
      res.json(data);
    }
  );
});

app.get("/", (req, res) => {
  res.json("GET request to the AUTHOR PAGE");
});

app.post("/", function (req, res) {
  const newAuthor = new AuthorModel(req.body);
  newAuthor.save((err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

module.exports = app;
