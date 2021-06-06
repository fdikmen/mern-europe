const events = require('events')
const myEventEmitter = new events.EventEmitter();

//Create EVENT
myEventEmitter.on('sayHello',(name)=>{
   // console.log('Hello !!! ' + name);
      console.log(`Hello !!! ${name}`);
})

//Create EVENT with ONCE
myEventEmitter.once('sayHelloOnce',(name)=>{
       console.log(`Hello !!! ${name}`);
 })
const data = 'Tommy';
const data2 = 'Tommy2';
//Trigger EVENT
/*setInterval(() => {
    myEventEmitter.emit('sayHello',data)
}, 2000);*/

myEventEmitter.emit('sayHello',data)
myEventEmitter.emit('sayHello',data)
myEventEmitter.emit('sayHello',data)
myEventEmitter.emit('sayHelloOnce',data2)
myEventEmitter.emit('sayHelloOnce',data2)
myEventEmitter.emit('sayHelloOnce',data2)

console.log("__filename:",__filename);
console.log("__dirname:",__dirname);