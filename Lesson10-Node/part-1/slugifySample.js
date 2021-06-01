const slugify = require('slugify')

 // some-string
console.log("test one : ",slugify('some string lessön 10'))

// if you prefer something other than '-' as separator
console.log("test two : ",slugify("Hello world First Node Package","*"))