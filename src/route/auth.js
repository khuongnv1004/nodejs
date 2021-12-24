import  express from 'express';
import authController from '../controller/authController'
let router = express.Router();

const authRouter = (app) =>{

    router.get('/sign-up', authController.signUp);
    router.post('/post-sign-up', authController.postSignUp);

    router.get('/sign-in', authController.signIn);
    router.post('/post-sign-in', authController.postSignin);

    return app.use('/auth/', router)
}

module.exports = authRouter;