import pool from  '../config/connectDB'

let signIn = async (req, res) =>{

    return res.render('signIn')
  
  }


let postSignin = async (req, res) =>{
     var username = req.body.username;
     var password = req.body.password;
    
    const [rows, fields] = await pool.execute('SELECT * FROM `admin` Where user_name = ? and password = ?', [username, password]);
    console.log(rows)
    if(rows.length <= 0){
        res.redirect('/auth/sign-in')   
    } else{
        res.redirect('/')
    }
    return;
}

module.exports = {
     postSignin, signIn
}