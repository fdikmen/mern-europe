const fs = require('fs')
const file = 'video.mp4'

//Creating Stream
const readStream = fs.createReadStream(file)
let counter=0;
let progress = 0;


fs.stat(file,(err,data)=>{
    console.log("Data",data);
    const total = data.size;
    console.log("File Total: " , total);

    //Reading a chunk
readStream.on('data',(chunk)=>
{   //progress = progress + chunk.length;
        progress += chunk.length
    //console.log(++counter + '. Coming a data...');
    //console.log(`Current Chunk:${chunk.length} Total:${progress}`)
    console.log(Math.round((100*progress)/total)+'%')
})

readStream.on('end',()=>{
    console.log('Finished. Total Size: ' + progress);
})



})


