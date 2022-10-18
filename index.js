const express = require('express');
const {router} = require('./router/index');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
app.listen(process.env.PORT || 3000);

