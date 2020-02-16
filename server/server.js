const express = require('express');
const config = require('config');
const { initExpress, initLogger } = require('./helpers/initializer');
const articleRoutes = require('./routes/api/articles');
const tagRoutes = require('./routes/api/tags');
const fileManagerRoutes = require('./routes/api/file-manager');
const userRoutes = require('./routes/api/users');

const path = require('path');
const _ = require('lodash');
const bodyParser = require('body-parser');
let app = express();
let API_PORT = config.get('API_PORT') || 5000;

initLogger(app);
initExpress(app);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/upload/article', (req, res) => {
    var fs = require('fs');

    console.log(req);
});

app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/file-manager', fileManagerRoutes);
app.use(express.static(path.join(__dirname, config.get('SERVEDIR'))));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(API_PORT, () => {
    console.log(`Back-End Level: ${config.get('Level')}`);
    console.log(`Back-End API is rurring on port [${API_PORT}]...!`);
});
