const express = require('express');
const auth =  require('../models/users');
console.log(process.env);
const app = module.exports = express();

app.post('/firebase/users/new', ({ body }, res) => {
        if (body.token === process.env.API_USERS_TOKEN) {
            auth.newUserFirebase(body.email, body.pw, (result) => {
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

app.post('/mongo/users/new', ({ body }, res) => {
    if (body.token === process.env.API_USERS_TOKEN) {
        auth.newUserMongo(body.uid, body.email, (result) => {
            if (result[0]) {
                res.send(JSON.stringify({ result: 'success', uid: result[1] }));
            } else {
                res.send(JSON.stringify({ result: 'failed' }));
            }
        });
    } else {
        console.log(body);
        res.send('invalid token');
    }
});

