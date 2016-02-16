/* for DB */
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '', 
  database : 'nodejs'
});  
connection.connect(); 
var http = require("http");
var server = http.createServer(function(request, response) {
    connection.getConnection(function(err, connection){
        if(!err){
            connection.query('SELECT * from customer' , function(err, rows) {
                var users = '';
                for (var i = 0; i < rows.length; i++) {
                    users += rows[i].id + "<br />";
                }
                connection.release(); // always put connection back in pool after last query
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write("<!DOCTYPE html>");
                response.write("<html>");
                response.write("<head>");
                response.write("<title>Hello World Page</title>");
                response.write("</head>");
                response.write("<body>");
                response.write(customer);
                response.write("</body>");
                response.write("</html>");
                response.end();
           });
        }else{
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write("<head>");
            response.write("<title>Hello World Page</title>");
            response.write("</head>");
            response.write("<body>");
            response.write(err.toString());
            response.write("</body>");
            response.write("</html>");
            response.end();
        }
    });
});
server.listen(9999);
console.log("Server is listening localhost:9999");