// var http = require('http');
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var server = http.createServer(function(req,res)
// {
//     eventEmitter.emit('someone requested' , 'Testing'); //event trigger
//    res.end('server is working');
// });
// server.listen(3000 , 'localhost' , function()
// {
//     console.log('server started on port 3000');
// });
// eventEmitter.on('someone requested' , function(data)
// {
//     console.log('a request has been done on a server'+data);
// })     //event listner

//---------------------------------------------------------------
// var express = require('express');
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(app);
// var app = express();
// server.listen(3000 , function()
// {
//     console.log('Server listning to port 3000');
// });
// app.get('/' , function(req, res)
// {
//     res.send('<h1>Express Works</h1>');
// });
// app.get('/tasks' , function(req, res)
// {
//     // res.send('<h1>Task Works</h1>');
//     fs.readFile('db.json' , function(err , data)
//     {
//         var task = JSON.parse(data.toString()).tasks; // fetch only task in json file
//         res.send(data.toString()); //Give whole array
//         res.json(task); //we can give res.send also
//     });

// });

//-----------------------------------------------------------------------
// var moment = require('moment');
// console.log(
//     moment.format(
//         "DD MM YYYY , h:mm:ss a"
//     )
// );

// -------------------------------------------------------------------
const express = require('express');
const app = express();
app.get('/' , function(req , res)
{
    res.send('Hii my name is Divyansh Gupta');
});
app.post('/' , function(req , res)
{
    res.send('POST - Hellow world');
});
app.listen(3000 , function()
{
    console.log('server started');
} )
