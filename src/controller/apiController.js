import pool from  '../config/connectDB'

let getAllUsers = async (req, res) =>{
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');

    return res.status(200).json({
        message: 'Success',
        data: rows
    })

}
 let createUser = async (req, res) =>{
    let {firstName, lastName, email, address} = req.body;
    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute(`Insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)`,[firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'Success',
    })

}
let updateUser =async(req, res) =>{
    let {firstName, lastName, email, address, id} = req.body;
    if(!firstName || !lastName || !email || !address || !id){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute(`Update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?`,[firstName, lastName, email, address, id]);

    return res.status(200).json({
        message: 'Success',
    })
}

let deleteUser = async (req, res) =>{
    let userID = req.params.id;
    if(!userID){
        return res.status(200).json({
            message: 'missing required params'
        })
      
    }
    await pool.execute(`DELETE FROM users WHERE id=?`,[userID]);
    return res.status(200).json({
        message: 'Success'
    })
  
  }



module.exports = {
    getAllUsers, createUser, updateUser, deleteUser
}