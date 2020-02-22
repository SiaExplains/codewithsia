const express = require('express');
const { dbPool } = require('../../../helpers/initializer');
const _ = require('lodash');
const auth = require('../../../helpers/auth');

const tagRoutes = express.Router();

tagRoutes.get('/', (req, res) => {
    dbPool.query('SELECT "Id", "Name" FROM public."Tags"', (error, results) => {
        if (error) {
            console.log(error);
        }
        res.status(200).json(results.rows);
    });
});

tagRoutes.get('/:id/', auth, (req, res) => {
    const query = {
        name: 'fetch-an-tag',
        text: 'SELECT * FROM public."Tags" WHERE "Id" = $1',
        values: [req.params.id]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ Error: 'Tag not found' });
        }
        res.status(200).json(results.rows[0]);
    });
});

tagRoutes.delete('/:id/', auth, (req, res) => {
    const query = {
        name: 'delete-a-tag',
        text: 'DELETE FROM public."Tags" WHERE "Id" = $1',
        values: [req.params.id]
    };
    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
        }

        res.status(200).json({ Message: 'Tag has been deleted.' });
    });
});

tagRoutes.post('/', auth, (req, res) => {
    const body = _.pick(req.body, ['Name']);
    console.log(body);
    const query = {
        name: 'insert-a-tag',
        text: `INSERT INTO public."Tags"
            ("Name") 
            VALUES($1)`,
        values: [body.Name]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        res.status(200).json({ Message: 'Tag saved.' });
    });
});

tagRoutes.put('/', auth, (req, res) => {
    const body = _.pick(req.body, ['Id', 'Name']);
    console.log(body);
    const query = {
        name: 'update-a-tag',
        text: `UPDATE public."Tags" SET  "Name"=($2) WHERE "Id"=($1)`,
        values: [body.Id, body.Name]
    };

    dbPool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ Error: error });
        }
        res.status(200).json({ Message: 'Tag updated.' });
    });
});

module.exports = tagRoutes;
