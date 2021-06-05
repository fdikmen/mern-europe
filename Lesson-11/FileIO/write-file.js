const fs = require('fs');

/**
 * fs.appendFile()
 * fs.writeFile()
 */

 fs.writeFile('demo2.txt','Hi files.',(err)=>{
    if (err) {
        throw err;
    }
    console.log("Runned appendFile method.")
})

fs.appendFile('demo2.txt','\nHi files.',(err)=>{
    if (err) {
        throw err;
    }
    console.log("Runned appendFile method.")
})
//Deleting File
fs.unlink('demo3.txt',(err)=>{
    if (err) {
        throw err;
    }
    console.log("Deleted file.")
})