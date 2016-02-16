

var httpObj = require('http');

var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>Its working!</h1></body></html>";


/* for DB */
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : '128.199.101.112',  
  user     : 'root',  
  password : 'kevell@db0123',  
  database : 'duc',
  port	   : 3306
});  
connection.connect();  
  
connection.query('SELECT * FROM users;', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  console.log(rows[0]);  
});  
  
connection.end(); 
/* for DB */

httpObj.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlContent);
  res.end();
}).listen(8012, '127.0.0.1');
console.log('Web server is running at http://localhost:8012');
