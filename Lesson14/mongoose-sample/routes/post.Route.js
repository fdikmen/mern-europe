var express = require('express')
var router = express.Router()

const Post = require('../models/Post')

router.get('/', (req, res) => {
    const _post = new Post({
        title:'My new title two',id:2,body:'Body Content'
    })
    _post.save((err,data)=>{
            if(err){console.log(err)}
            res.json(data)
    })
  //res.send('GET request to the homepage')
})

module.exports = router;