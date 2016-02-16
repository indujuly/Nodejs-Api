
var httpObj = require('http');

var htmlContent = "<h1>Its working!</h1>";
/*
Need Request: did="0002", bookId="cp4"
*/

/* for DB */
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '', 
  database : 'nodejs'
});  
connection.connect();
// Confirm to Select Driver id
 var selectdid ='SELECT * FROM driver WHERE did="0002"';
connection.query(selectdid, function(err, rows, fields)   
{  
  if (err)  throw err;   
   console.log('The Driver Name is : '); 
   console.log(rows[0].name);
   console.log('\n');
  });
  
  // Confirm to Select Driver id
 var query ='SELECT * FROM book WHERE status="0" and bookId="cp4"';
connection.query(query, function(err, rows, fields)   
{  
  if (err) throw err;  
  console.log('The Booking Status is : ');
  console.log(rows[0].status);
 // var stat= console.log(rows[0].status);
  });
	 

  // Update Driver id to customer tbl  
  connection.query(
  'UPDATE book SET driverId=?, status=? WHERE bookId=?',["0002","1","cp4"],
  function(err, rows, fields)   
	{ 
		if (err) throw err;
		console.log('The cab Booking is Confirm to driver.');
	});
	
	 // Select Customer detail after confirm to driver
	 var bid="cp4";
   connection.query('SELECT * FROM book WHERE bookId=?',bid ,
   function(err, rows, fields)
	{ 
		if (err) throw err;
		console.log('The customer details.');
		var output = '{"data":{"bookid":"'+rows[0].bookId+'","Mobile":"'+rows[0].bookId+'", "status":"success"}}';
	   console.log('Output: ' + output);
		//console.log(rows);
	});

 
  // console.log('Customer Records:\n');
  // console.log(rows);  

  
connection.end(); 
/* for DB */


httpObj.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlContent);
  res.end();
}).listen(8012, '127.0.0.1');
console.log('Web server is running at http://localhost:8012');
