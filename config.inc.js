/* Pear Database for connect the AZURE DB*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "nodejstestdb.mysql.database.azure.com",
  port: "3306",
  user: "azureuser@nodejstestdb",
  password: "Azure123456!",
  database: "nodejstestdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//var conn = mysql.createConnection({host: "nodejstestdb.mysql.database.azure.com", user: "azureuser@nodejstestdb", password: {your_password}, database: {your_database}, port: 3306, ssl:{ca:fs.readFileSync({ca-cert filename})}});
