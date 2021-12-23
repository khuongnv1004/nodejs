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

let getDetailPage = async (req, res) => {
    let id = req.params.userID;
    const [user] = await pool.execute(`SELECT * FROM users WHERE id=?`,[id]);
    return res.render('user',{dataUser: user[0]})
  }

let deleteUser = async (req, res) =>{
  let userID = req.body.userId;
  await pool.execute(`DELETE FROM users WHERE id=?`,[userID]);
  return res.redirect('/')

}

let getEditUser = async (req, res) =>{
  let userID = req.params.id;
  let [user] =  await pool.execute(`SELECT * FROM users WHERE id=?`,[userID]);
  return res.render('editUser', {dataUser: user[0]})
}

  let updateUser = async (req, res) => {
    let {firstName, lastName, email, address, id} = req.body;
    await pool.execute(`Update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?`,[firstName, lastName, email, address, id]);
    return res.redirect('/')
}

let createUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    await pool.execute(`Insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)`,[firstName, lastName, email, address]);
    return res.redirect('/')

}

module.exports = {
    getHomepage, getDetailPage, createUser, deleteUser, getEditUser, updateUser
}