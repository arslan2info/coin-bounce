const express = require('express')
const dbConnect = require(`./database/index`);
const { PORT } = require('./config/index');
const router = require('./routes/index');

const app = express();

app.use(router);

dbConnect();




app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));