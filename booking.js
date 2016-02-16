//var config = require('./Config');
var mysql = require('mysql');
/* var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "vel3190@gmail.com",
        pass: "muralivel"
    }
}); */
connection = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"nodejs"
    });
 connection.connect();
var str = '{"mobile": "9600921722", "email": "kevell@gmail.com", "source": "trichy", "destination":"salem", "city":"trichy", "vehicletype": "bus"}';
var obj = JSON.parse(str);
   /** var post = {
        mobile: '9600921722',
        email: 'kevell@gmail.com',
        source: 'trichy',
        destination: 'salem',
      city: 'trichy',
     vehicletype: 'bus'
    };***/

 var query = connection.query('insert into book set ?', obj, function(err,result){
  if (err) throw err;
  //console.log(result.insertId);
});
var query1 = connection.query('update book set bookid=CONCAT("CB", LAST_INSERT_ID()) where id=LAST_INSERT_ID()', obj, function(err,result){
  if (err) throw err;
  //console.log(result);
});
var query2 = connection.query('select bookid from book where id=LAST_INSERT_ID()', obj, function(err,data){
  if (err) throw err;
 /* var query3 = connection.query('select email from driver', obj, function(err,result1){
for (var i in result1) {
var sendit = {
    from: 'vel3190@gmail.com',
    to: result1[i].email,
    subject: 'Customer Booking Id ',
    html: '<b>customer booking id: ' + data[0].bookid + '</b>' 
}};
smtpTransport.sendMail(sendit, function(error, result){
    if(error){
        return console.log(error);
    }

       console.log('Message sent: ' + result.message);
    smtpTransport.close(); */
	var myArray = {data: {bookid:data[0].bookid, status:'success'}};
	console.log(JSON.stringify(myArray));

   });
  // });
   //});
