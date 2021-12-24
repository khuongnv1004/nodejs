import  express from 'express';
import homeController from '../controller/homeController'
import authMiddleware from '../middlewares/auth.middleware'
let router = express.Router();

const initWebRouter = (app) =>{
    router.get('/',authMiddleware.requireAuth  ,homeController.getHomepage);
    router.get('/detail/user/:userID',authMiddleware.requireAuth ,homeController.getDetailPage);
    router.post('/delete-user' ,authMiddleware.requireAuth , homeController.deleteUser);
    router.get('/edit-user/:id' ,authMiddleware.requireAuth , homeController.getEditUser)
    router.post('/update-user' ,authMiddleware.requireAuth , homeController.updateUser);
    router.post('/create-new-user' ,authMiddleware.requireAuth , homeController.createUser);


    return app.use('/',router)
}

module.exports = initWebRouter;