// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs'
});

// simple query
// connection.query(
//   'SELECT * FROM `users` ',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => {return row.id})
//     console.log(rows)
//   }
// );

export default pool;