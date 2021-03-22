const express = require('express');
const stores =  require('../models/stores');
const app = module.exports = express();

app.post('/api/stores/replace', ({ body }, res) => {
    if (body.token === process.env.API_STORE_DATA_TOKEN) {
        stores.replaceStore(body.data, (result) => {
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

app.get('/api/stores', ({ query }, res) => {
    if (query.token === process.env.API_STORE_DATA_TOKEN) {
        stores.getStore(query.docID, (result) => {
            if (result[0] !== null) {
                if (result[0] === '0') {
                    res.send({ data: 0 })
                } else {
                    res.send({ data: result[0] });
                }
            } else {
                res.status(500).send({ result: 'Failed' });
            }
        });
    } else {
        res.status(400).send({ result: 'Failed' });
    }
});

app.post('/api/stores/query', ({ body }, res) => {
    if (body.token === process.env.API_STORE_DATA_TOKEN) {
        stores.queryStores(body.origins, body.distance, (result) => {
            if (result) {
                res.status(200).send({ data: result });
            } else {
                res.status(500).send({ result: 'failed' });
            }
        });
    } else {
        res.status(400).send({ result: 'failed' })
    }
});

app.post('/api/stores/new', ({ body }, res) => {
    if (body.token === process.env.API_STORE_DATA_TOKEN) {
        stores.newStore(body.data, (result) => {
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

app.post('/api/stores/followers/new', ({ body }, res) => {
    if (body.token === process.env.API_STORE_DATA_TOKEN) {
        stores.newFollower(body.docID, (result) => {
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
