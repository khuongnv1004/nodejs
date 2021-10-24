import  express from 'express';
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRouter = (app) =>{
    router.get('/', homeController.getHomepage)
    router.get('/detail/user/:userID',homeController.getDetailpage)
    router.get('/about',(req, res) => { 
        res.send('Hello About!')
    }
    )


    return app.use('/', router)
}

module.exports = initWebRouter;