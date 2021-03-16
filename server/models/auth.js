const firebase = require('firebase-admin');
const serviceAccountKey = require('../config/beacon-web-auth-firebase-adminsdk-irwqh-baedb33fd2.json');

firebase.initializeApp({ 
    credential: firebase.credential.cert(serviceAccountKey)
});

const createUser = (email, password, callback) => {
    firebase.auth()
    .createUser({
        email: email,
        password: password,
    })
    .then(({ uid }) => { callback([uid]); })
    .catch(({errorInfo}) => { callback([null, errorInfo.code, errorInfo.message]) });//return [null, errorInfo.code ,errorInfo.message] });
}



module.exports = {
    createUser,
};