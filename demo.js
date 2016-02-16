var httpObj = require('http');
var express = require('express');
var app = express();

var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>Select query</h1></body></html>";


/* for DB */
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '', 
  database : 'nodejs'
});  
connection.connect(); 

 router.get("/:demo",function(req,res){
        //var query = 'SELECT * FROM customer WHERE name="Angel"';
        //var table = ["user_login","user_email","user_password",req.body.email,md5(req.body.password)];
        //query = mysql.format(query,table);
        connection.query('SELECT * FROM customer WHERE name="Angel"',function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });


module.exports = REST_ROUTER;


/* for DB */

app.listen(3000);
connection.end(); 
/*
httpObj.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlContent);
  res.end();
}).listen(8000, '127.0.0.1');
console.log('Web server is running at http://localhost:8000/login');
*/