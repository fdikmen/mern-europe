const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
    {
        userId:Number,
        id:{required:true,unique:true,type:Number},
        title:{type:String,required:true},
        body:String,
        isActive:{type:Boolean,default:true},
        meta:{votes:Number,favs:Number},
        comments:[{message:String}],
        createdDate:{type:Date,default:Date.now}

    })

    module.exports = mongoose.model('post',PostSchema)