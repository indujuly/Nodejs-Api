var mysql = require('mysql');
var connection = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"nodejs"
  });
connection.connect();
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var time = hour+":"+min ;
var data ={'bookId':'cp3','time':time};
 id = JSON.stringify(data); 
var value = JSON.parse(id);
var query = connection.query('UPDATE book SET startTime = "'+value.time+'" WHERE bookId = "'+value.bookId+'"',function(error,result){
 if(error)
   {
    console.log(error);
   }
  else {
     var myArray = {data: {msg:'Updated startTime successfully!', status:'success'}};
    console.log(JSON.stringify(myArray));
     }
  });
