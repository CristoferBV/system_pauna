// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'plataformaadministrativauna',
  password: ''
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexion exitosa!");

    // Mantener el programa en ejecución durante 10 segundos
    setTimeout(function () {
      connection.end();
      console.log("Conexión cerrada. Programa terminado.");
    }, 10000); // 10000 milisegundos = 10 segundos
  }
});


// simple query
// connection.query(
//   'SELECT * FROM `login` WHERE `userName` = "Andrey" AND `role` = "Biblioteca"',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
