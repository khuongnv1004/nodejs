import  express from 'express';
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRouter = (app) =>{
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userID',homeController.getDetailPage);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditUser)
    router.post('/update-user', homeController.updateUser);
    router.post('/create-new-user', homeController.createUser);


    return app.use('/', router)
}

module.exports = initWebRouter;