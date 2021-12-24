import pool from  '../config/connectDB'

let signIn = async (req, res) =>{
    return res.render('signIn',{error:false})
    
  }

let signUp = async (req, res) =>{
    return res.render('signUp')
    
  }

let postSignUp = async (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;
   
    await pool.execute(`Insert into admin (user_name, password) values (?, ?)`,[username, password]);
    return res.redirect('/auth/sign-in')
}


let postSignin = async (req, res) =>{
     var username = req.body.username;
     var password = req.body.password;
    
    const [rows, fields] = await pool.execute('SELECT * FROM `admin` Where user_name = ? and password = ?', [username, password]);
    console.log(rows[0].ID)
    if(rows.length <= 0){
        res.render('signIn',{error:'Wrong password or user'})
        return;
    } 
    res.cookie('set_cookie', rows[0].ID)
    res.redirect('/')
    
  
    
}



module.exports = {
     postSignin, signIn, postSignUp, signUp

}