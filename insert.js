

var httpObj = require('http');

var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>It works!</h1></body></html>";


/* for DB */
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodejs'
});  
// else res.send('success');
connection.connect();  
  
  
// connection.query('insert into customer (name, price) values ("' + req.body.name + '", "' + req.body.name.price + '")',
connection.query('insert into customer (name, address) values ("Kevell", "corp")', function(err, res)   
{  
  if (err) throw err;  
  console.log('Last insert ID:', res.insertId);  
});  

 
connection.end(); 
/* for DB */


httpObj.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlContent);
  res.end();
}).listen(8012, '127.0.0.1');
console.log('Web server is running at http://localhost:8012');
