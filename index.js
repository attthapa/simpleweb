const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Pakhnus ta Bhele Baje!!!!!');
});

app.listen(8080, () => {
    console.log('Listenning on port 8080');
});