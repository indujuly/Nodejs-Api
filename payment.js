

var httpObj = require('http');

var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>Its working!</h1></body></html>";

/*
Need Request: bookId="cp4", paystatus:1
*/

/* for DB */
var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '', 
  database : 'nodejs'
});  
connection.connect();
		var date = new Date();
		var hour = date.getHours();
		var min  = date.getMinutes();
		var endTime = hour+":"+min ;
  //  cash paid
 connection.query(
  'UPDATE book SET paystatus=? , endTime=? WHERE bookId=?',["1",hour+":"+min,"cp4"],
	function(err, rows, fields)
	{
		if (err) throw err;
		var output = '{"data":{"message":"The Customer was cash paid to driver.","status":"success"}}';
		// console.log(rows);    
		console.log(output);
		//console.log('The Customer was cash paid to driver.');
	});

  
connection.end();
/* for DB */

	httpObj.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
}).listen(8012, '127.0.0.1');
console.log('Web server is running at http://localhost:8012');
