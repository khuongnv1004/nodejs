import pool from  '../config/connectDB'

let getHomepage = async (req, res) => {

    // let data = [];

    // connection.query(
    //     'SELECT * FROM `users` ',
    //     function(err, results, fields) {
    //       console.log(results); // results contains rows returned by server
    //         results.map((row) => {data.push({
    //           id: row.id,
    //           email: row.email,
    //           address: row.address,
    //           firstName: row.firstName,
    //           lastName: row.lastName

    //       })
    //     })
    //     return res.render('index',{dataUser: data})
    //     }
    //   );
      const [rows, fields] = await pool.execute('SELECT * FROM `users`');
      return res.render('index',{dataUser: rows})
}

let getDetailpage = async (req, res) => {
    let id = req.params.userID;
    const [user] = await pool.execute(`SELECT * FROM users WHERE id=?`,[id]);
    
    return res.send(JSON.stringify(user))
  }

module.exports = {
    getHomepage, getDetailpage
}