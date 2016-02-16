
var httpObj = require('http');

var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>Its working!</h1></body></html>";


/* for DB */
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '', 
  database : 'nodejs'
});  
connection.connect();  
  
connection.query('SELECT * FROM customer;', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  //console.log(rows[0]);
  // console.log(rows[0].name);
 /* for (var i = 0; i < rows.length; i++) 
  {
  console.log(rows[i].name);
	}; */
	
var myJson = {rows};
for(var myKey in myJson) {
   console.log("key:"+myKey+", value:"+myJson[myKey]);
}
  /*console.log('Customer Records:\n');
  console.log(rows); */
  
});  
  
connection.end(); 
/* for DB */



httpObj.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlContent);
  res.end();
}).listen(8012, '127.0.0.1');
console.log('Web server is running at http://localhost:8012');
