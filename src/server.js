import express from 'express';
const configViewEngine = require('./config/viewEngine')
const initWebRouter = require('./route/home')
const apiRouter = require('./route/api')
import connection from './config/connectDB'
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

configViewEngine(app);
initWebRouter(app);
apiRouter(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
