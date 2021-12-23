import  express from 'express';
import apiController from '../controller/apiController'
let router = express.Router();

const apiRouter = (app) =>{
    router.get('/users', apiController.getAllUsers);
    router.post('/create', apiController.createUser);
    router.put('/update', apiController.updateUser);
    router.delete('/delete/:id', apiController.deleteUser)

    return app.use('/api/', router)
}

module.exports = apiRouter;