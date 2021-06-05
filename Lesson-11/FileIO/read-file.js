const fs = require('fs')

fs.readFile('demo.txt',(error,data)=>{
    if (error) {
        console.log(error)
    }
    console.log(data.toString());
    console.log("Finished reading file.")
})

const demoData = fs.readFileSync('demo.txt')
console.log("readFileSync->",demoData.toString())
console.log("Finished reading file with readFileSync")
