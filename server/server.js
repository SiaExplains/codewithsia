const express = require('express');
const config = require('config');
const { initExpress, initLogger } = require('./helpers/initializer');
const articleRoutes = require('./routes/api/articles');
const path = require('path');

let app = express();
let API_PORT = config.get('API_PORT') || 5000;

initLogger(app);
initExpress(app);

app.use('/api/articles', articleRoutes);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(API_PORT, () => {
    console.log(`Back-End Level: ${config.get('Level')}`);
    console.log(`Back-End API is rurring on port [${API_PORT}]...!`);
});
