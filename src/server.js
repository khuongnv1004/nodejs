import express from 'express';
const configViewEngine = require('./config/viewEngine')
const initWebRouter = require('./route/home')
import connection from './config/connectDB'
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
configViewEngine(app);
initWebRouter(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
