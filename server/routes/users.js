const express = require('express');
const auth =  require('../models/auth');
const app = module.exports = express();

app.post('/api/users/new', ({ body }, res) => {
        if (body.token === process.env.API_USERS_TOKEN) {
            auth.createUser(body.email, body.pw, (result) => {
                if (result[0]) {
                    res.send(JSON.stringify({
                        result: 'success',
                        uid: result[0],
                    }));
                } else {
                    res.send(JSON.stringify({
                        result: 'failed',
                        errorCode: result[1],
                        errorMessage: result[2]
                    }));
                }
            });
        } else {
            res.send('invalid token');
        }
});

