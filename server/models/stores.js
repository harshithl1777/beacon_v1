const { MongoClient } = require('mongodb');
const axios = require('axios');

const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_USER_PW}@cluster0.h96zb.mongodb.net/web-app?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const updateData = async (docID, data, callback) => {
    client.connect(err => {
        if (!err) {
            const stores = client.db().collection('stores');
            stores.findOne({ _id: docID }, { projection: { _id: 0, lines: 1, stock: 1 } })
            .then((result) => {
                let oldData = result;
                oldData.lines = data.lines;
                data.stock.forEach(({ name }) => {
                    oldData.stock.forEach((product, index) => { 
                        if(product.name === name) {
                            oldData.stock.splice(index, 1);
                        }
                    });
                });
                data.stock.forEach(newProduct => {
                    oldData.stock.push(newProduct);
                });
                stores.updateOne({ _id: docID, $set: { stock: oldData.stock, lines: oldData.lines } });
            })
            .catch((err) => {
                console.log(err);
                // const newStore = data;
                // newStore['followers'] = 0;
                // collection.insertOne(newStore)
                // .then((result) => {
                //     client.close();
                //     callback([result.insertedCount, uid]);
                // })
                // .catch((err) => {
                //     console.log(err);
                //     client.close();
                //     callback([null]);
                // });
            });
        } else {
            console.log(err);
            client.close();
            callback([null]);
        } 
    });
}

const newFollower = async (docID, callback) => {

}

const getData = async (docID, callback) => {

}

module.exports = {
    updateData
    // newFollower,
    // getData
}