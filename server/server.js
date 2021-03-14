const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.send('Hello and welcome to the API');
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log('Express is listening');
});