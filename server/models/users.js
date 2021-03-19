const firebase = require('firebase-admin');
const { MongoClient } = require('mongodb');
const serviceAccountKey = require('../config/beacon-web-auth-firebase-adminsdk-irwqh-baedb33fd2.json');

firebase.initializeApp({ 
    credential: firebase.credential.cert(serviceAccountKey)
});

const newUserMongo = (uid, email, callback) => {
    const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_USER_PW}@cluster0.h96zb.mongodb.net/web-app?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db().collection('users');
        collection.insertOne({ _id: uid, email, contributions: [], following: [], credits: 25 })
        .then((result) => {
            client.close();
            callback([result.insertedCount, uid]);
        })
        .catch((err) => {
            console.log(err);
            client.close();
            callback([null]);
        });
      });
}


module.exports = {
    newUserMongo
};