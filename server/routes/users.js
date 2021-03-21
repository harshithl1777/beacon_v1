const express = require('express');
const auth =  require('../models/users');
const app = module.exports = express();

app.post('/api/users/new', ({ body }, res) => {
    if (body.token === process.env.API_USERS_TOKEN) {
        auth.newUser(body.uid, body.email, (result) => {
            if (result[0]) {
                res.send({ uid: result[1] });
            } else {
                res.status(500).send({ result: 'failed' });
            }
        });
    } else {
        res.status(400).send({ result: 'failed' });
    }
});

