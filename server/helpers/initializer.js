const config = require('config');
const { Pool } = require('pg');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');

const dbPool = new Pool({
    host: config.get('PGHOST'),
    port: config.get('PGPORT'),
    database: config.get('PGDATABASE'),
    user: config.get('PGUSER'),
    password: config.get('PGPASSWORD'),
    schema: config.get('PGSCHEMA')
});

initExpress = app => {
    app.use('/images/articles', express.static('public/images/articles'));

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.json());
    app.use(helmet());
};

const { Logger, logmid } = require('logmog');

initLogger = app => {
    let logmog = new Logger(true, path.join(__dirname, '../logs'));
    app.use(logmid('normal', logmog));
    return logmid;
};

module.exports = { initExpress, initLogger, dbPool };
