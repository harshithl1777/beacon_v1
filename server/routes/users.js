const express = require('express');
const users =  require('../models/users');
const app = module.exports = express();

app.post('/api/users/new', ({ body }, res) => {
    if (body.token === process.env.API_USERS_TOKEN) {
        users.newUser(body.uid, body.email, (result) => {
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


app.get('/api/users/credits', ({ query }, res) => {
    if (query.token === process.env.API_GET_USERS_TOKEN) {
        users.getCredits(query.uid, (result) => {
            if (result[0]) {
                res.send({ result: 'success', credits: result[1] })
            } else {
                res.status(500).send({ result: 'failed' });
            }
        });
    } else {
        res.status(400).send({ result: 'failed' });
    }
});

