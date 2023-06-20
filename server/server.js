const express = require('express');
const app = express();
require('dotenv').config();

const dBConfig = require('./config/dBConfig');

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node/express js server started on port ${port}`));

