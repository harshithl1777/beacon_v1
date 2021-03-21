const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_USER_PW}@cluster0.h96zb.mongodb.net/web-app?retryWrites=true&w=majority`;

const newUser = (uid, email, callback) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        if (!err) {
            const collection = client.db().collection('users');
            collection.insertOne({ _id: uid, email, contributions: [], credits: 10 })
            .then((result) => {
                client.close();
                callback([result.insertedCount, uid]);
            })
            .catch((err) => {
                console.log(err);
                client.close();
                callback([null]);
            });
        } else {
            console.log(err);
            client.close();
            callback([null]);
        } 
      });
}


const getCredits = async (uid, callback) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const users = client.db().collection('users');
        const result = await users.findOne({ _id: uid });
        callback([1, result.credits]);
    } catch(err) {
        console.log(err);
        callback([null]);
    } finally {
        client.close();
    }
}

module.exports = {
    newUser,
    getCredits,
};