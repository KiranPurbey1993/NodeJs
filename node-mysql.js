var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
  });

  con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});