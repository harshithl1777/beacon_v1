const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config/.env' });
const path = require('path');
const cors = require('cors');
const users = require('./routes/users.js');
const contributions = require('./routes/contributions.js');
const stores = require('./routes/stores.js');
const app = express();

// mount required routes and parsing libs
app.use(cors());
app.use(bodyParser.json());
app.use(users);
app.use(contributions);
app.use(stores);

// mount build files to server
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

// hand all unused routes to react router
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Express is running on port ${port}`);