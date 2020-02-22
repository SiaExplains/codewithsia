const fs = require('fs');
const path = require('path');
const config = require('config');
const express = require('express');
const _ = require('lodash');
const fileManagerRoutes = express.Router();
const EventEmitter = require('events');
const IncomingForm = require('formidable');
const imageFilter = require('../../../helpers/image-filter');
const auth = require('../../../helpers/auth');

fileManagerRoutes.post('/create-dir', auth, (req, res) => {
    const body = _.pick(req.body, ['dir', 'path']);
    let currentPath = body.path.replace(/\|/g, '/');
    let pathx = path.join(
        __dirname,
        '../../',
        config.get('SERVEDIR'),
        currentPath
    );
    fs.mkdir(path.join(pathx, body.dir), { recursive: true }, err => {
        if (err) {
            res.status(500).json({
                Error: `Error: ${err}`
            });
        }
        res.status(200).json({ Message: 'directory has been created' });
    });
});

fileManagerRoutes.post('/upload/', (req, res) => {
    var form = new IncomingForm();

    form.on('field', function(field, relpath) {
        console.log(relpath);

        form.on('file', (field, file) => {
            //const body = _.pick(req.body, ['path']);
            let currentPath = relpath.replace(/\|/g, '/');
            let pathx = path.join(
                __dirname,
                '../../',
                config.get('SERVEDIR'),
                currentPath
            );

            // Do something with the file
            // e.g. save it to the database
            // you can access it using file.path
            fs.rename(file.path, path.join(pathx, file.name), function(err) {
                if (err) throw err;
            });
        });
    });

    form.on('end', () => {
        res.status(200).json({ Message: 'File uploaded!!!' });
    });
    form.parse(req);
});

fileManagerRoutes.post('/delete-dir/:dir', auth, (req, res) => {
    const body = _.pick(req.body, ['dir', 'path']);
    let currentPath = body.path.replace(/\|/g, '/');
    let pathx = path.join(
        __dirname,
        '../../',
        config.get('SERVEDIR'),
        currentPath
    );

    var deleteFolderRecursive = function(path) {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function(file, index) {
                var curPath = path + '/' + file;
                if (fs.lstatSync(curPath).isDirectory()) {
                    // recurse
                    deleteFolderRecursive(curPath);
                } else {
                    // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };

    deleteFolderRecursive();
});

fileManagerRoutes.get('/:dir/', auth, (req, res) => {
    try {
        filesEE = new EventEmitter();

        let dir = req.params ? req.params.dir : '';
        dir = dir.replace(/\|/g, '/');
        let pathx = path.join(__dirname, '../../', config.get('SERVEDIR'), dir);
        let result = [];

        fs.readdir(path.join(pathx), (err, files) => {
            if (err) {
                console.log(`Error: ${err}`);
                res.status(500).json({
                    Error: `Error: ENOENT: no such file or directory, ${err}`
                });
            }

            files.forEach(itemName => {
                let currentItemName = path.join(pathx, itemName);

                let stats = fs.lstatSync(currentItemName);
                let resultItem = {
                    name: itemName,
                    type: stats.isFile() ? 'file' : 'dir'
                };
                result.push(resultItem);
            });

            filesEE.emit('files_ready'); // trigger files_ready event
        });

        filesEE.on('files_ready', function() {
            res.status(200).json({ items: result });
        });
    } catch (error) {
        res.status(500).json({
            Error: `Error: ENOENT: no such file or directory, ${error}`
        });
    }
});

module.exports = fileManagerRoutes;
