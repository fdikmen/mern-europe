const fs = require('fs')
const file = 'video.mp4'
var path = require('path')

console.log(path.extname('video.mp4'))

const myReadStream = fs.createReadStream(file)

const myWriteStream = fs.createWriteStream('newVideo.mp4')

myReadStream.pipe(myWriteStream)

myWriteStream.on('finish',()=>{
    console.log('Finished writeStream...')
})
