const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, '../../public')));
app.use('/', express.static(path.join(__dirname, '../../dist')));

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
