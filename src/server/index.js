const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '../../dist')));
app.use('/public/image', express.static(path.join(__dirname, '../../public/image')));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
