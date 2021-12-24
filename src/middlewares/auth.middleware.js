import pool from  '../config/connectDB'

let requireAuth = async (req, res, next) =>{
    if(!req.cookies.set_cookie){
        res.redirect('/auth/sign-in')
        return;
    }
    
    const [rows, fields] = await pool.execute('SELECT * FROM `admin` Where id =?', [req.cookies.set_cookie]);
    if(rows.length <= 0){
        res.render('signIn',{error:'Wrong password or user'})
        return;
    }
    next();
  }

  module.exports = {requireAuth};