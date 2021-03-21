const { MongoClient } = require('mongodb');
const axios = require('axios');

const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_USER_PW}@cluster0.h96zb.mongodb.net/web-app?retryWrites=true&w=majority`;

const replaceStore = async (data, callback) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const stores = client.db().collection('stores');
        const filter = { _id: data.id };
        const result = await stores.replaceOne(filter, data);
        callback([result.modifiedCount]);
    } catch(err) {
        console.log(err);
        callback([null]);
    } finally {
        client.close();
    }
}

const getStore = async (docID, callback) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const stores = client.db().collection('stores');
        const filter = { _id: docID };
        const result = await stores.findOne(filter);
        callback([result]);
    } catch(err) {
        console.log(err);
        callback([null])
    } finally {
        client.close();
    }
}

const newStore = async (data, callback) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const stores = client.db().collection('stores');
        const result = await stores.insertOne(data);
        callback([result.insertedCount]);
    } catch(err) {
        callback([null])
    } finally {
        client.close();
    }
}

const newFollower = async (docID, callback) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const stores = client.db().collection('stores');
        const filter = { _id: docID };
        const result = await stores.updateOne(filter, { $inc: { followers: 1 } });
        callback([result.modifiedCount]);
    } catch(err) {
        callback([null]);
        client.close();
    } finally {
        client.close();
    }
}

module.exports = {
    replaceStore,
    getStore,
    newStore,
    newFollower
}