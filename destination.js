

var httpObj = require('http');

var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>Its working!</h1></body></html>";

/*
Need Request: bookId="cp4", total km : 2km
*/

/* for DB */
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '', 
  database : 'nodejs'
});  
var bid="cp4";
connection.connect();
  // Calculate total amount  // Display BookId
connection.query('SELECT sum(amount * 50) as total FROM payment;', function(err, rows, fields)   
{  
  if (err) throw err;  
  //console.log('Total Amount is:\n');
  //var tot= console.log(rows[0].total);  
  var output = '{"data":{"Total Amount":"'+rows[0].total+'","Book Id":"'+bid+'", "status":"success"}}';
  // console.log(rows);    
  console.log(output);
  // console.log(rows);
}); 


connection.end();
/* for DB */



httpObj.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
}).listen(8012, '127.0.0.1');
console.log('Web server is running at http://localhost:8012');
