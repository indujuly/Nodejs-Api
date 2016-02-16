var httpObj = require('http');

var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>Its working!</h1></body></html>";

/*
Need Request: bookId="cp4"
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
// Customer Select Driver details
connection.query('SELECT driver.name, driver.mobile, driver.did FROM book JOIN driver ON book.driverId = driver.did WHERE book.bookId=? and book.status=?',[bid,"1"],
 function(err, rows, fields)   
 {  
  if (err) throw err;  
  
  //console.log(rows[0]); 
  //console.log(rows[0].name);
 
  console.log('Driver Details:\n');
  var output = '{"data":{"Driver Name":"'+rows[0].name+'","Driver Mobile":"'+rows[0].mobile+'","Booking Id":"'+bid+'", "status":"success"}}';
	   console.log('Output: ' + output);
  //console.log(rows);
});  
  
connection.end(); 
/* for DB */


httpObj.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlContent);
  res.end();
}).listen(8012, '127.0.0.1');
console.log('Web server is running at http://localhost:8012');
