const fs = require('fs')
const file = 'video.mp4'

//Creating Stream
const readStream = fs.createReadStream(file)
let counter=0;
//Reading a chunk
readStream.on('data',(chunk)=>
{
    console.log(counter++ + '. Coming a data... Length:', chunk.length);
})

readStream.on('end',()=>{
    console.log('Finished.');
})