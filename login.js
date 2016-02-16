var httpObj = require('http');
    var express = require('express');
     var   app     = express();
var htmlContent = "<!DOCTYPE html><html><head><title> Node.js </title></head><body><h1>Select query</h1></body></html>";


/* for DB */
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '', 
  database : 'nodejs'
});  

var str = '{"name": "Angel"}';
var obj = JSON.parse(str);

connection.connect(); 
app.get('/:login', function(req,res){
	
connection.query('SELECT * FROM customer WHERE ? ', obj, function(err, rows, fields)   
{  
  if (err) throw err;  
  
                  res.send({
                    result: 'success',
                    // err:    '',
                    // fields: fields,
                    json:   rows,
                    length: rows.length
                });
                connection.release();
});  
  
//connection.end(); 
/* for DB */

  
})
app.listen(8000);
 console.log('Rest Demo Listening on port 8000');
