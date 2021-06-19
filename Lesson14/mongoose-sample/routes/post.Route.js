var express = require("express");
var router = express.Router();

const PostModel = require("../models/Post");

router.get('/sorting', (req, res) => {
  PostModel.find()
                .sort({id:'descending',title:1,"meta.vote":-1})/**descending:-1:desc ||| ascending:1:asc */
               .then((resultData)=>{res.json(resultData)})
               .catch((errorDetail)=>{res.json(errorDetail)}) 

          
})

router.get('/limit-skip', (req, res) => {
  PostModel.find({},'title isActive')
              //.sort({id:'descending'})
              .skip(1)
              .limit(2)
               .then((resultData)=>{res.json(resultData)})
               .catch((errorDetail)=>{res.json(errorDetail)}) 

          
})


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

/**UPDATEMANY() */
router.put('/updatemany', function(req, res) {
  PostModel.updateMany({isActive:false},{title:'Title updated.'},(err,data)=>
  {
    if(err) res.json(err)
    res.json(data)
  })
});

/**UPDATEONE() */
router.put('/updateone', function(req, res) {
  PostModel.updateOne({isActive:false},{title:'Title updated from updateOne Method.'},(err,data)=>
  {
    if(err) res.json(err)
    res.json(data)
  })
});

/**FINDBYIDANDUPDATE() */
router.put('/findbyidandupdate', function(req, res) {
  PostModel.findByIdAndUpdate('60ca39fc91462b3440cf4c86',
  {title:'Title updated from findByIdAndUpdate Method.','meta.favs':99}
  ,(err,data)=>{if(err) res.json(err)
    res.json(data)  })
});

/**DELETEMANY() */
router.delete('/deletemany', function(req, res) {
  PostModel.deleteMany({isActive:false},(err,data)=>
  {
    if(err) res.json(err)
    res.json(data)
  })
});

/**DELETEONE() */
router.delete('/deleteone', function(req, res) {
  PostModel.deleteOne({isActive:true},(err,data)=>
  {
    if(err) res.json(err)
    res.json(data)
  })
});

/**FINDBYIDANDREMOVE() */
router.delete("/findbyidandremove", function (req, res) {
  var postId = "60ca48cfa829d13a685b9c2e";
  PostModel.findByIdAndRemove(postId, (err, data) => {
    if (err) res.json(err);
    res.json("Removed Post : " + data);
  });
});

module.exports = router;