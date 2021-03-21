const express = require('express');
const contributions =  require('../models/contributions');
const app = module.exports = express();

app.post('/api/users/contributions/new', ({ body }, res) => {
    if (body.token === process.env.API_CONTRIBUTIONS_TOKEN) {
        contributions.newContribution(body.uid, body.contribution, (result) => {
            if (result[0]) {
                res.send({ result: 'success' });
            } else {
                res.status(500).send({ result: 'failed' });
            }
        });
    } else {
        res.status(400).send({ result: 'failed' });
    }
});

app.get('/api/users/contributions', ({ query }, res) => {
    if (query.token === process.env.API_GET_CONTRIBUTIONS_TOKEN) {
        contributions.getContributions(query.uid, (result) => {
            if (result[0]) {
                res.send({ result: 'success', data: result[0] });
            } else {
                res.status(500).send({ result: 'failed' });
            }
        });
    } else {
        res.status(400).send({ result: 'failed' });
    }
});



