const express = require('express');
const cluster = require('cluster');
const currying = require('./advancedJs/currying')
const memoisation = require('./advancedJs/Memoization');
const closure  = require('./advancedJs/closure')
const { time, timeEnd } = require('console');
const thisSer = require('./advancedJs/this');
const {Person} = require('./advancedJs/prototype')
const {cards} = require('./advancedJs/generators');
const{obj1,fullName} = require('./advancedJs/callApplyBind')
const {ApolloServer}  =require('@apollo/server')
const {startStandaloneServer}= require('@apollo/server/standalone')
const {typeDefs} = require('./schema/typeDef')
const{resolvers} = require('./schema/resolvers')
const {validate}  = require("jsonschema")

const fs  = require('fs');
    // const app = express();
    const server = new ApolloServer({typeDefs,resolvers})
    const { url } =  startStandaloneServer(server, {
        listen: { port: 4000 },
      });
      
      console.log(`🚀  Server ready at: ${url}`);
      // Address, to be embedded on Person
      console.log(validate(5.6, {"type": "boolean"}));



    
      
      
    // const a = closure.clousres()
    // a()
    // a()
    // a()
    // thisSer.video('redux')
    // const person1 = new Person('sudarshan','0x')
    // const person2 = new Person('degens','0x')
    // Person.prototype.job = "fullStack"
    // console.log(person2.job)
    // fullName.apply(obj1)
    
    
    // console.log(time())
    // const store  = memoisation.compute(23453)
    // console.log(time())
    // store()
    // console.log(timeEnd())    
    // console.log(time())
    // store()
    // console.log(timeEnd())
    // thisSer.person.sayMyName()
    // const operations   = cards(1,2,3)
    // console.log("generator function",operations.next())
    // console.log("generator function",operations.next())
    // console.log("generator function",operations.next())
    
    // console.log(timeEnd())
    // console.log(currying.add(1,2,3))
    // console.log("currying implemtation" , currying.adds(10)(20)(90))
    // const object = {
    //     name:"sudarshan",
    //     value:'eth'
    // }
    // console.log(currying.information(object)(['name']))
    // console.log(time())
    // const mem = memoisation.compute(98989898)
    // // console.log("memoization",mem(424353))
    // mem()
    // console.log(timeEnd())
    // app.get('/',(req,res)=>{
        
    //     res.send("hello there")
    // })
    // app.get('/api/:n',(req,res)=>{
    //     res.send(req.params['n'])
    // })
    // app.get(('/'),(req,res)=>{
    //     res.sendFile(__dirname+"/index.html")
    // })
    // app.get('/video',(req,res)=>{
        // const  range = req.headers.range
        // if(!range){
        //     res.status(400).send("requires range header")
        // }
        // const videoPath  = "./assets/bigBuck.mp4"
        // const videoSize = fs.statSync(videoPath).size
        // const CHUNK_SIZE = 10 ** 6; // 1MB
        // const start = Number(range.replace(/\D/g, ""));
        // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

        // // Create headers
        // const contentLength = end - start + 1;
        // const headers = {
        //     "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        //     "Accept-Ranges": "bytes",
        //     "Content-Length": contentLength,
        //     "Content-Type": "video/mp4",
        // };

        // HTTP Status 206 for Partial Content
        // res.writeHead(206, headers);

        // // create video read stream for this particular chunk
        // const videoStream = fs.createReadStream(videoPath, { start, end });

        // // Stream the video chunk to the client
        // videoStream.pipe(res);

// })
    // app.listen(5000)

    


// if(cluster.isMaster){
//     const numCpus = require('os').cpus().length
//     console.log("i am master")
//     for(i=0;i<numCpus;i++){
//         cluster.fork()
//     }

// }
// else {
//     // console.log("i am worker",process.pid , cluster.worker.id)




    
// }
// cluster.on('listening',()=>{
//     console.log("worker id is ",process.pid)
// })
// cluster.on('exit',()=>{
//     console.log("one of the worker instances is terminated")
//     cluster.fork()
// })


