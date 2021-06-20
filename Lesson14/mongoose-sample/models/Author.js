const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema(
    {
        name:{type:String, required:true, unique:true,maxlength:3,minlength:2},
        category:{type:String,required:true},
        surname:{type:String,
            maxlength:[5,'You can enter max {MAXLENGTH} characters in the `{PATH}` field.Your text:{VALUE}'],
            minlength:[2,'You can enter min {MINLENGTH} characters in the `{PATH}` field.Your text:{VALUE}']},
        score:{type:Number,default:0,min:0,max:100},
        views:{type:Number,default:0},
        isDelete:{type:Boolean,default:false}
    })
module.exports = mongoose.model('author',AuthorSchema)