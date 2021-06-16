var express = require("express");
var router = express.Router();

const PostModel = require("../models/Post");

router.get('/search', (req, res) => {
   /* PostModel.find({isActive:false,title: "Test Title"})
                .then((resultData)=>{res.json(resultData)})
                .catch((errorDetail)=>{res.json(errorDetail)}) */

    PostModel.find({ isActive: false }, (errorDetail, resultData) => {
      if (errorDetail) {res.json(errorDetail);}
      res.json(resultData);
    });         
})

router.get('/searchBy', (req, res) => {
 
     PostModel.findOne({ isActive: false },'isActive title', (errorDetail, resultData) => {
       if (errorDetail) {res.json(errorDetail);}
       res.json(resultData);
     });         
 })

 router.get('/searchById', (req, res) => {
 
    PostModel.findById('60ca40dbbac9cb3bf45abcac','isActive title', (errorDetail, resultData) => {
      if (errorDetail) {res.json(errorDetail);}
      res.json(resultData);
    });         
})

router.post("/", (req, res) => {
    /*const _post = new PostModel({
       title: req.body.title,
      id:parseInt(req.body.id),
      body: req.body.body,
      isActive: req.body.isActive,
      comments: req.body.comments,
      meta: req.body.meta,
    });*/
    const _post = new PostModel(req.body);
    _post.save((err, data) => {
      if (err) {
          res.json(err);
      }
      res.json(data);
    });
  });
  

router.get("/", (req, res) => {
  const _post = new PostModel({
     title: "Test Title",
    id: 11,
    body: "Body Content Required",
    isActive: false,
    comments: [{ message: "Good Job." }, { message: "Bad Job." }],
    meta: { votes: 85, favs: 55 },
  });
  _post.save((err, data) => {
    if (err) {
        res.json(err);
    }
    res.json(data);
  });
  //res.send('GET request to the homepage')
});

module.exports = router;
