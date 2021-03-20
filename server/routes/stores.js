const express = require('express');
const stores =  require('../models/stores');
const app = module.exports = express();

app.post('/api/data/update', ({ body }, res) => {
    if (body.token === process.env.API_STORE_DATA_TOKEN) {
        stores.updateData(body.docID, body.data, (result) => {
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

