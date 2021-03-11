

/** Serving static files in Express */

const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.resolve(__dirname, 'public'); //get folder relative to project 


app.use(publicpath, express.static('static')); // use relative folder

