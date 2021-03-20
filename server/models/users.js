const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_USER_PW}@cluster0.h96zb.mongodb.net/web-app?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const newUser = (uid, email, callback) => {
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

const newContribution = async (docID, contribution, callback) => {
    try {
        await client.connect();
        const users = client.db().collection('users');
        let conts = await users.findOne({ _id: docID }, { projection: { _id: 0, contributions: 1, credits: 1 } });
        conts.contributions.unshift(contribution);
        conts.credits += 5;
        const updatedData = { $set: { contributions: conts.contributions, credits: conts.credits } };
        const result = await users.updateOne({ _id: docID }, updatedData);
        callback([result.modifiedCount, docID]);
    } catch(err) {
        callback([null]);
    } finally {
        client.close();
    }
}

const getContributions = async (docID, callback) => {
    try {
        await client.connect();
        const users = client.db().collection('users');
        let contributions = await users.findOne({ _id: docID }, { projection: { _id: 0, contributions: 1 } });
        callback([contributions]);
    } catch(err) {
        console.log(err);
        callback([null]);
    } finally {
        client.close();
    }
}


module.exports = {
    newUser,
    newContribution,
    getContributions
};